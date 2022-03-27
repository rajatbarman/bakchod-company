<script context="module" lang="ts">
  import { getPayments } from '$lib/helpers/restApis';
  import { browser } from '$app/env';

  interface GetPaymentsResponse {
    topFiveUsers?: Array<any>,
    recentUsers?: Array<any>,
  }

  export async function load() {
    let resp: GetPaymentsResponse;
    try {
      resp = await getPayments()
    } catch(e) {
      console.log(e);
    }
    const { topFiveUsers, recentUsers } = resp;
    return {
      props: {
        topFiveUsers,
        recentUsers
      }
    };
};
</script>

<script lang="ts">
	import PageLayout from '$lib/components/PageLayout.svelte';
	import { getFormattedNumber } from '$lib/utils';

	export let topFiveUsers = [];
	export let recentUsers = [];
</script>

<PageLayout title="People who paid for no reason">
	<div class="list">
		<div class="heading">Top 5</div>
		<div class="rows">
			{#each topFiveUsers as user}
				<div class="row">
					<div class="name">{user.userName}</div>
					<div class="amount">
						<span class="rupeeIcon">₹</span>{getFormattedNumber(user.amount)}
					</div>
				</div>
			{/each}
		</div>
	</div>
	<div class="list">
		<div class="heading">Recent</div>
		<div class="rows">
			{#each recentUsers as user}
				<div class="row">
					<div class="name">{user.userName}</div>
					<div class="amount">
						<span class="rupeeIcon">₹</span>{getFormattedNumber(user.amount)}
					</div>
				</div>
			{/each}
		</div>
	</div>
</PageLayout>

<style>
  .heading {
    font-size: var(--heading-four-font-size);
    font-weight: var(--semi-bold);
    margin-bottom: var(--m-spacing);
    }

  .row {
    display: flex;
    align-items: center;
    margin-top: var(--s-spacing);
  }

  .name {
    width: 220px;
  }

  .list {
    min-height: 188px;
    margin-top: var(--xxl-spacing);
  }

  .rupeeIcon {
    padding-right: 2px;
  }

  .highlighted {
    color: var(--red);
  }

</style>
