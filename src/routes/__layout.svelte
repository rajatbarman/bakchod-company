<script>
	import '$lib/theme/index.css';
	import { navigating } from '$app/stores';
	import { browser } from '$app/env';
  import { onMount } from "svelte";
  import {
  // afterNavigate,
  // beforeNavigate,
  prefetchRoutes
} from '$app/navigation';
	import Header from '$lib/components/Header.svelte';
	import NProgress from 'nprogress';
	import 'nprogress/nprogress.css';

  if (browser) {
    prefetchRoutes();
  }

	$: {
		if (browser) {
			NProgress.configure({
				showSpinner: false,
        trickleSpeed: 100
			});

			if ($navigating) {
				NProgress.start();
			}
			if (!$navigating && browser) {
				NProgress.done();
			}
		}
	}
</script>

<div class="container">
	<Header />
	<div class="body">
		<slot />
	</div>
  <footer>
    <a target="_blank" rel="nofollow" href="https://kit.svelte.dev/">
      Built with
      <img alt="Svelte-kit" src="icons/svelte.png" />
    </a>
  </footer>
</div>

<style lang="scss">
	:global {
		.highlighted {
			color: var(--red);
		}
	}
	.container {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		max-width: var(--outer-content-width);
		margin: 0 auto;
	}

  footer {
    font-size: 12px;
    text-align: center;
    line-height: 1;
    padding-bottom: var(--body-padding);
    @media (max-width: 740px) {
			display: none;
		}

    a {
      display: flex;
      line-height: 1;
      align-items: center;
      justify-content: center;
    }

    img {
      margin-left: 2px;
      max-width: 24px;
    }
  }

	.body {
		max-width: var(--inner-content-width);
		margin: auto;
		flex: 1;
		display: flex;

		@media (max-width: 600px) {
			margin: 0;
		}
	}
</style>
