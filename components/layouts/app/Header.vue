<template>
  <header class="bg-white h-14 px-4 lg:px-12 flex items-center justify-between shadow-sm">
    <span>
      <button class="lg:hidden" @click="handleToggleMenu">
        <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M4 8l16 0" />
          <path d="M4 16l16 0" />
        </svg>
      </button>
    </span>
    <div class="flex items-center ml-6">
      <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
        <span class="flex h-full w-full items-center justify-center rounded-full bg-muted">JB</span>
      </span>
      <span class="ml-3 text-sm font-medium">Jonathan Bautista</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="text-black ml-1">
        <path d="m6 9 6 6 6-6"></path>
      </svg>
    </div>
  </header>
</template>

<script lang="ts" setup>
  const { $event } = useNuxtApp()

  const handleToggleMenu = (() => {
    $event('layout:show-sidebar', true)
  });
</script>

<style>

</style>