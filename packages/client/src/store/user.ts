import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { MeDocument, type User } from '@/api/graphql'

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null)
  const { onResult, refetch, loading } = useQuery(MeDocument)

  onResult(({ data }) => {
    if(data?.me) {
      user.value = data?.me as User
    } else {
      user.value = null
    }
  })

  const refreshUser = async () => {
    refetch()
  }

  return {
    user,
    refreshUser,
    loading
  }
})
