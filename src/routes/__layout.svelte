<script lang="ts">
  import '../tailwind.css';
  import Navbar from '../components/nav/Navbar.svelte';
  import Footer from '../components/nav/Footer.svelte';
  import type NavbarItemType from '../components/nav/NavbarItem.type';

  const navbarItems: NavbarItemType[] = [
    { text: 'Roadmap', href: '/roadmap', visible: true },
    { text: 'Sessions', href: '/sessions', visible: true },
    { text: 'Account', href: '/account', visible: true }
  ];
</script>

<Navbar {navbarItems} />
<div class="bg-darkest">
  <slot />
</div>
<Footer />
