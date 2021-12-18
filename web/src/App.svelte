<script lang="ts">
  import VisibilityProvider from './providers/VisibilityProvider.svelte';
  import HelloWorld from './components/HelloWorld.svelte';
</script>

<main>
  <VisibilityProvider>
    <HelloWorld />
  </VisibilityProvider>
</main>
