<script>
  import Heading from '$lib/components/Heading.svelte';
  import { fade, fly } from 'svelte/transition';

  export let title = '';
  export let containerClass = '';
</script>

<div in:fade={{ duration: 600 }} class="container {containerClass}">
  <Heading title={title} />
  <div class="content">
    <slot></slot>
  </div>
</div>

<style lang="scss">
  .container {
    margin-top: 48px;
    line-height: 24px;
    width: 540px;

    @media (max-width: 600px) {
      width: 100%;
      max-width: 540px;
      padding-left: var(--s-spacing);
      margin-top: var(--xxl-spacing);
    }
  }

  .content {
    font-size: var(--heading-five-font-size);
    padding-bottom: 100px;
  }
</style>
