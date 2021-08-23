<script lang="ts">
  import PrimaryButton from '../ui/PrimaryButton.svelte';
  import { createEventDispatcher } from 'svelte';
  export let signedIn = false;

  const dispatch = createEventDispatcher();
</script>

{#if signedIn}
  <div class="mx-2">
    <PrimaryButton href="/">Sign out</PrimaryButton>
  </div>
{:else}
  <div class="mx-2">
    <PrimaryButton on:click={() => dispatch('signinorsignup')}>Sign in / Sing up</PrimaryButton>
  </div>
{/if}
