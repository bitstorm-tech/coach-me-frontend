<script lang="ts">
  import Checkbox from '../../ui/Checkbox.svelte';
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
    <Checkbox id="newsletter">Newsletter?</Checkbox>
  </Card>
</div>
