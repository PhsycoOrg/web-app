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
    <div class="relative" ref="dropdownUserHeader">
      <div @click="toggleDropdown">
        <button class="flex items-center outline-none gap-4 pr-2 text-sm transparent rounded-full focus:outline-none focus:bg-perfume-50 transition">
          <span class="flex items-center outline-none gap-3">
            <img class="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
            Tim Cook
          </span>
          <svg class="h-5 w-5" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg>
        </button>
      </div>

      <TransitionRoot :show="isOpen"
        enter="transition ease-out duration-200"
        enter-from="transform opacity-0 scale-95"
        enter-to="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leave-from="transform opacity-100 scale-100"
        leave-to="transform opacity-0 scale-95"
        class="absolute z-50 mt-2 origin-top-right right-0 w-48 rounded-md shadow-lg">
        <div class="rounded-md ring-1 ring-black ring-opacity-5 py-1 bg-white">
          <div class="block px-4 py-2 text-xs text-black font-medium">
            Administrar cuenta
          </div>
          <NuxtLink class="cursor-pointer block px-4 py-2 text-sm leading-5 text-black hover:bg-perfume-100 focus:outline-none focus:bg-perfume-100 transition">
            Perfil
          </NuxtLink>
          <div class="border-t border-gray-100"></div>
          <NuxtLink to="/login" class="cursor-pointer block px-4 py-2 text-sm leading-5 text-black hover:bg-perfume-100 focus:outline-none focus:bg-perfume-100 transition">
            Cerrar Sesión
          </NuxtLink>
        </div>
      </TransitionRoot>
    </div>
  </header>
</template>

<script lang="ts" setup>
  import { TransitionRoot } from '@headlessui/vue'
  import useDetectOutsideClick from '~/composables/useDetectOutsideClick'

  const { $event } = useNuxtApp()
  const dropdownUserHeader = ref();
  const isOpen = ref<boolean>(false);

  const handleToggleMenu = (() => {
    $event('layout:show-sidebar', true)
  });

  useDetectOutsideClick(dropdownUserHeader, () => {
    closeDropdown();
  });

  const toggleDropdown = (() => {
    isOpen.value = !isOpen.value;
  })
  const closeDropdown = (() => {
    isOpen.value = false;
  })
</script>

<style>

</style>