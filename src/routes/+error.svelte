<script lang="ts">
  import { page } from '$app/stores'
</script>

<div class="error">
  <h1>{$page.status}: {$page.error.message}</h1>
</div>

<style>
  .error {
    height: 100%;
    display: grid;
    place-content: center;
  }

  .error h1 {
    max-width: 800px;
    text-align: center;
    word-wrap: break-word;
  }
</style>
