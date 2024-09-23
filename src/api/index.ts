import { CONFIG } from '@/config'
import { MOCKS } from '@/__mocks__'
import type { Post, Profile, User, UserDocument } from '@/@types'

const API_URL = CONFIG.API_URL

const ERRORS = {
  NOT_IMPLEMENTED: 'Not implemented'
}

function throwErr(msg: string): never {
  throw new Error(msg)
}

export class Http {
  private readonly useMockData: typeof CONFIG.USE_MOCK
  private readonly apiUrl: string
  private readonly mockDelay: number

  constructor(config?: {
    useMockData?: typeof CONFIG.USE_MOCK
    apiUrl?: string
    mockDelay?: number
  }) {
    this.useMockData = config?.useMockData || CONFIG.USE_MOCK
    this.apiUrl = config?.apiUrl || API_URL
    this.mockDelay = config?.mockDelay || CONFIG.MOCK_DELAY
  }

  private getProfile(): Promise<Profile> {
    if (!this.useMockData.PROFILE) {
      throwErr(ERRORS.NOT_IMPLEMENTED)
    }
    return this.simulateDelay(Promise.resolve(MOCKS.Profile as Profile))
  }

  private getUser(): Promise<User> {
    if (!this.useMockData.USER) {
      throwErr(ERRORS.NOT_IMPLEMENTED)
    }
    return this.simulateDelay(Promise.resolve(MOCKS.User as User))
  }

  private getDocuments(): Promise<UserDocument[] | Post[]> {
    if (!this.useMockData.DOCUMENTS) {
      return fetch(`${this.apiUrl}/posts`).then((res) => res.json())
    }
    return this.simulateDelay(Promise.resolve(MOCKS.Documents as UserDocument[]))
  }

  private getDocument(id?: string): Promise<Document> {
    if (!this.useMockData.DOCUMENTS) {
      return fetch(`${this.apiUrl}/post/${id || '1'}`).then((res) => res.json())
    }
    return this.simulateDelay(Promise.resolve(MOCKS.Document as Document))
  }

  private simulateDelay<T>(data: T): Promise<T> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(data), this.mockDelay)
    })
  }
}
