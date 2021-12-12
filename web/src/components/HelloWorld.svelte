<script lang="ts">
  const buttonClick = () => {
    console.log("click");
  };
</script>

<div class="container">
  <h2>Svelte NUI Popup!</h2>
  <button on:click={buttonClick}>Click me</button>
</div>

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
