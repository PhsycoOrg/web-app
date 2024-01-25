<template>
  <h2 class="text-4xl font-medium mb-2">Recupera tu contraseña</h2>
  <p class="text-gray-500 mb-8">Recupera el acceso a tu bienestar: Restablece tu contraseña aquí.</p>
  <form>
    <div>
      <label for="email" class="text-black font-medium leading-6 text-sm block">Correo electrónico</label>
      <div class="mt-2">
        <input class="form-input" placeholder="Correo electrónico" id="email" type="email" required autocomplete="off" />
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
    title: 'Recupera tu contraseña - Physco'
  });
</script>

<style>

</style>