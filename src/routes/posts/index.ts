import type { RequestHandler } from '@sveltejs/kit'

export const get: RequestHandler = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await response.json()

  return {
    body: {
      posts: posts.splice(0, 10),
      headers: {
        'Cache-Control': 'public, max-age=120',
      },
    },
  }
}
