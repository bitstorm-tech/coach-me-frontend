<script lang="ts">
  import type NavbarItemType from './NavbarItem.type';
  import NavbarItem from './NavbarItem.svelte';
  import AuthButtons from './AuthButtons.svelte';

  export let navbarItems: NavbarItemType[] = [];
  export let signedIn = false;
</script>

<div class="hidden sm:flex flex-row items-center w-min">
  {#each navbarItems as navbarItem}
    {#if navbarItem.visible}
      <div class="mx-2 w-max">
        <NavbarItem href={navbarItem.href}>
          {navbarItem.text}
        </NavbarItem>
      </div>
    {/if}
  {/each}
  <AuthButtons {signedIn} on:signinorsignup />
</div>
