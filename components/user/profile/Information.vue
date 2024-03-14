<template>
  <div class="bg-white border border-gray-100 rounded-xl max-w-7xl mx-auto py-4 sm:px-6 lg:px-8">
    <div class='md:grid md:grid-cols-3 md:gap-6'>
      <div class="md:col-span-1 flex justify-between">
        <div class="px-4 sm:px-0">
          <h3 class="text-lg font-medium text-gray-900">Información del Perfil</h3>
          <p class="mt-1 text-sm text-gray-600">Actualiza la información del perfil y la dirección de correo electrónico de su cuenta.</p>
        </div>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
        <form @submit.prevent="handleUpdateProfile">
          <div class="px-4 py-5 sm:p-0 sm:rounded-tl-md sm:rounded-tr-md">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 md:col-span-6 xl:col-span-4">
                <input type="file" class="hidden" ref="photo" @change="onFileChange($event)" accept="image/*" />
                <label class="block font-medium text-sm text-gray-700">Foto de Perfil</label>

                <div class="mt-2" v-show="! photoPreview">
                  <img
                    :src="profileInformation.photo"
                    alt="" class="rounded-full h-20 w-20 object-cover">
                </div>

                <div class="mt-2" v-show="photoPreview" style="display: none;">
                  <span class="block rounded-full w-20 h-20 bg-cover bg-no-repeat bg-center"
                    :style="'background-image: url(\'' + photoPreview + '\');'">
                  </span>
                </div>

                <button type="button" @click="photo.click()" class="mt-2 mr-2 btn-white">
                  Selecciona una nueva foto
                </button>
                <button v-if="profileInformation.has_profile_photo" :disabled="isDeletePhotoButtonLoading"
                  @click="handleDeleteProfilePhoto" type="button" class="mt-2 btn-white">
                  <span v-if="isDeletePhotoButtonLoading" class="flex">
                    <svg class="motion-safe:animate-spin mr-3 h-5 w-5 mt-0 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Quitando foto...
                  </span>
                  <span v-else>Quitar foto</span>
                </button>
                <small v-if="errs && errs.photo" v-for="error in errs.photo" class="text-red-600 block" >{{ error }}</small>
              </div>

              <div class="col-span-6 md:col-span-6 xl:col-span-4">
                <label for="name" class="form-label">Nombre</label>
                <input v-model="profileInformation.name" id="name" type="text" class="form-input w-full" required autocomplete="off">
                <small v-if="errs && errs.name" v-for="error in errs.name" class="text-red-600 block" >{{ error }}</small>
              </div>

              <div class="col-span-6 md:col-span-6 xl:col-span-4">
                <label for="email" class="form-label">Correo electrónico</label>
                <input v-model="profileInformation.email" id="email" type="email" class="form-input w-full" required autocomplete="off">
                <small v-if="errs && errs.email" v-for="error in errs.email" class="text-red-600 block" >{{ error }}</small>

                <div v-if="! profileInformation.emailVerified" class="text-sm text-yellow-600 bg-yellow-50 p-2 border border-yellow-300 rounded-md mt-4 mb-2">
                  Tú correo electrónico no está verificado.
                </div>
                <button v-if="! profileInformation.emailVerified && ! statusMessageEmailVerification" @click="handleSendVerificationEmail"
                    type="button" class="bg-pear-400 py-1.5 px-4 my-2 rounded-md text-sm text-black hover:bg-pear-500 transition">
                    Haz clic aquí para volver a enviar el correo electrónico de verificación
                  </button>
                <p v-if="statusMessageEmailVerification" class="mt-2 font-medium text-sm text-perfume-600">
                  Se ha enviado un nuevo enlace de verificación a su dirección de correo electrónico.
                </p>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-end mt-10 pt-6 pb-2 px-4 sm:p-0 text-right sm:rounded-bl-md sm:rounded-br-md">
            <button class="btn-primary" :disabled="isButtonLoading">
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
  import type { ProfileErrors } from '@/interfaces/AuthInterface';
  import type {ProfileInformation} from '@/interfaces/User/ProfileInterface';

  const user = useUser();
  const { authentication } = useApi();
  const { fetchUser } = useAuth();
  const api = useApi();
  const notification = useNotification();
  const photo = ref();
  const photoPreview = ref();
  const profileInformation: ComputedRef<ProfileInformation> = computed(() => user.getProfileInformation);
  const statusMessageEmailVerification = ref(null);
  const errs = ref<ProfileErrors>({});
  const isButtonLoading = ref<boolean>(false);
  const isDeletePhotoButtonLoading = ref<boolean>(false);

  const onFileChange = ((event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && e.target.result) {
          photoPreview.value = e.target.result;
        }
      };
      reader.readAsDataURL(file);
      reader.onerror = (error) => {
        console.log("Error ", error);
      };
  });

  const handleSendVerificationEmail = (async () => {
    await authentication.emailSendVerification().then((res) => {
      statusMessageEmailVerification.value = res.status;
    });
  })

  const handleUpdateProfile = (async () => {
    const file = photo.value.files[0];
    const formData = new FormData();
    if (file) {
      formData.append('photo', file);
    }
    formData.append('name', profileInformation.value.name);
    formData.append('email', profileInformation.value.email);

    try {
      isButtonLoading.value = true;
      errs.value = {};

      await api.profile.updateProfile(formData); 
      await fetchUser();
      photoPreview.value = null;
      notification.add('Perfil actualizado', 'Se actualizó la información de tu perfil correctamente.', 'success', true);
    } catch (err: any) {
      errs.value = err.errors;
    } finally {
      isButtonLoading.value = false;
    }
  });

  const handleDeleteProfilePhoto = (async () => {
    try {
      isDeletePhotoButtonLoading.value = true;
      errs.value = {};

      await api.profile.deleteProfilePhoto(); 
      await fetchUser();
      photoPreview.value = null;
      notification.add('Perfil actualizado', 'Se quitó la foto de tu perfil correctamente.', 'success', true);
    } catch (err: any) {
      notification.add('Error al actualizar tu perfil', 'No se puedo quitar la foto de tu perfil.', 'error', true);
    } finally {
      isDeletePhotoButtonLoading.value = false;
    }
  });
</script>

<style></style>