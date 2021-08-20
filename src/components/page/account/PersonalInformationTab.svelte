<script lang="ts">
  import Card from '../../ui/Card.svelte';
  import Input from '../../ui/Input.svelte';
</script>

<div class="p-10">
  <Card>
    <div class="flex justify-between space-x-4">
      <Input label="Vorname" />
      <Input label="Nachname" />
    </div>
    <Input label="Nickname" />
    <Input label="E-Mail" />
  </Card>
</div>
