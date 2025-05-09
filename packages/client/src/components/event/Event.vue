<script setup lang="ts">
import Announces from './Announce.vue';
import Participants from '../user/ProfileMini.vue';
import { computed, onMounted, ref, watch } from 'vue';

import { type Event, SubscribeEventDocument, UnsubscribeEventDocument, RateUserDocument, CommentDocument, type Rateing, type Comment } from '@/api/graphql';
import { useUserStore } from '@/store/user';

import { useMutation } from '@vue/apollo-composable';
import router from '@/router';

const { mutate: mutateSub } = useMutation(SubscribeEventDocument)
const { mutate: mutateUnSub } = useMutation(UnsubscribeEventDocument)
const { mutate: mutateRate } = useMutation(RateUserDocument)
const { mutate: mutateComment } = useMutation(CommentDocument)

const props = defineProps<{
  event: Event
  loading: Boolean
}>()

const emit = defineEmits<{
  (e: 'refetch'): void
}>()

function edit() {
  router.push("/create/" + props.event.id)
}
async function join() {
  await mutateSub({ eventId: props.event.id })
  emit('refetch')
}
async function leave() {
  await mutateUnSub({ eventId: props.event.id })
  emit('refetch')
}
function announce() {
  router.push("/announce/" + props.event.id)
}
function formatDate(date: string) {
  return new Date(date).toLocaleString("ro-RO", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

const showFullDescription = ref<boolean>(false)

const userStore = useUserStore()

onMounted(() => {
  emit('refetch')  
})

const rate = ref<number>(0)
const userRates = ref<Rateing[]>([])
if(props.event.creator.myRates) {
  userRates.value = props.event.creator.myRates
}

props.event.creator.myRates?.forEach(r => {
  if(r.fromId == userStore.user?.id) { rate.value = r.rate }
})

function range(start: number, end: number) {
 return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

async function changeRate(i: number) {
  const userId = userStore.user?.id
  if(!userId) return
  if(userId == props.event.creator.id) return
  rate.value = i
  await mutateRate({ fromId: userId, toId: props.event.creator.id, rate: rate.value })
  userRates.value = userRates.value.map((r) => {
    if(r.fromId == userId) {
      return { ...r, rate: rate.value }
    }
    return r
  })
  if(!userRates.value.find(a => a.fromId == userId)) {
    userRates.value.push({fromId: userId, toId: props.event.creator.id, rate: rate.value})
  }
}

const commentInp = ref<string>("")
const comments = ref<Comment[]>([])
const commentsAddedNow = ref<Comment[]>([])
const reverseComments = computed(() => [...comments.value].reverse())

if(props.event.comments) {
  comments.value = props.event.comments
}

async function comment() {
  const userId = userStore.user?.id
  if(!userId) return
  const res = await mutateComment({ fromId: userId, eventId: props.event.id, comment: commentInp.value })
  if(res?.data?.comment) commentsAddedNow.value.push(res.data.comment as Comment)
  commentInp.value = ""
}

</script>

<template>
  <div class="event-container">
    <img :src="'/uploads/' + event.image" class="event-image" />

    <div class="event-content-grid">
      <div class="event-info">
        <h1>{{ event.title }}</h1>
        <div><p>
  {{ showFullDescription ? event.description : event.description.slice(0, 200) + '...' }}
</p>
<button v-if="event.description.length > 200" @click="showFullDescription = !showFullDescription" class="toggle-description-btn">
  {{ showFullDescription ? 'Afișează mai puțin' : 'Afișează mai mult' }}
</button></div>
        <Announces :announces="event.announces" />
        <p v-if="event.category"><strong>Category:</strong> {{ event.category.name }}</p>
        <Participants :users="event.participants" />
        <form class="w-full relative" @submit.prevent="comment">
          <input v-model="commentInp" type="text" class="w-full commentInput" placeholder="comment">
          <i class="fa-solid fa-paper-plane absolute right-6 bottom-[50%] translate-x-[50%] translate-y-[50%] cursor-pointer" @click="comment"></i>
        </form>
        <div v-for="comment in commentsAddedNow.reverse()">{{ comment.from.username }}: {{ comment.comment }}</div>
        <div v-for="comment in reverseComments">{{ comment.from.username }}: {{ comment.comment }}</div>
      </div>
      <div class="detaiils-container">
        <div v-if="!loading">
          <div v-if="userStore.user?.id != event.creator.id" class="w-full">
            <button class="w-full" v-if="!event.participants?.find(a => a.id == userStore.user?.id)" @click="join">Alătură-te evenimentului</button>
            <button class="w-full" v-else @click="leave">Ieși din eveniment</button>
          </div>
          <div v-else class="flex-col flex w-full">
            <button class="w-full" @click="edit">Editează evenimentul</button>
            <button class="w-full" @click="announce">Posteaza un anunț</button>
          </div>
        </div>
        <button v-else>Loading...</button>
        <div><i class="fa fa-location-arrow"></i> {{ event.address }}</div>
        <div><i class="fa-solid fa-clock"></i> {{ formatDate(event.date) }}</div>
        <div><i class="fa-solid fa-layer-group"></i> {{ event.category.name }}</div>
        <div><i class="fa fa-user"></i> <a :href="'/user/' + event.creator.id">{{ event.creator.username }}</a>{{ userRates.length > 0 ? Math.round(userRates.reduce((a, v) => a+v.rate, 0)/userRates.length * 10)/10 : 0 }}<i class="fa-solid fa-star"></i></div>
        <div class="flex flex-col" v-if="userStore.user && userStore.user.id != event.creator.id">
          <div>Ofera o nota acestui utilizator:</div>
          <div>
            <i v-for="i in range(1, rate)" :key="i" @click="() => changeRate(i)" class="fa-solid fa-star"></i>
            <i v-for="i in range(rate+1, 5)" :key="i" @click="() => changeRate(i)" class="fa-regular fa-star"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.event-container {
  padding: 5rem;
  background-color: #f9fafb;
}
.commentInput {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  font-size: 1em;
  box-sizing: border-box;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}
@media (max-width: 768px) {
  .event-container {
    padding: 2rem;
  }  
}
.event-image {
  width: 100%;
  max-width: 1000px;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  display: block;
  margin: 0 auto 2rem auto;
}
.event-content-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 2.5rem;
  align-items: start;
}
.event-info {
  max-width: 700px;
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}
.event-info h1 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}
.event-info > div,
.event-info p {
  font-size: 1rem;
  line-height: 1.6;
  color: #444;
  margin-bottom: 1rem;
}
.toggle-description-btn {
  background-color: transparent;
  color: #007bff;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.3rem 0.5rem;
  margin-top: -0.5rem;
  display: inline-block;
  transition: color 0.2s ease;
}
.toggle-description-btn:hover {
  color: #0056b3;
  text-decoration: underline;
}
.detaiils-container {
  background-color: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  font-size: 16px;
  color: #333;
  display: flex;
  flex-direction: column;
  gap: 1rem;
    position: sticky;
  top: 2rem;
}
.detaiils-container div {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.detaiils-container i {
  color: #007bff;
  font-size: 1.2rem;
}
.detaiils-container a {
  color: #28a745;
  text-decoration: none;
  font-weight: 500;
}
.detaiils-container a:hover {
  text-decoration: underline;
}
.detaiils-container button {
  background-color: #007bff;
  color: white;
  padding: 0.75rem 1.25rem;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.1s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}
.detaiils-container button:hover {
  background-color: #0056b3;
  transform: scale(1.02);
}
@media (max-width: 768px) {
  .event-content-grid {
    grid-template-columns: 1fr;
  }
  .detaiils-container {
    width: 100%;
    margin-top: 1.5rem;
  }
}
</style>