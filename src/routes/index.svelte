<script context="module" lang="ts">
  import { browser } from '$app/env';
  import { getReceivedAmount } from '$lib/helpers/restApis';
  interface GetReceivedAmountResponse {
    amount?: number
  }

  export async function load() {
    const resp: GetReceivedAmountResponse = await getReceivedAmount()
    return {
      props: {
        receivedAmount: resp.amount
      }
    };
  }
</script>

<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { createPaymentLink } from '$lib/helpers/restApis';
  import Countup from 'svelte-countup';

  interface CreatePaymentResponse {
    shortUrl: string
  }
  export let receivedAmount = 0;

  let isInputVisible = false;
  let amount = 500;
  let isCreatingPaymentLink = false;
  // let inputType = deviceTypeHelpers.isMobile() ? 'number' : 'text';
  let buttonRef = null;
  $: inputWidth = `${String(amount).length + 1}ch`

  function handlePayButtonClick() {
    if (!isInputVisible) {
      isInputVisible = true;
      return;
    }

    if (amount < 1) {
      return;
    }

    isCreatingPaymentLink = true;
    createPaymentLink({ amount: amount * 100 })
      .then((resp: CreatePaymentResponse) => {
        if (resp.shortUrl) {
          window.location.href = resp.shortUrl;
        }
      })
      .catch(() => {
        isCreatingPaymentLink = false;
      })

    if (buttonRef) {
      buttonRef.blur();
    }
  }

  function handleKeyUp(e) {
    if (e.keyCode === 13) {
      handlePayButtonClick();
    }
  }
</script>

<div class="content">
  <div in:fade={{ duration: 600 }} class="text">
    We are the first company in the world to ask for money and give <span class="highlighted">nothing</span> in return.
  </div>
  {#if isInputVisible}
    <div in:fly="{{ y: 30, duration: 600 }}" class="inputContainer">
      <span>I'm going to pay</span>
      <input
        autofocus
        on:keyup={handleKeyUp}
        bind:value={amount}
        type="text"
        style="width: {inputWidth}"
        class="input"
      />
      <span>₹ for <span class="highlighted">nothing</span>.</span>
    </div>
  {/if}
  <div class="buttonContainer" on:click={handlePayButtonClick}>
    <button bind:this={buttonRef} class="payButton">
      {#if isCreatingPaymentLink}
        Wait
      {:else}
        Pay
      {/if}
    </button>
  </div>
  {#if !isInputVisible}
    <div class="payment">
      <div class="number">
        <Countup
          initial={0}
          duration={500}
          value={receivedAmount}
        />
        <span class="rupeeIcon">₹</span>
      </div>
      <div class="paymentText">received for no reason.</div>
    </div>
  {/if}
</div>

<style lang="scss">
    @keyframes glowing {
    0% {
      box-shadow: 0 0 -10px #705CF9;
    }
    40% {
      box-shadow: 0 0 10px #705CF9;
    }
    60% {
      box-shadow: 0 0 10px #705CF9;
    }
    100% {
      box-shadow: 0 0 -10px #705CF9;
    }
  }

  .text {
    font-size: var(--heading-three-font-size);
    text-align: center;
    user-select: none;

    @media (max-width: 600px) {
      font-size: var(--heading-five-font-size);
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: var(--inner-content-width);

    @media (max-width: 600px) {
      margin-top: -100px;
    }
  }

  .highlighted {
    color: var(--red);
  }

  .buttonContainer {
    display: flex;
    align-items: center;
    margin-top: var(--xl-spacing);

    @media (max-width: 600px) {
      margin-top: var(--xl-spacing);
    }
  }

  .payButton {
    margin: auto;
    width: 120px;
    height: 52px;
    font-weight: var(--semi-bold);
    font-size: var(--heading-five-font-size);
    color: var(--white);
    text-transform: uppercase;
    letter-spacing: 2px;
    background: var(--red);
    border-radius: 40px;
    cursor: pointer;
    user-select: none;
    animation: glowing 3000ms linear infinite;
    transition: all 200ms ease-in;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        background: var(--black);
      }
    }

    &.loading {
      background: var(--black);
      pointer-events: none;
      animation: none;
    }

    @media (max-width: 600px) {
      font-size: var(--default-font-size);
      height: 48px;
    }

    &:hover {
      animation: none;
    }
  }

  .number {
    display: flex;
    align-items: center;
    font-size: var(--heading-four-font-size);

    .rupeeIcon {
      padding-left: var(--xs-spacing);
    }
  }

  .paymentText {
    margin-left: var(--xs-spacing);
  }

  .payment {
    margin-top: var(--xl-spacing);
    display: flex;
    align-items: center;
  }

  .inputContainer {
    margin-top: var(--xxxxl-spacing);
    height: 30px;
    font-size: var(--heading-five-font-size);

    .input {
      pointer-events: auto;
    }

    @media (max-width: 600px) {
      font-size: var(--default-font-size);
      margin-top: var(--xl-spacing);
    }
  }

  .input {
    margin: 0 2px;
    font-size: inherit;
    font-weight: var(--semi-bold);
    min-width: 16px;
    border: 0;
    border-bottom: 1px solid var(--black);
  }

  .invisible {
    visibility: hidden;
  }
  </style>
