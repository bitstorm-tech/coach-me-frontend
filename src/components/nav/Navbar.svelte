<script lang="ts">
  import type NavbarItemType from './NavbarItem.type';
  import NavbarItem from './NavbarItem.svelte';

  export let navbarItems: NavbarItemType[] = [];

  function toggleMobileMenu() {}
  function closeMobileMenu() {}
</script>

<nav class="flex flex-col sm:flex-row bg-darkest justify-between sm:h-14 p-2 top-0">
  <div class="flex flex-row justify-between items-center">
    <div class="cursor-pointer flex flex-row space-x-2 font-lg" onClick={closeMobileMenu}>
      <img src="/images/coach-me-logo.png" alt="Logo" height="28px" width="28px" />
      <NavbarItem href="/">c04ch.ME</NavbarItem>
    </div>
    <div class="sm:hidden" on:click={toggleMobileMenu}>
      <!-- {mobileMenuVisible ? <CloseSymbol /> : <HamburgerSymbol />} -->
    </div>
  </div>
  <!-- {renderDesktopMenu()} -->
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
    <!-- {renderAuthButtons()} -->
  </div>
  <!-- {renderMobileMenu()} -->
</nav>
<!-- {renderLoginModal()} -->
