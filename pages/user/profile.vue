<template>
  <div class="bg-white border border-gray-100 rounded-xl max-w-7xl mx-auto py-4 sm:px-6 lg:px-8">
    <div class='md:grid md:grid-cols-3 md:gap-6'>
      <div class="md:col-span-1 flex justify-between">
        <div class="px-4 sm:px-0">
          <h3 class="text-lg font-medium text-gray-900">Profile Information</h3>
          <p class="mt-1 text-sm text-gray-600">Actualiza la información del perfil y la dirección de correo electrónico de su cuenta.</p>
        </div>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
        <form>
          <div class="px-4 py-5 sm:p-0 sm:rounded-tl-md sm:rounded-tr-md">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 md:col-span-6 xl:col-span-4">
                <!-- Profile Photo File Input -->
                <input type="file" class="hidden" ref="photo" @change="onFileChange($event)" accept="image/*" />
                <label class="block font-medium text-sm text-gray-700">Foto de Perfil</label>

                <!-- Current Profile Photo -->
                <div class="mt-2" v-show="! photoPreview">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="" class="rounded-full h-20 w-20 object-cover">
                </div>

                <!-- New Profile Photo Preview -->
                <div class="mt-2" v-show="photoPreview" style="display: none;">
                  <span class="block rounded-full w-20 h-20 bg-cover bg-no-repeat bg-center"
                    :style="'background-image: url(\'' + photoPreview + '\');'">
                  </span>
                </div>

                <button type="button" @click="photo.click()" class="mt-2 mr-2 btn-white">
                  Selecciona una nueva foto
                </button>
                <button type="button" class="mt-2 btn-white">
                  Quitar foto
                </button>
                <!-- <p class="text-sm text-red-600 mt-2">Mensaje de error</p> -->
              </div>
              <div class="col-span-6 md:col-span-6 xl:col-span-4">
                <label for="name" class="form-label">Nombre</label>
                <input v-model="profileInformation.name" id="name" type="text" class="form-input" autocomplete="off">
                <!-- <p class="text-sm text-red-600 mt-2">Mensaje de error</p> -->
              </div>

              <!-- Email -->
              <div class="col-span-6 md:col-span-6 xl:col-span-4">
                <label for="email" class="form-label">Correo electrónico</label>
                <input v-model="profileInformation.email" id="email" type="email" class="form-input" autocomplete="off">
                <!-- <p class="text-sm text-red-600 mt-2">Mensaje de error</p> -->

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
            <button type="submit" class="btn-primary">Guardar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="block">
    <div class="py-4"></div>
  </div>

  <div class="bg-white border border-gray-100 rounded-xl max-w-7xl mx-auto py-4 sm:px-6 lg:px-8">
    <div class='md:grid md:grid-cols-3 md:gap-6'>
      <div class="md:col-span-1 flex justify-between">
        <div class="px-4 sm:px-0">
          <h3 class="text-lg font-medium text-gray-900">Actualizar contraseña</h3>
          <p class="mt-1 text-sm text-gray-600">Actualiza la información de tu perfil y asegúrate de tener la dirección de correo electrónico correcta en tu cuenta. Mantener tus detalles actualizados nos ayuda a ofrecerte el mejor servicio. </p>
        </div>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
        <form>
          <div class="px-4 py-5 sm:p-0 sm:rounded-tl-md sm:rounded-tr-md">
            <div class="grid grid-cols-6 gap-6">
              
              <div class="col-span-6 md:col-span-6 xl:col-span-4">
                <label for="current-password" class="form-label">Contraseña actual</label>
                <input id="current-password" type="password" class="form-input" autocomplete="off">
                <!-- <p class="text-sm text-red-600 mt-2">Mensaje de error</p> -->
              </div>

              <!-- Email -->
              <div class="col-span-6 md:col-span-6 xl:col-span-4">
                <label for="new-password" class="form-label">Nueva Contraseña</label>
                <input id="new-password" type="password" class="form-input" autocomplete="off">
                <!-- <p class="text-sm text-red-600 mt-2">Mensaje de error</p> -->
              </div>

              <div class="col-span-6 md:col-span-6 xl:col-span-4">
                <label for="confirm-password" class="form-label">Confirmar Contraseña</label>
                <input id="confirm-password" type="password" class="form-input" autocomplete="off">
                <!-- <p class="text-sm text-red-600 mt-2">Mensaje de error</p> -->
              </div>
            </div>
          </div>

          <div class="flex items-center justify-end mt-10 pt-6 pb-2 px-4 sm:p-0 text-right sm:rounded-bl-md sm:rounded-br-md">
            <button type="submit" class="btn-primary">Guardar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import type {ProfileInformation} from '~/interfaces/User/ProfileInterface';

  definePageMeta({
    layout: 'app',
    middleware: ["auth"],
  });

  useHead({
    title: 'Perfil - Physco'
  });

  const user = useUser();
  const { authentication } = useApi();
  const photo = ref();
  const photoPreview = ref();
  const profileInformation: ProfileInformation = user.getProfileInformation;
  const statusMessageEmailVerification = ref(null);

  const onFileChange = ((event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && e.target.result) {
          photoPreview.value = e.target.result;
          console.log(reader.result);
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
</script>
<style></style>