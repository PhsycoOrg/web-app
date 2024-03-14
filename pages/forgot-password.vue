<template>
  <div v-if="statusMessage" class="bg-green-50 w-full text-sm text-center p-3 mb-4 rounded-md border border-green-300 text-green-700">
    {{ statusMessage }}
  </div>
  <h2 class="text-4xl font-medium mb-2">Recupera tu contraseña</h2>
  <p class="text-gray-500 mb-8">Recupera el acceso a tu bienestar: Restablece tu contraseña aquí.</p>
  <form @submit.prevent="submit">
    <div>
      <label for="email" class="text-black font-medium leading-6 text-sm block">Correo electrónico</label>
      <div class="mt-2">
        <input v-model="email" class="form-input w-full" placeholder="Correo electrónico" id="email" type="email" required autocomplete="off" />
        <small class="text-red-600" v-if="error">{{ error }}</small>
      </div>
    </div>
    <button class="btn-primary w-full my-6" :disabled="isButtonLoading">
      <span v-if="isButtonLoading" class="flex">
        <svg class="motion-safe:animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Procesando...
      </span>
      <span v-else>Recuperar contraseña</span>
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
    layout: 'auth',
    middleware: ["guest"],
  });

  useHead({
    title: 'Recupera tu contraseña - Physco'
  });

  const { passwordForgot } = useApi();
  const error = ref(null);
  const statusMessage = ref('');
  const isButtonLoading = ref<boolean>(false);
  const email = ref('')

  async function submit() {
    isButtonLoading.value = true;

    try {
      error.value = null;

      await passwordForgot(email.value).then((res) => {
        statusMessage.value = res.data.status;
        email.value = '';
      });
        
    } catch (err: any) {
      error.value = err.message;
    } finally {
      isButtonLoading.value = false;
    }
  }
</script>

<style>

</style>