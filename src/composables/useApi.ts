import { Http } from '@/api'

const http = new Http()

export const useApi = () => {
  return {
    http
  }
}
