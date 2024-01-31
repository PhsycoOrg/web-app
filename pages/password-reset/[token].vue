<template>
  <div v-if="statusMessage" class="bg-green-50 w-full text-sm text-center p-3 mb-4 rounded-md border border-green-300 text-green-700">
    {{ statusMessage }}
  </div>
  <h2 class="text-4xl font-medium mb-2">Reestablece tu contraseña</h2>
  <p class="text-gray-500 mb-8">Restablece tu contraseña y recupera el control de tu bienestar emocional.</p>
  <form @submit.prevent="submit">
    <div>
      <label for="email" class="text-black font-medium leading-6 text-sm block">Correo electrónico</label>
      <div class="mt-2">
        <input v-model="data.email" class="form-input" placeholder="Correo electrónico" id="email" type="email" required autocomplete="off" :disabled="data.email != ''" />
      </div>
    </div>
    <div class="my-4">
      <label for="password" class="text-black font-medium leading-6 text-sm block">Contraseña</label>
      <div class="mt-2">
        <input v-model="data.password" class="form-input" placeholder="Contraseña" type="password" id="password" required autocomplete="off" />
      </div>
    </div>
    <div class="my-4">
      <label for="conf-password" class="text-black font-medium leading-6 text-sm block">Confirmar Contraseña</label>
      <div class="mt-2">
        <input v-model="data.password_confirmation" class="form-input" placeholder="Confirmar Contraseña" type="password" id="conf-password" required autocomplete="off" />
      </div>
    </div>
    <button class="btn-primary w-full my-6">
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
      ¿Ya tienes una cuenta?
      <NuxtLink to="/login" class="font-medium text-perfume-600">
        Inicia Sesión
      </NuxtLink>
    </p>
  </form>
</template>

<script lang="ts" setup>
  import type { ResetPassword } from '~/interfaces/AuthInterface';

  definePageMeta({
    layout: 'auth',
    middleware: ["guest"],
  });

  useHead({
    title: 'Reestablece tu contraseña - Physco'
  });

  const router = useRoute();
  const { email } = router.query;
  const { token } = router.params;
  const { authentication } = useApi();
  const error = ref(null);
  const isButtonLoading = ref<boolean>(false);
    const statusMessage = ref('');

  const data: ResetPassword = reactive({
    email: '',
    password: '',
    password_confirmation: '',
    token: ''
  });

  if (email != undefined) {
    data.email = email?.toString();
  }
  data.token = token.toString();

  async function submit() {
    isButtonLoading.value = true;

    try {
        error.value = null;

        await authentication.passwordReset(data.token, data.email, data.password, data.password_confirmation)
                      .then((res) => {
                        statusMessage.value = res.status;
                        data.email = '';
                        data.password = '';
                        data.password_confirmation;

                        setTimeout(() => {
                          navigateTo('/login');
                        }, 3000)
                      });     
    } catch (err: any) {
      error.value = err.errors;
    } finally {
      isButtonLoading.value = false;
    }
  }
</script>

<style>

</style>