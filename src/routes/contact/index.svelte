<script context="module">
  export const prerender = true;
</script>

<script>
  import PageLayout from '$lib/components/PageLayout.svelte';
  export const prerender = true;
</script>

<PageLayout title="Connect">
  For any feedback or concerns, or paying us for <span class="highlighted">nothing </span>
  through a different payment method, you can reach out at <a class="link" href="mailto:admin@bakchod.company">admin@bakchod.company</a>
</PageLayout>

<style>
  .link {
    text-decoration: underline;
  }
</style>
