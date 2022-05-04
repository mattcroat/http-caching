<script lang="ts">
  import { browser } from '$app/env'

  let seconds = browser && localStorage.seconds ? +localStorage.seconds : 60

  const timerInterval = setInterval(() => {
    if (!browser) return

    localStorage.seconds = seconds
    seconds -= 1

    if (seconds < 1) {
      clearInterval(timerInterval)
      localStorage.removeItem('seconds')
    }
  }, 1000)
</script>

<p>Cache expires in {seconds}s</p>
