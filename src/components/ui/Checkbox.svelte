<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { fade } from 'svelte/transition';

  export let id = null;
  export let checked = false;
  const dispatch = createEventDispatcher();

  function toggle() {
    checked = !checked;
    dispatch('ontoggle', checked);
  }
</script>

<div class="flex items-center" on:click={toggle}>
  <div
    class="bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 cursor-pointer"
  >
    <input {id} type="checkbox" class="opacity-0 absolute cursor-pointer" />
    {#if checked}
      <svg class="fill-current w-4/5 h-4/5 text-dark" viewBox="0 0 20 20" transition:fade={{ duration: 200 }}>
        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
      </svg>
    {/if}
  </div>
  <label for={id} class="select-none cursor-pointer pl-1 text-primary text-xs" on:click={toggle}><slot /></label>
</div>
