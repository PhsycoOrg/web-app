<template>
  <div class="absolute bg-white w-full h-full z-[2] flex justify-center items-center flex-col">
    <l-squircle size="40" stroke="3" stroke-length="0.15" bg-opacity="0.1" speed="0.9" color="black"></l-squircle>
    <p class="mt-4">{{ text }}</p>
  </div>
</template>

<script lang="ts" setup>
  import { squircle } from 'ldrs'

  const props = defineProps({
    text: {
      type: String,
      required: true
    },
  });

  const { text } = props;

  squircle.register();
</script>

<style></style>