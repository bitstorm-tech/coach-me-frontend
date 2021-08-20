<script lang="ts">
  import '../app.postcss';
  import Navbar from '../components/nav/Navbar.svelte';
  import type NavbarItemType from '../components/nav/NavbarItem.type';

  const navbarItems: NavbarItemType[] = [
    { text: 'Roadmap', href: '/roadmap', visible: true },
    { text: 'Sessions', href: '/sessions', visible: true },
    { text: 'Account', href: '/account', visible: true }
  ];
</script>

<Navbar {navbarItems} />
<slot />
