import { useApi } from '@/composables/useApi'
import { ref } from 'vue'
import type { User } from '@/@types'

export const useUser = () => {
  const { http } = useApi()
  const user = ref<User | null>(null)
  const error = ref<string | null | unknown>(null)
  const loading = ref<boolean>(false)

  async function fetchUser() {
    loading.value = true
    error.value = null
    try {
      user.value = await http.getUser()
    } catch (err) {
      console.error('fetchUser error: ', err)
      error.value = err
    } finally {
      loading.value = false
    }
  }

  return {
    user,
    error,
    loading,
    fetchUser
  }
}
