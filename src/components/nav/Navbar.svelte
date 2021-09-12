<script lang="ts">
  import type NavbarItemType from './NavbarItem.type';
  import NavbarItem from './NavbarItem.svelte';
  import CloseCross from '../ui/CloseCross.svelte';
  import HamburgerSymbol from '../ui/HamburgerSymbol.svelte';
  import SignInModal from '../auth/SignInModal.svelte';
  import DesktopMenu from './DesktopMenu.svelte';
  import MobileMenu from './MobileMenu.svelte';

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
      <img src="/images/elite-forge-logo.png" alt="Logo" height="28px" width="28px" />
      <NavbarItem href="/">Elite Forge</NavbarItem>
    </div>
    <div class="sm:hidden" on:click={toggleMobileMenu}>
      {#if isMobileMenuVisible}
        <CloseCross />
      {:else}
        <HamburgerSymbol />
      {/if}
    </div>
  </div>
  <DesktopMenu {signedIn} {navbarItems} on:signinorsignup={showSignInModal} />
  {#if isMobileMenuVisible}
    <MobileMenu {signedIn} {navbarItems} on:signinorsignup={showSignInModal} on:click={closeMobileMenu} />
  {/if}
</nav>
{#if isSignInModalVisible}
  <SignInModal on:close={closeSignInModal} />
{/if}
