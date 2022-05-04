import type { RequestHandler } from '@sveltejs/kit'

export const get: RequestHandler = async ({ params }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  )
  const post = await response.json()

  return {
    body: { post },
    headers: {
      'Cache-Control': 'public, max-age=120',
    },
  }
}
