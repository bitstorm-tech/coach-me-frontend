<script lang="ts">
  import Modal from '../ui/Modal.svelte';
  import PrimaryButton from '../ui/PrimaryButton.svelte';
</script>

<Modal title="Sign in / Sign up" on:close>
  <h1>Login Modal</h1>
  <div slot="buttons">
    <PrimaryButton>hoho</PrimaryButton>
  </div>
</Modal>
