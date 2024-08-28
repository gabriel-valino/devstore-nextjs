import { env } from '@/env'

export async function api(path: string, init?: RequestInit) {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const baseUrl = env.NEXT_PUBLIC_API_BASE_URL
  const url = new URL('/api' + path, baseUrl)

  return fetch(url)
}
