<script setup lang="ts">
import type { User } from '@/api/graphql';
import { ref } from 'vue'
import { RateUserDocument, type Rateing } from '@/api/graphql';
import { useUserStore } from '@/store/user';
import { useMutation } from '@vue/apollo-composable';

const props = defineProps<{
  user: User
}>()

const { mutate: mutateRate } = useMutation(RateUserDocument)

const userStore = useUserStore()

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

const rate = ref<number>(0)
const userRates = ref<Rateing[]>([])
if(props.user?.myRates) {
  userRates.value = props.user.myRates
}

props.user?.myRates?.forEach(r => {
  if(r.fromId == userStore.user?.id) { rate.value = r.rate }
})

function range(start: number, end: number) {
 return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

async function changeRate(i: number) {
  const userId = userStore.user?.id
  if(!userId) return
  if(userId == props.user?.id) return
  rate.value = i
  await mutateRate({ fromId: userId, toId: props.user.id, rate: rate.value })
  userRates.value = userRates.value.map((r) => {
    if(r.fromId == userId) {
      return { ...r, rate: rate.value }
    }
    return r
  })
  if(!userRates.value.find(a => a.fromId == userId)) {
    userRates.value.push({fromId: userId, toId: props.user.id, rate: rate.value})
  }
}
</script>
<template>
  <div class="detaiils-container w-full lg:w-[400px] lg:h-[250px] lg:sticky">
    <div><i class="fa fa-user"></i> <a :href="'/user/'+user.id">{{ user?.username }}</a>{{ userRates.length > 0 ? Math.round(userRates.reduce((a, v) => a+v.rate, 0)/userRates.length * 10)/10 : 0 }}<i class="fa-solid fa-star"></i></div>
    <div><i class="fa-solid fa-clock"></i> {{ formatDate(user?.createdAt) }}</div>
    <div><i class="fa-solid fa-layer-group"></i> {{ user?.email }}</div>
    <div class="flex flex-col" v-if="userStore.user && userStore.user.id != user.id">
      <div>Ofera o nota acestui utilizator:</div>
      <div>
        <i v-for="i in range(1, rate)" :key="i" @click="() => changeRate(i)" class="fa-solid fa-star"></i>
        <i v-for="i in range(rate+1, 5)" :key="i" @click="() => changeRate(i)" class="fa-regular fa-star"></i>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  top: 2rem;
}
.detaiils-container div {
  display: flex;
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
</style>