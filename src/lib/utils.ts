import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Extension, DocumentType, type Post, Status, type UserDocument } from '@/@types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getRandomArrayElement<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

export function getRandomDate(start: Date, end: Date): string {
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
  return date.toLocaleDateString()
}

export function generateMockDocument(post: Post): UserDocument {
  return {
    ...post,
    extension: getRandomArrayElement(Object.values(Extension)),
    type: getRandomArrayElement(Object.values(DocumentType)),
    status: getRandomArrayElement(Object.values(Status)),
    dateStart: getRandomDate(new Date(2023, 0, 1), new Date()), // Случайная дата с начала 2023 года до сегодня
    dateEnd: getRandomDate(new Date(), new Date(2025, 11, 31)) // Случайная дата с сегодня до конца 2025 года
  }
}
