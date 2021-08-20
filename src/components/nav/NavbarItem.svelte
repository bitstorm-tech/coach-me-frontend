<script lang="ts">
  export let href = '/';
</script>

<a {href}>
  <div class="text-primary hover:text-accent cursor-pointer hover-transition">
    <slot />
  </div>
</a>
