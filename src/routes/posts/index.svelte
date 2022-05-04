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
  import Timer from '../../components/timer.svelte'

  export let posts: any[] = []
</script>

<Timer />

<h1>Posts</h1>

<ul>
  <li>Posts should be cached for 60 seconds</li>
  <li>Endpoint is cached for 120 seconds</li>
  <li>Can Vercel cache endpoints?</li>
  <li>When post cache expires are we going to get stale data?</li>
  <li>
    Does this mean just the document shell is downloaded but data is cached?
  </li>
</ul>

<hr />

<ul>
  {#each posts as post}
    <li><a href="/posts/{post.id}">{post.title}</a></li>
  {/each}
</ul>
