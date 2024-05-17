<script lang="ts">
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  let currencies: string[] = [];
  let fromCurrency = "USD";
  let toCurrency = "EUR";
  let amountFrom = writable<number>(1);
  let amountTo = writable<number>(0);
  let apiKey = "83dd8967bb172a2d15bc0fc6";

  async function fetchCurrencies() {
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`,
    );
    const data = await response.json();
    currencies = Object.keys(data.conversion_rates);
  }

  async function convertCurrency(value: number, from: string, to: string) {
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${from}`,
    );
    const data = await response.json();
    const rate = data.conversion_rates[to];
    return value * rate;
  }

  function updateConversion() {
    convertCurrency($amountFrom, fromCurrency, toCurrency).then((result) => {
      amountTo.set(result);
    });
  }

  function updateAmountFrom() {
    updateConversion();
  }

  function updateAmountTo() {
    convertCurrency($amountTo, toCurrency, fromCurrency).then((result) => {
      amountFrom.set(result);
    });
  }

  onMount(fetchCurrencies);

  $: {
    updateConversion();
  }
</script>

<div>
  <input
    type="number"
    bind:value={$amountFrom}
    on:input={updateAmountFrom}
    placeholder="Amount"
  />
  <select bind:value={fromCurrency} on:change={updateConversion}>
    {#each currencies as currency}
      <option value={currency}>{currency}</option>
    {/each}
  </select>
</div>
<div>
  <input type="number" bind:value={$amountTo} on:input={updateAmountTo} />
  <select bind:value={toCurrency} on:change={updateConversion}>
    {#each currencies as currency}
      <option value={currency}>{currency}</option>
    {/each}
  </select>
</div>

<style>
</style>
