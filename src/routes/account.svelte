<script lang="ts">
  import Tabs from '../components/ui/Tabs.svelte';
  import PersonalInformationTab from '../components/page/account/PersonalInformationTab.svelte';
  import SubscritpionTab from '../components/page/account/SubscriptionTab.svelte';

  const tabs = ['Personal Infromation', 'Subscriptions'];
</script>

<Tabs {tabs}>
  <PersonalInformationTab slot="tab1" />
  <SubscritpionTab slot="tab2" />
</Tabs>
