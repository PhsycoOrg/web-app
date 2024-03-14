<template>
  <Information />
  <div class="block">
    <div class="py-4"></div>
  </div>
  <UpdatePassword />
</template>
<script lang="ts" setup>
  import Information from '@/components/user/profile/Information.vue';
  import UpdatePassword from '@/components/user/profile/UpdatePassword.vue';

  definePageMeta({
    layout: 'app',
    middleware: ["auth"],
  });

  useHead({
    title: 'Perfil - Physco'
  });
</script>
<style></style>