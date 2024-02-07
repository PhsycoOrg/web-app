<template>
  <h2 class="text-4xl font-medium mb-2">Regístrate</h2>
  <p class="text-gray-500 mb-8">Da el primer paso hacia tu bienestar: Regístrate ahora con nuestros psicólogos expertos.</p>
  <form @submit.prevent="submit">
    <div>
      <label for="name" class="text-black font-medium leading-6 text-sm block">Nombre</label>
      <div class="mt-2">
        <input v-model="data.name" class="form-input w-full" placeholder="Nombre" type="text" id="name" required  autocomplete="off" />
        <small v-if="errs && errs.name" v-for="error in errs.name" class="text-red-600" >{{ error }}</small>
      </div>
    </div>
    <div class="my-4">
      <label for="email" class="text-black font-medium leading-6 text-sm block">Correo electrónico</label>
      <div class="mt-2">
        <input v-model="data.email" class="form-input w-full" placeholder="Correo electrónico" type="email" id="email" required autocomplete="off" />
        <small v-if="errs && errs.email" v-for="error in errs.email" class="text-red-600" >{{ error }}</small>
      </div>
    </div>
    <div class="my-4">
      <label for="password" class="text-black font-medium leading-6 text-sm block">Contraseña</label>
      <div class="mt-2">
        <input v-model="data.password" class="form-input w-full" placeholder="Contraseña" type="password" id="password" required autocomplete="off" />
        <small v-if="errs && errs.password" v-for="error in errs.password" class="text-red-600 block" >{{ error }}</small>
      </div>
    </div>
    <div class="my-4">
      <label for="conf-password" class="text-black font-medium leading-6 text-sm block">Confirmar Contraseña</label>
      <div class="mt-2">
        <input v-model="data.password_confirmation" class="form-input w-full" placeholder="Confirmar Contraseña" type="password" id="conf-password" required autocomplete="off" />
      </div>
    </div>
    <button class="btn-primary w-full" :disabled="isButtonLoading">
      <span v-if="isButtonLoading" class="flex">
        <svg class="motion-safe:animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Creando Cuenta...
      </span>
      <span v-else>Crear Cuenta</span>
    </button>
    <button class="btn-white w-full my-8">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 326667 333333" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd">
        <path d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z" fill="#4285f4"/>
        <path d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z" fill="#34a853"/>
        <path d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z" fill="#fbbc04"/>
        <path d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z" fill="#ea4335"/>
      </svg>
      Regístrate con Google
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
import type { AuthErrors, Register } from '~/interfaces/AuthInterface';

  definePageMeta({
    layout: 'auth',
    middleware: ["guest"],
  });

  useHead({
    title: 'Regístrate - Physco'
  });

  const { register } = useAuth();
  const errs = ref<AuthErrors>({});
  const isButtonLoading = ref<boolean>(false);
  const data: Register = reactive({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  async function submit() {
    isButtonLoading.value = true;

    try {
      errs.value = {};
      await register(data.name, data.email, data.password, data.password_confirmation);
      navigateTo('/dashboard');
    } catch (err: any) {
      errs.value = err.errors;
    } finally {
      isButtonLoading.value = false;
    }
  }
</script>

<style>

</style>