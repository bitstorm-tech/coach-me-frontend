<script lang="ts">
  export let tabs = [];
  let activeTabIndex = 0;

  function setActiveTab(index: number) {
    console.log('Change index:', index);
    activeTabIndex = index;
  }
</script>

<div class="bg-darkest">
  <nav class="flex flex-col sm:flex-row justify-center">
    {#each tabs as tab, i}
      <button
        on:click={() => setActiveTab(i)}
        class="py-4 px-6 block hover:text-accent focus:outline-none {activeTabIndex === i
          ? ' text-accent border-b-4 font-medium border-accent'
          : ' text-primary'}"
      >
        {tab}
      </button>
    {/each}
  </nav>
</div>
{#if activeTabIndex === 0}
  <slot name="tab1" />
{/if}
{#if activeTabIndex === 1}
  <slot name="tab2" />
{/if}
{#if activeTabIndex === 2}
  <slot name="tab3" />
{/if}
{#if activeTabIndex === 3}
  <slot name="tab4" />
{/if}
{#if activeTabIndex === 4}
  <slot name="tab5" />
{/if}
{#if activeTabIndex === 5}
  <slot name="tab6" />
{/if}
{#if activeTabIndex === 6}
  <slot name="tab7" />
{/if}
{#if activeTabIndex === 7}
  <slot name="tab8" />
{/if}
{#if activeTabIndex === 8}
  <slot name="tab9" />
{/if}
