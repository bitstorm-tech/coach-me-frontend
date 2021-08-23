<script lang="ts">
  export let disabled = false;
  export let border = true;
  export let href = null;

  const borderClasses = border
    ? 'rounded-full border-primary border hover:shadow-inner-glow hover:border-accent'
    : 'hover:text-accent';
</script>

<a {href}>
  <button
    on:click
    {disabled}
    class={`rounded w-max py-1 px-3 text-primary bg-opacity-100 focus:outline-none  hover-transition ${borderClasses}`}
    class:cursor-default={disabled}
    class:cursor-pointer={!disabled}
  >
    <slot />
  </button>
</a>
