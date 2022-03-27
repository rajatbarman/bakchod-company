<script>
	import '$lib/theme/index.css';
	import { navigating } from '$app/stores';
	import { browser } from '$app/env';
	import Header from '$lib/components/Header.svelte';
	import NProgress from 'nprogress';
	import 'nprogress/nprogress.css';

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
