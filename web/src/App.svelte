<script lang="ts">
  export let name: string;
</script>

<main>
  <div class="container">
    <h1>Svelte NUI Popup!</h1>
    <h2>Hello {name}!</h2>
  </div>
</main>

<style>
  .container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    border-radius: 5px;
    width: 15%;
    height: 15%;
    font-size: 1vh;
    color: white;
    background-color: #ff3c04;
  }
</style>
