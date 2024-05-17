<script lang="ts">
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import currLogo from "/currency_exchange.svg.png";
  import Counter from "./lib/Counter.svelte";
</script>

<main>
  <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo" alt="Vite Logo" />
    </a>
    <img src={currLogo} class="curr" alt="Currency Logo" />
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Сurrency converter<br /> By Anna Kuzmina</h1>

  <div class="card">
    <Counter />
  </div>

  <p>
    You can also check out my GitHub <a
      href="https://github.com/AnnnaSergeeevna"
      target="_blank"
      rel="noreferrer"
      class="rel"
    >
      AnnnaSergeeevna</a
    >
  </p>

  <p class="read-the-docs"></p>
</main>

<style>
  @import "./app.css";
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
  h1 {
    font-size: xx-large;
    color: #4dbd45;
  }
  .card {
    filter: drop-shadow(0 0 2em #49a842aa);
  }
  .rel {
    display: inline-flex;
    padding-top: 70px;
    padding-bottom: 70px;
  }
  .rel:hover {
    filter: drop-shadow(0 0 2em #b4b8ff);
  }
</style>
