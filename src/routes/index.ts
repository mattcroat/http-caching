import type { RequestHandler } from '@sveltejs/kit'

let todos = [{ id: 1, description: 'Todo 1' }]

export const get: RequestHandler = async () => {
  return {
    body: { todos },
    headers: {
      'Cache-Control': 'public, max-age=0, s-maxage=80',
    },
  }
}

export const post: RequestHandler = async () => {
  todos = [
    ...todos,
    { id: todos.length + 1, description: `Todo ${todos.length + 1}` },
  ]

  return {}
}
