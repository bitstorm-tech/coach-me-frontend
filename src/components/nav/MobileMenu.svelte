<script lang="ts">
  import { slide } from 'svelte/transition';
  import NavbarItem from './NavbarItem.svelte';
  import AuthButtons from './AuthButtons.svelte';
  import type NavbarItemType from './NavbarItem.type';

  export let navbarItems: NavbarItemType[] = [];
  export let signedIn = false;
</script>

<div class="flex flex-col items-center w-full mt-4 sm:hidden" transition:slide>
  {#each navbarItems as navbarItem}
    {#if navbarItem.visible}
      <div class="mt-4" on:click>
        <NavbarItem href={navbarItem.href}>
          {navbarItem.text}
        </NavbarItem>
      </div>
    {/if}
  {/each}
  <div class="mt-10">
    <AuthButtons {signedIn} on:signinorsignup />
  </div>
</div>
