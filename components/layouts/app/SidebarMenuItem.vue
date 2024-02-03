<template>
  <li v-if="subMenu == undefined" class="flex items-center w-full h-10 text-sm">
    <NuxtLink activeClass="sidemenu-active" :to="to" @click="handleMovileEvent" class="text-black px-3 inline-flex items-center w-full h-full hover:bg-slate-100 rounded-xl">
      <span v-html="icon"></span>
      <span class="font-medium">{{ text }}</span>
    </NuxtLink>
  </li>
  <li v-else class="relative group select-none" @click="toggleDropdown">
    <div class="flex items-center justify-between w-full h-10 text-sm hover:bg-slate-100 px-3 rounded-xl cursor-pointer">
      <div class="inline-flex items-center w-full h-full">
        <span v-html="icon"></span>
        <span class="font-medium">{{ text }}</span>
      </div>
      <svg width="24" height="24" viewBox="0 0 24 24" class="transition-all transform" :class="{'rotate-[180deg]': dropdownOpen}" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" />
      </svg>
    </div>
    
    <ul class="bg-white w-full py-2 pl-6 space-y-2 transform origin-top transition-all ease-in-out duration-300" :class="{'block': dropdownOpen, 'hidden': !dropdownOpen}">
      <li v-for="item in subMenu" class="px-4 py-2 text-sm hover:bg-slate-100 rounded-md">
        <NuxtLink :to="item.to" active-class="sidemenu-submenu-active" @click="handleMovileEvent" class="inline-flex items-center w-full h-full">{{ item.text }}</NuxtLink>
      </li>
    </ul>
  </li>
</template>

<script lang="ts" setup>
  const props = defineProps({
    text: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: false
    },
    icon: {
      type: String,
      required: true
    },
    subMenu: {
      type: Object,
      required: false,
    }
  });

  const { text, to, icon, subMenu } = props;

  const { $event } = useNuxtApp()
  const dropdownOpen = ref<boolean>(false);

  const toggleDropdown = (() => {
    dropdownOpen.value = !dropdownOpen.value;
  });
  const handleMovileEvent = (() => {
    if (window.matchMedia("(max-width: 1023px)").matches) {
      $event('layout:show-sidebar', false);
    }
  });
  const handleOptionClick = ((option: any) => {
    console.log(`Clic en ${option}`);
    dropdownOpen.value = false;
  });
</script>

<style scoped>
.dropdown-enter-active, .dropdown-leave-active {
  transition: transform 0.5s ease;
}
.dropdown-enter, .dropdown-leave-to {
  transform: scaleY(0);
}
</style>