<script lang="ts">
  import { scale, blur } from 'svelte/transition';
  import CloseCross from './CloseCross.svelte';
  import PrimaryButton from './PrimaryButton.svelte';
  import { createEventDispatcher } from 'svelte';

  export let title: string;

  const dispatch = createEventDispatcher();

  function close() {
    dispatch('close');
  }
</script>

<div
  transition:blur
  class="flex absolute top-0 left-0 justify-center items-center w-screen h-screen backdrop-filter backdrop-blur"
>
  <div transition:scale class="flex flex-col mx-auto w-11/12 max-w-2xl border border-accent sm:w-5/6 lg:w-1/2">
    <div class="flex flex-row justify-between p-6 text-primary bg-darkest">
      <p class="font-bold">{title}</p>
      <CloseCross on:click={close} />
    </div>
    <div class="p-5 bg-darker"><slot /></div>
    <div class="flex flex-row justify-between items-center p-5 bg-darkest">
      <PrimaryButton on:click={close} border={false}>Cancel</PrimaryButton>
      <div class="space-x-2"><slot name="buttons" /></div>
    </div>
  </div>
</div>
