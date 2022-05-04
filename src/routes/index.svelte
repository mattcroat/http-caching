<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit'

  export const load: Load = async ({ props }) => {
    return {
      props,
      cache: { maxage: 60 },
    }
  }
</script>

<script lang="ts">
  import Timer from '../components/timer.svelte'

  export let todos: any[] = []
</script>

<Timer />

<h1>Todos</h1>

<ul>
  <li>
    New todos should be cached so you shouldn't get new ones if you refresh
  </li>
  <li>Inside network tab this shows as cache HIT and 304 HTTP response</li>
  <li>Cache should expire after 60 seconds</li>
  <li>The endpoint isn't cached</li>
</ul>

<hr />

<ul>
  {#each todos as todo}
    <li>{todo.description}</li>
  {/each}
</ul>

<form
  method="post"
  on:submit|preventDefault={async () => {
    await fetch('/', { method: 'post' })
  }}
>
  <button type="submit">Add todo</button>
</form>
