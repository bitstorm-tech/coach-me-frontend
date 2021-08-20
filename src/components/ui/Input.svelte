<script lang="ts">
  export let label: string;
  export let id = label;
  export let type = 'text';
  export let placeholder = '';
</script>

<div class="w-full">
  <label for={id} class="pl-1 text-primary text-xs">{label}</label>
  <input
    {id}
    {type}
    {placeholder}
    on:change
    class="p-2 w-full rounded shadow-inner outline-none bg-dark focus:shadow-inner-glow-s text-primary"
  />
</div>
