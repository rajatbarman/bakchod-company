<script context="module">
  export const prerender = true;
</script>
<script>
  import PageLayout from '$lib/components/PageLayout.svelte';
  import { onMount } from 'svelte';
  import { scrollToTop } from '$lib/utils';

  onMount(() => {
    scrollToTop();
  });
</script>

<PageLayout title="The philosophy">
  Bakchod.company is an experiment at a social and human level.
  The question arose was "why can't we just make money out of <span class="highlighted">nothing</span>", and the result is this experiment.
  <br /><br />Paying for no reason is an illogical activity, it can be a "therapeutic" and "freeing" activity for the user,
  a break from the world of logic, a break from the strong sense of "money".
  Bakchod.company will never establish a reason or a motivation to make a payment.
  The user will never get anything in return apart from sense of confusion or sense of fun or freedom,
  questions like "where will the money go" will never be answered.<br /><br />
  User will have to go beyond questions like "what will I get in return?" and "what happens to my money?" in order to do this.
  It is kind of like you just throw money on the highway while driving and you just drive away.<br /><br />

  Bakchod.company will never give a reassurance about the morality of it too.
  So, this will also require trust / negligence from the user, that the money won't be used for illegal or morally bad activity.
  This is different from the usual pattern people are used to, buying and getting something in return, investment, trading or even charity.
  It is simply payment for no reason at all.
  <br /><br />

  <div class="quote">
    As of January 2021 there were 4.66 billion active internet users worldwide - 59.5 percent of the global population. Of this total, 92.6 percent (4.32 billion) accessed the internet via mobile devices.
  </div>

  <br />There are around 4 billion users on the internet, if bakchod.company receives even 1$ from even one fourth of the digital population,
  it can become a billionaire firm.
  <br /><br /> In the entire history of human beings, this has never happened that such wealth is created out of <span class="highlighted">nothing</span>.
  If this experiment is a success, it shall prove to be a breakthrough in a lot of sense. A lot of mental structures and conditionings, established from ages shall collapse.<br /><br />

  The goal of bakchod.company is also to propogate this notion of money making through illogical ideas, inspire and set an example and reach as much audience as possible.
</PageLayout>

<style>
  .quote {
    font-style: italic;
    border-left: 3px solid var(--black);
    padding-left: 20px;
  }
</style>
