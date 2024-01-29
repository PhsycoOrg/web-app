<template>
  <div class="min-h-screen bg-slate-50">
    <div class="flex flex-col h-screen lg:flex-row">
      <Sidebar />
      <main class="flex-1 h-screen overflow-hidden overflow-y-auto">
        <Header />
        <section class="py-6 px-4 lg:px-12">
          <slot />
        </section>
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import '@fontsource/poppins/300.css';
  import '@fontsource/poppins/400.css';
  import '@fontsource/poppins/500.css';
  import '@fontsource/poppins/600.css';

  import Sidebar from '~/components/layouts/app/Sidebar.vue';
  import Header from '~/components/layouts/app/Header.vue';
</script>

<style></style>