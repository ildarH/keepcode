import type { Profile } from '@/@types'
import { ref } from 'vue'
import { useApi } from '@/composables/useApi'

export const useProfile = () => {
  const { http } = useApi()
  const profile = ref<Profile | null>(null)
  const error = ref<string | null | unknown>(null)
  const loading = ref<boolean>(false)

  async function fetchProfile() {
    loading.value = true
    error.value = null
    try {
      profile.value = await http.getProfile()
    } catch (err) {
      console.error('fetchProfile error: ', err)
      error.value = err
    } finally {
      loading.value = false
    }
  }

  function logout() {
    console.log('logout')
  }

  return {
    profile,
    error,
    loading,
    fetchProfile,
    logout
  }
}
