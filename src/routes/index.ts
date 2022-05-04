import type { RequestHandler } from '@sveltejs/kit'

let todos = [{ id: 1, description: 'Todo 1' }]

export const get: RequestHandler = async ({ request }) => {
  if (request.method !== 'GET') return {}

  return {
    body: { todos },
  }
}

export const post: RequestHandler = async () => {
  todos = [
    ...todos,
    { id: todos.length + 1, description: `Todo ${todos.length + 1}` },
  ]

  return {}
}
