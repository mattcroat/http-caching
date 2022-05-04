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
  import Timer from '../../../components/timer.svelte'

  export let post: any = {}

  console.log(post)
</script>

<Timer />

<ul>
  <li>Post should be cached for 60 seconds</li>
  <li>Endpoint should be cached for 120 seconds</li>
</ul>

<hr />

<div class="post">
  <h1>{post.title}</h1>
  <p>{post.body}</p>
</div>

<style>
  .post {
    max-width: 60ch;
  }
</style>
