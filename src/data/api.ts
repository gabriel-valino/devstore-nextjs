import { env } from '@/env'

export async function api(path: string) {
  const baseUrl = env.NEXT_PUBLIC_API_BASE_URL
  const url = new URL('/api' + path, baseUrl)

  return fetch(url)
}
