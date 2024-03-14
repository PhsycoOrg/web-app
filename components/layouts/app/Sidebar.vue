<template>
  <aside class="bg-white app-sidebar w-full lg:w-72 px-6 border-r fixed z-50 lg:relative lg:left-0 transition-all duration-300" :class="{'left-0': isMenuShow, '-left-full': !isMenuShow}">
    <div class="h-14 flex items-center justify-between">
      <h1 class="text-xl font-medium">Pshyco</h1>
      <button @click="handleHideMenu" class="lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M18 6l-12 12" /><path d="M6 6l12 12" />
        </svg>
      </button>
    </div>
    <nav class="app-sidebar-menu mt-6 flex-grow flex flex-col justify-between">
      <ul class="w-full space-y-3">
        <MenuItem v-for="menuItem in menuItems" :to="menuItem.to" :text="menuItem.text" :icon="menuItem.icon" :sub-menu="menuItem.subMenu" />
      </ul>

      <ul class="w-full self-end border-t border-slate-200 pt-6">
        <li class="flex items-center w-full h-10 text-sm hover:bg-slate-100 px-3 rounded-xl mb-3">
          <NuxtLink to="#" class="inline-flex items-center w-full h-full">
            <svg class="text-black mr-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
              <path d="M15 15l3.35 3.35" />
              <path d="M9 15l-3.35 3.35" />
              <path d="M5.65 5.65l3.35 3.35" />
              <path d="M18.35 5.65l-3.35 3.35" />
            </svg>
            <span class="font-medium">Ayuda</span>
          </NuxtLink>
        </li>
        <li class="flex items-center w-full h-10 text-sm hover:bg-slate-100 px-3 rounded-xl mb-3">
          <NuxtLink to="#" class="inline-flex items-center w-full h-full">
            <svg class="text-black mr-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
              <path d="M12 11l0 .01" /><path d="M8 11l0 .01" /><path d="M16 11l0 .01" /></svg>
            <span class="font-medium">Feedback</span>
          </NuxtLink>
        </li>
        <li class="flex items-center w-full h-10 text-sm hover:bg-slate-100 px-3 rounded-xl mb-3">
          <NuxtLink to="#" class="inline-flex items-center w-full h-full">
            <svg class="text-black mr-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 11h18" /><path d="M5 11v-4a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v4" />
              <path d="M7 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M10 17h4" /></svg>
            <span class="font-medium">Política de Privacidad</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script lang="ts" setup>
  import type { Menu } from '@/interfaces/MenuInterface';
  import MenuItem from '@/components/layouts/app/SidebarMenuItem.vue';
  import { menus } from '@/data/Menu';

  const user = useUser();
  const isMenuShow = ref<boolean>(false);
  const { $listen } = useNuxtApp()
  
  type ObjectKey = keyof typeof menus;
  const role = user.getRole as ObjectKey;
  const menuItems: Menu[] = menus[role];

  $listen('layout:show-sidebar', (isShowing: boolean) => {
    isMenuShow.value = isShowing;
  })

  const handleHideMenu = (() => {
    isMenuShow.value = false;
  })
</script>

<style></style>