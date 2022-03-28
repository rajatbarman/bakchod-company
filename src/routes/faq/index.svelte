<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import PageLayout from '$lib/components/PageLayout.svelte';
  import { onMount } from 'svelte';
  import { scrollToTop } from '$lib/utils';
  export const prerender = true;

  onMount(() => {
    scrollToTop();
  });

	const faq = [
		{
			q: 'What is the meaning of "Bakchod"?',
			a: `The meaning of this word on google is "someone who engages in nonsense".
For us "Bakchodi" (verb), it is simply doing something for no particular purpose apart from just for the sake of doing it, out of spontaneity,
  or just for fun and a "Bakchod" is someone who does it.`
		},
		{
			q: 'What is the meaning of "Company"?',
			a: 'On google it is defined as "a business organization selling goods or services".'
		},
		{
			q: 'What are you selling?',
			a: `
				<span>
					We are selling <span class="highlighted">nothing.</span>
				</span>
			`
		},
		{
			q: 'Is this a scam?',
			a: "No, this is a pretty straight forward thing. We don't get your payment details, we only get the money."
		},
		{
			q: 'What are you going to do with the money?',
			a: 'Leave my job and live the best life (just kidding, I have the best life and job already)'
		},
		{
			q: 'What is the meaning of life?',
			a: 'Bakchodi'
		},
		{
			q: 'Can you get happiness with money?',
			a: 'To an extent, yes.'
		},
		{
			q: 'Do you believe in god?',
			a: 'I see the questions are getting a bit unrelated to bakchod.company, but yes and no.'
		},
		{
			q: 'Are we alone in the universe?',
			a: "Please, let's just ask questions about the company."
		},
		{
			q: "Aren't you the one writing these questions and answers?",
			a: 'Yes, I will stop.'
		}
	];
</script>

<PageLayout title="Questions and Answers">
  {#each faq as { q, a } (q) }
    <div class="item">
      <div class="question">{q}</div>
      <div class="answer">{@html a}</div>
    </div>
  {/each}
</PageLayout>

<style lang="scss">
  .answer {
    font-size: var(--default-font-size);
    margin-top: var(--s-spacing);
  }

  .question {
    font-size: var(--heading-four-font-size);
    margin-top: var(--xxxxl-spacing);
  }
</style>
