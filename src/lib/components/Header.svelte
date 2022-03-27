<script>
  import Logo from './Logo.svelte';
  import { page } from '$app/stores';
</script>
<div class="container">
	<a href="/">
		<div class="logo">
			<Logo scale={0.25} />
		</div>
	</a>
	<div class="navigation">
		<a class:linkActive={$page.url.pathname === '/'} class="link" href="/">Pay</a>
		<a class:linkActive={$page.url.pathname === '/users'} class="link" href="/users">Bakchods</a>
		<a class:linkActive={$page.url.pathname === '/about'} class="link" href="/about">About Us</a>
		<a class:linkActive={$page.url.pathname === '/faq'} class="link" href="/faq">FAQ</a>
		<a class:linkActive={$page.url.pathname === '/contact'} class="link" href="/contact">Contact</a>
	</div>
	<div class="bottomNavigation">
		<a class:linkActive={$page.url.pathname === '/'} class="link" href="/">
			<img class="icon" src="icons/rupee.png" />
			<span>Pay</span>
		</a>
		<a class:linkActive={$page.url.pathname === '/users'} class="link" href="/users">
			<img class="icon" src="icons/people.png" />
			<span>Bakchods</span>
		</a>
		<a class:linkActive={$page.url.pathname === '/about'} class="link" href="/about">
			<img class="icon" src="icons/about.png" />
			<span>Philosophy</span>
		</a>
		<a class:linkActive={$page.url.pathname === '/faq'} class="link" href="/faq">
			<img class="icon" src="icons/question-mark.png" />
			<span>Q and As</span>
		</a>
		<a class:linkActive={$page.url.pathname === '/contact'} class="link" href="/contact">
			<img class="icon" src="icons/email.png" />
			<span>Contact</span>
		</a>
	</div>
</div>

<style lang="scss">
	.container {
		display: flex;
		align-items: center;
		@media (max-height: 320px) {
			display: none;
		}
	}

	.navigation {
		display: grid;
		margin-left: auto;
		justify-content: space-between;
		grid-gap: 40px;
		grid-auto-flow: column;
		z-index: 9;
		@media (max-width: 740px) {
			display: none;
		}
		.link {
			display: block;
			&:after {
				margin-top: 4px;
				content: '';
				display: block;
				width: 0;
				height: 2px;
				background: var(--black);
				transition: width 0.3s;
			}
			&.linkActive:after,
			&:hover::after {
				width: 100%;
			}
		}
	}

	.bottomNavigation {
		box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
		position: fixed;
		bottom: 0;
		z-index: 99;
		display: flex;
		margin-left: -20px;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		width: 100%;
		background: var(--white);

		@media (min-width: 741px) {
			display: none;
		}

		.link {
			height: 60px;
			opacity: 0.4;
			align-items: center;
			display: flex;
			font-size: var(--small-font-size);
			flex-direction: column;
			justify-content: center;
			font-weight: var(--semi-bold);

			&.linkActive {
				opacity: 1;
			}
		}

		.icon {
			max-width: 24px;
			margin-bottom: var(--xs-spacing);
		}
	}
</style>
