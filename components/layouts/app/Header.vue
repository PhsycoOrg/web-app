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
        <button class="flex items-center outline-none gap-4 pr-2 text-sm transparent rounded-full focus:outline-none focus:bg-perfume-50 transition" :class="{'bg-perfume-50': isOpen}">
          <span class="flex items-center outline-none gap-3">
            <img class="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
            {{ user.name }}
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
        class="absolute z-50 mt-2 origin-top-right right-0 w-64 rounded-xl shadow-lg">
        <div class="rounded-xl px-1.5 ring-1 ring-black ring-opacity-5 py-1.5 bg-white">
          <div class="flex flex-col items-center justify-center mb-2">
            <img class="h-20 w-20 rounded-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
            <p class="text-sm mt-4 font-semiblod text-black">{{ user.name }}</p>
            <p class="text-xs mb-2 text-gray-500">{{ user.email }}</p>
          </div>
          <hr class="my-2">
          <NuxtLink @click="closeDropdown" to="/user/profile" class="font-medium flex items-center rounded-xl cursor-pointer px-3 py-2 my-1 text-sm leading-5 text-black hover:bg-perfume-50 hover:text-perfume-700 focus:outline-none focus:bg-perfume-100 transition">
            <svg class="mr-2 w-5 h-5" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </svg>
            Perfil
          </NuxtLink>
          <NuxtLink @click="closeDropdown" to="/user/profile" class="font-medium flex items-center rounded-xl cursor-pointer px-3 py-2 my-1 text-sm leading-5 text-black hover:bg-perfume-50 hover:text-perfume-700 focus:outline-none focus:bg-perfume-100 transition">
            <svg class="mr-2 w-5 h-5" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
              <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
            </svg>
            Configuración
          </NuxtLink>
          <div class="border-t border-gray-100 my-1"></div>
          <button @click="handleLogout" class="w-full font-medium flex items-center rounded-xl cursor-pointer px-3 py-2 my-1 text-sm leading-5 text-black hover:bg-perfume-50 hover:text-perfume-700 focus:outline-none focus:bg-perfume-100 transition">
            <svg class="mr-2 w-5 h-5" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
              <path d="M9 12h12l-3 -3" />
              <path d="M18 15l3 -3" />
            </svg>
            Cerrar Sesión
          </button>
        </div>
      </TransitionRoot>
    </div>
  </header>
</template>

<script lang="ts" setup>
  import { TransitionRoot } from '@headlessui/vue'
  import useDetectOutsideClick from '~/composables/useDetectOutsideClick'

  const { $event } = useNuxtApp();
  const { logout } = useAuth();

  const dropdownUserHeader = ref();
  const isOpen = ref<boolean>(false);
  const user = useUser().getProfileInformation;

  const handleLogout = (async () => {
    await logout();
  })

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