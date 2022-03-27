<script>
  import BakchodCompanyLogo from '$lib/svgs/BakchodCompanyLogo.svelte';
  const originalLogoDimensions = {
    width: 900,
    height: 200,
  };
  export let scale = 0.5;
</script>

<div
  style="width: {originalLogoDimensions.width * scale}px; height: {originalLogoDimensions.height * scale }px"
>
  <BakchodCompanyLogo />
</div>


<style>
  .logo {
    transform-origin: top left;
  }
</style>
