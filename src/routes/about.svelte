<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit'

  export const load: Load = async () => {
    return {
      cache: { maxage: 80 },
    }
  }
</script>

<h1>About</h1>

<p>
  This should be prerendered but I'm testing if the CDN picks up the cache
  headers.
</p>
