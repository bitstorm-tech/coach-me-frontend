<script lang="ts">
  export let header = null;
</script>

<div class="p-6 rounded-xl shadow-xl bg-darker">
  {#if header}
    <p class="text-xl font-semibold mb-2">{header}</p>
  {/if}
  <div class="mb-2"><slot /></div>
  <div class="pt-4 w-full flex flex-row-reverse">
    <slot name="buttons" />
  </div>
</div>
