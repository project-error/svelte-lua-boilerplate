<script lang="ts">
  import { useNuiEvent } from "../utils/useNuiEvent";
  import { fetchNui } from "../utils/fetchNui";
  import { onMount, setContext } from "svelte";
  import { writable } from "svelte/store";

  let isVisible = writable(false);
  setContext("visibility", isVisible);

  useNuiEvent<boolean>("setVisible", (visible) => {
    $isVisible = visible;
  });

  onMount(() => {
    const keyHandler = (e: KeyboardEvent) => {
      if ($isVisible && ["Escape"].includes(e.code)) {
        fetchNui("hideUI");
        $isVisible = false;
      }
    };

    window.addEventListener("keydown", keyHandler);

    return () => window.removeEventListener("keydown", keyHandler);
  });
</script>

{#if $isVisible}
  <slot />
{/if}
