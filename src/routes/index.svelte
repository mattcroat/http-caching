<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit'

  export const load: Load = async ({ props }) => {
    return {
      props: { todos: props.todos },
      cache: { maxage: 80 },
    }
  }
</script>

<script lang="ts">
  export let todos: any[]
</script>

<ul>
  {#each todos as todo}
    <li>{todo.description}</li>
  {/each}
</ul>

<form method="post">
  <button type="submit">Add todo</button>
</form>
