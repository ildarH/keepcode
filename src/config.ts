const USE_MOCK_DATA_FOR_PROFILE = true
const USE_MOCK_DATA_FOR_USERS = false
const USE_MOCK_DATA_FOR_USER = true
const USE_MOCK_DATA_FOR_DOCUMENTS = false
const MAX_DOCUMENTS = 4
const MOCK_DELAY = 1000
const API_URL = 'https://jsonplaceholder.typicode.com'

enum ROUTE {
  HOME = '/',
  SCHEDULE = '/schedule',
  PUPILS = '/pupils',
  TEACHERS = '/teachers',
  LESSONS = '/lessons',
  GROUPS = '/groups',
  PROFILE = '/profile'
}

const USE_MOCK = {
  PROFILE: USE_MOCK_DATA_FOR_PROFILE,
  USERS: USE_MOCK_DATA_FOR_USERS,
  USER: USE_MOCK_DATA_FOR_USER,
  DOCUMENTS: USE_MOCK_DATA_FOR_DOCUMENTS
}

export const CONFIG = {
  USE_MOCK,
  API_URL,
  MOCK_DELAY,
  MAX_DOCUMENTS,
  ROUTE
} as const
