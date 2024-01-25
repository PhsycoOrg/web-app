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

      <ul class="w-full self-end">
        <li class="flex items-center w-full h-10 text-sm hover:bg-slate-100 px-3 rounded-xl mb-3">
          <NuxtLink to="#" class="inline-flex items-center w-full h-full">
            <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
              stroke-linecap="round" stroke-linejoin="round" class="text-black mr-2">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
              <path d="M4 9h8" />
              <path d="M12 15h8" />
              <path d="M12 4v16" />
            </svg>
            <span class="font-medium">Inicio</span>
          </NuxtLink>
        </li>
        <li class="flex items-center w-full h-10 text-sm hover:bg-slate-100 px-3 rounded-xl mb-3">
          <NuxtLink to="#" class="inline-flex items-center w-full h-full">
            <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
              stroke-linecap="round" stroke-linejoin="round" class="text-black mr-2">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h.5" />
              <path
                d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z" />
            </svg>
            <span class="font-medium">Especialistas</span>
          </NuxtLink>
        </li>
        <li class="flex items-center w-full h-10 text-sm hover:bg-slate-100 px-3 rounded-xl mb-3">
          <NuxtLink to="#" class="inline-flex items-center w-full h-full">
            <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
              stroke-linecap="round" stroke-linejoin="round" class="text-black mr-2">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
              <path d="M16 3l0 4" />
              <path d="M8 3l0 4" />
              <path d="M4 11l16 0" />
              <path d="M8 15h2v2h-2z" />
            </svg>
            <span class="font-medium">Citas</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script lang="ts" setup>
  import type { Menu } from '~/interfaces/MenuInterface';
  import MenuItem from '~/components/layouts/app/SidebarMenuItem.vue';

  const isMenuShow = ref<boolean>(false);

  const { $listen } = useNuxtApp()

  $listen('layout:show-sidebar', (isShowing: boolean) => {
    isMenuShow.value = isShowing;
  })

  const handleHideMenu = (() => {
    isMenuShow.value = false;
  })

  const menuItems: Menu[] = [
    {
      text: 'Inicio',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
              stroke-linecap="round" stroke-linejoin="round" class="text-black mr-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
              <path d="M4 9h8" /><path d="M12 15h8" /><path d="M12 4v16" /></svg>`,
      to: '/dashboard'
    },
    {
      text: 'Citas',
      to: '/citas',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
              stroke-linecap="round" stroke-linejoin="round" class="text-black mr-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
              <path d="M16 3l0 4" /><path d="M8 3l0 4" /><path d="M4 11l16 0" /><path d="M8 15h2v2h-2z" /></svg>`,
    },
    {
      text: 'Especialistas',
      to: '/citas',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
              stroke-linecap="round" stroke-linejoin="round" class="text-black mr-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h.5" />
              <path
                d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z" />
            </svg>`,
    },
    {
      text: 'SubMenu 1',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
              stroke-linecap="round" stroke-linejoin="round" class="text-black mr-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h.5" />
              <path
                d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z" />
            </svg>`,
      subMenu: [
        {
          text: 'Submenu 1.1',
          to: '/submenu-1'
        },
        {
          text: 'Submenu 1.1',
          to: '/submenu-1'
        }
      ]
    },
    {
      text: 'SubMenu 2',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
              stroke-linecap="round" stroke-linejoin="round" class="text-black mr-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h.5" />
              <path
                d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z" />
            </svg>`,
      subMenu: [
        {
          text: 'Submenu 2.1',
          to: '/submenu-2'
        },
        {
          text: 'Submenu 2.1',
          to: '/submenu-2'
        }
      ]
    }
  ];
</script>

<style></style>