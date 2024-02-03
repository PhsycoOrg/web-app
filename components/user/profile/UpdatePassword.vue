<template>
  <div class="bg-white border border-gray-100 rounded-xl max-w-7xl mx-auto py-4 sm:px-6 lg:px-8">
    <div class='md:grid md:grid-cols-3 md:gap-6'>
      <div class="md:col-span-1 flex justify-between">
        <div class="px-4 sm:px-0">
          <h3 class="text-lg font-medium text-gray-900">Actualizar contraseña</h3>
          <p class="mt-1 text-sm text-gray-600">Actualiza la información de tu perfil y asegúrate de tener la dirección de correo electrónico correcta en tu cuenta. Mantener tus detalles actualizados nos ayuda a ofrecerte el mejor servicio. </p>
        </div>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
        <form @submit.prevent="handleUpdatePassword">
          <div class="px-4 py-5 sm:p-0 sm:rounded-tl-md sm:rounded-tr-md">
            <div class="grid grid-cols-6 gap-6">
              
              <div class="col-span-6 md:col-span-6 xl:col-span-4">
                <label for="current-password" class="form-label">Contraseña actual</label>
                <input v-model="data.password" id="current-password" type="password" class="form-input" autocomplete="off">
                <small v-if="errs && errs.password" v-for="error in errs.password" class="text-red-600 block" >{{ error }}</small>
              </div>

              <!-- Email -->
              <div class="col-span-6 md:col-span-6 xl:col-span-4">
                <label for="new-password" class="form-label">Nueva Contraseña</label>
                <input v-model="data.new_password" id="new-password" type="password" class="form-input" autocomplete="off">
                <small v-if="errs && errs.new_password" v-for="error in errs.new_password" class="text-red-600 block" >{{ error }}</small>
              </div>

              <div class="col-span-6 md:col-span-6 xl:col-span-4">
                <label for="confirm-password" class="form-label">Confirmar Contraseña</label>
                <input v-model="data.new_password_confirmation" id="confirm-password" type="password" class="form-input" autocomplete="off">
              </div>
            </div>
          </div>

          <div class="flex items-center justify-end mt-10 pt-6 pb-2 px-4 sm:p-0 text-right sm:rounded-bl-md sm:rounded-br-md">
            <button type="submit" class="btn-primary" :disabled="isButtonLoading">
              <span v-if="isButtonLoading" class="flex">
                <svg class="motion-safe:animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Actualizando...
              </span>
              <span v-else>Actualizar</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { AuthErrors } from '~/interfaces/AuthInterface';

  const api = useApi();
  const notification = useNotification();

  const data = {
    password: '',
    new_password: '',
    new_password_confirmation: ''
  };
  const errs = ref<AuthErrors>({});
  const isButtonLoading = ref<boolean>(false);

  const handleUpdatePassword = (async () => {
    isButtonLoading.value = true;
    errs.value = {};

    try {
      await api.profile.updatePassword(data.password, data.new_password, data.new_password_confirmation).then((res) => {
        notification.add('Contraseña actualizada', res.status, 'success', true);
      });  
    } catch (err: any) {
      errs.value = err.errors;
    } finally {
      isButtonLoading.value = false;
    }
  })
</script>

<style>

</style>