<template>
  <section class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <div class="col-span-1 lg:col-span-2">
      <h2 class="text-xl font-semibold">Overview</h2>
      <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white border border-slate-200 p-4 rounded-lg">
          <p class="text-sm">MSFT</p>
          <p class="text-lg font-semibold">Microsoft Co.</p>
          <div class="mt-2 flex items-center justify-between">
            <p class="text-sm">Revenue</p>
            <p class="text-sm font-semibold">$394.33B</p>
          </div>
          <div class="mt-1 flex items-center justify-between">
            <p class="text-sm">Market Cap</p>
            <p class="text-sm font-semibold">$1780.09B</p>
          </div>
        </div>
        <div class="bg-white p-4 border border-slate-200 rounded-lg">
          <p class="text-sm">AAPL</p>
          <p class="text-lg font-semibold">Apple Inc.</p>
          <div class="mt-2 flex items-center justify-between">
            <p class="text-sm">Revenue</p>
            <p class="text-sm font-semibold">$287.21B</p>
          </div>
          <div class="mt-1 flex items-center justify-between">
            <p class="text-sm">Market Cap</p>
            <p class="text-sm font-semibold">$2097.64B</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-1">
      <h3 class="text-lg font-semibold">Price Comparison</h3>
      <div class="mt-4 bg-white p-4 border border-slate-200 rounded-lg">
        <p class="text-sm">MSFT</p>
        <p class="text-lg font-semibold">Microsoft Co.</p>
        <div class="w-full h-[300px]">
          <div style="width: 100%; height: 100%;"></div>
        </div>
      </div>
    </div>
    <div class="col-span-1">
      <h3 class="text-lg font-semibold">AAPL</h3>
      <div class="mt-4 bg-white p-4 border border-slate-200 rounded-lg">
        <p class="text-sm">Apple Inc.</p>
        <div class="w-full h-[300px]">
          <div style="width: 100%; height: 100%;"></div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
  definePageMeta({
    layout: 'app',
    middleware: ["auth"],
  });

  useHead({
    title: 'Panel - Physco'
  });

  const user = useUser();
  console.log(user, 'user');
</script>
<style></style>