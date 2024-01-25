<template>
  <h2 class="text-4xl font-medium mb-2">Reestablece tu contraseña</h2>
  <p class="text-gray-500 mb-8">Restablece tu contraseña y recupera el control de tu bienestar emocional.</p>
  <form>
    <div>
      <label for="email" class="text-black font-medium leading-6 text-sm block">Correo electrónico</label>
      <div class="mt-2">
        <input class="form-input" placeholder="Correo electrónico" id="email" type="email" required autocomplete="off" disabled />
      </div>
    </div>
    <div class="my-4">
      <label for="password" class="text-black font-medium leading-6 text-sm block">Contraseña</label>
      <div class="mt-2">
        <input class="form-input" placeholder="Contraseña" type="password" id="password" required autocomplete="off" />
      </div>
    </div>
    <div class="my-4">
      <label for="conf-password" class="text-black font-medium leading-6 text-sm block">Confirmar Contraseña</label>
      <div class="mt-2">
        <input class="form-input" placeholder="Confirmar Contraseña" type="password" id="conf-password" required autocomplete="off" />
      </div>
    </div>
    <button class="btn-primary my-6">
      Recuperar contraseña
    </button>
    <p class="text-center text-sm text-gray-500">
      ¿Todavía no tienes una cuenta?
      <NuxtLink to="/register" class="font-medium text-perfume-600">
        Regístrate
      </NuxtLink>
    </p>
  </form>
</template>

<script lang="ts" setup>
  definePageMeta({
    layout: 'auth'
  });

  useHead({
    title: 'Reestablece tu contraseña - Physco'
  });
</script>

<style>

</style>