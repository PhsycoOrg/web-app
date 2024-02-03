<template>
  <div :class="`bg-${color}-50 w-full text-sm text-center p-3 mb-4 rounded-md border border-${color}-300 text-${color}-700`">
    {{ text }}
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps({
    text: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  })
</script>

<style>

</style>