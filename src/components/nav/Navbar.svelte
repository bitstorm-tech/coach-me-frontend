<script lang="ts">
  import type NavbarItemType from './NavbarItem.type';
  import NavbarItem from './NavbarItem.svelte';
  import CloseCross from '../ui/CloseCross.svelte';
  import HamburgerSymbol from '../ui/HamburgerSymbol.svelte';
  import { slide } from 'svelte/transition';
  import AuthButtons from './AuthButtons.svelte';
  import SignInModal from '../auth/SignInModal.svelte';

  export let navbarItems: NavbarItemType[] = [];
  let isMobileMenuVisible = false;
  let isSignInModalVisible = false;
  let signedIn = false;

  function toggleMobileMenu() {
    isMobileMenuVisible = !isMobileMenuVisible;
  }

  function closeMobileMenu() {
    isMobileMenuVisible = false;
  }

  function showSignInModal() {
    isSignInModalVisible = true;
  }

  function closeSignInModal() {
    isSignInModalVisible = false;
  }
</script>

<nav class="flex flex-col sm:flex-row bg-darkest justify-between sm:h-14 p-2 top-0">
  <div class="flex flex-row justify-between items-center">
    <div class="cursor-pointer flex flex-row space-x-2 font-lg" on:click={closeMobileMenu}>
      <img src="/images/coach-me-logo.png" alt="Logo" height="28px" width="28px" />
      <NavbarItem href="/">c04ch.ME</NavbarItem>
    </div>
    <div class="sm:hidden" on:click={toggleMobileMenu}>
      {#if isMobileMenuVisible}
        <CloseCross />
      {:else}
        <HamburgerSymbol />
      {/if}
    </div>
  </div>
  <!-- Desktop Menu -->
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
    <AuthButtons {signedIn} on:signinorsignup={showSignInModal} />
  </div>
  <!-- Mobile Menu -->
  {#if isMobileMenuVisible}
    <div class="flex flex-col items-center w-full mt-4 sm:hidden" transition:slide>
      {#each navbarItems as navbarItem}
        {#if navbarItem.visible}
          <div class="mt-4" on:click={closeMobileMenu}>
            <NavbarItem href={navbarItem.href}>
              {navbarItem.text}
            </NavbarItem>
          </div>
        {/if}
      {/each}
      <div class="mt-10">
        <AuthButtons {signedIn} on:signinorsignup={showSignInModal} />
      </div>
    </div>
  {/if}
</nav>
{#if isSignInModalVisible}
  <SignInModal on:close={closeSignInModal} />
{/if}
