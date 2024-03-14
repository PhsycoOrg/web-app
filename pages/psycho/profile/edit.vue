<template>
  <section class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <div class="col-span-2">
      <h2 class="text-xl font-semibold">Editar Perfil Profesional</h2>
      <div class="mt-4 grid grid-cols-1 gap-6">
        <div class="bg-white border border-slate-200 p-4 rounded-lg">
          <div class="p-3 pt-3 lg:px-9 lg:pt-9 flex-auto min-h-[70px] pb-0 bg-transparent">
            <div class="flex flex-wrap mb-6 xl:flex-nowrap">
              <div class="relative inline-block shrink-0 rounded-2xl mb-5 mr-5 w-20 h-20 lg:w-40 lg:h-40">
                <img class="inline-block shrink-0 rounded-2xl w-full h-full object-cover" :src="profile_photo_url"
                  alt="image" />
              </div>
              <div class="grow">
                <div class="flex flex-col">
                  <div class="flex items-center mb-2">
                    <p class="text-secondary-inverse font-semibold text-[1.5rem] mr-1">
                      {{ name }}
                    </p>
                    <span title="Perfil Verificado">
                      <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                        class="w-6 h-6 text-purple-300">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                      </svg>
                    </span>
                  </div>
                  <div class="pr-2 mb-4 w-full">
                    <div>
                      <label for="title_specializations" class="text-black font-medium leading-6 text-sm flex items-center">
                        Título - Especialidad 
                        <span class="text-red-500">
                          <svg class="w-4 h-4" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" stroke-width="0" fill="currentColor" />
                          </svg>
                        </span>
                      </label>
                      <div class="mt-1">
                        <input v-model="professionalData.title_specializations" class="form-input w-full"
                          id="title_specializations" type="text" required
                          placeholder="Psicólogo Clínico en Terapia Cognitivo-Conductual" />
                        <small v-if="errs && errs.title_specializations" v-for="error in errs.title_specializations"
                          class="text-red-600">{{ error }}</small>
                      </div>
                    </div>
                    <div class="mt-4">
                      <label for="license_number" class="text-black font-medium leading-6 text-sm flex items-center">
                        Colegiatura
                        <span class="text-red-500">
                          <svg class="w-4 h-4" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" stroke-width="0" fill="currentColor" />
                          </svg>
                        </span>
                      </label>
                      <div class="mt-1">
                        <input v-model="professionalData.license_number" class="form-input w-full" id="license_number"
                          type="text" required maxlength="6" placeholder="Ej. 234567" />
                        <small v-if="errs && errs.license_number" v-for="error in errs.license_number"
                          class="text-red-600">{{ error }}</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="">
                  <div class="flex flex-wrap items-center">
                    <div class="w-full">
                      <label for="specialization" class="text-black font-medium leading-6 text-sm flex items-center">
                        Áreas específicas de especialización
                        <span class="text-red-500">
                          <svg class="w-4 h-4" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" stroke-width="0" fill="currentColor" />
                          </svg>
                        </span>
                      </label>
                      <div class="mt-1">
                        <textarea v-model="professionalData.specialization" class="form-input w-full min-h-32"
                          id="specialization" required
                          placeholder="Ejemplo: Como Psicólogo Clínico especializado en Terapia Cognitivo-Conductual, mis áreas específicas de experiencia incluyen el manejo de trastornos de ansiedad, depresión y estrés. Utilizo enfoques basados en la modificación de pensamientos y conductas para ayudar a los pacientes a desarrollar habilidades de afrontamiento efectivas. También tengo experiencia trabajando con adultos jóvenes y adultos en el ámbito universitario. Siéntete libre de compartir detalles similares sobre tus áreas de especialización y experiencia clínica."></textarea>
                        <small v-if="errs && errs.specialization" v-for="error in errs.specialization"
                          class="text-red-600">{{ error }}</small>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-wrap items-center mt-4">
                    <div class="w-full">
                      <label for="categories" class="text-black font-medium leading-6 text-sm flex items-center">
                        Experiencia en tratamientos específicos (terapia individual, terapia de pareja, terapia familiar,
                        etc.)
                        <span class="text-red-500">
                          <svg class="w-4 h-4" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" stroke-width="0" fill="currentColor" />
                          </svg>
                        </span>
                      </label>
                      <p class="text-sm text-perfume-600">Tu experiencia en tratamientos específicos se usará para
                        conectarte con tus posibles pacientes.</p>
                      <Listbox as="div" class="w-full lg:w-48 mt-4" @update:modelValue="value => handleAddCategory(value)">
                        <div class="relative">
                          <ListboxButton
                            class="relative w-full h-10 cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6">
                            <span>
                              Seleccione un Item
                            </span>
                            <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                              <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                              </svg>
                            </span>
                          </ListboxButton>
                          <ListboxOptions
                            class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            <ListboxOption as="template" v-for="category in categories" :key="category.id"
                              :value="category">
                              <li :class="['text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9']">
                                <div class="flex justify-between items-center">
                                  <span :class="['font-normal', 'ml-3 block truncate']">{{ category.name }}</span>
                                </div>
                              </li>
                            </ListboxOption>
                          </ListboxOptions>
                        </div>
                      </Listbox>
                      <small v-if="errs && errs.categories" v-for="error in errs.categories" class="text-red-600">{{ error
                      }}</small>
                    </div>
                    <div class="w-full mt-4">
                      <label for="categories" class="text-black font-medium leading-6 text-sm block mb-4">
                        Experiencia agregadas
                      </label>
                      <span v-for="(item, index) in professionalData.categories"
                        class="mr-3 mb-2 inline-flex items-center justify-center text-secondary-inverse rounded-full bg-neutral-100 hover:bg-neutral-200 transition-all duration-200 ease-in-out px-3 py-1 text-sm font-medium leading-normal">
                        {{ item.name }}
                        <button @click="handleRemoveCategory(index)" type="button">
                          <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            class="w-5 h-5 ml-2 text-red-600">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </span>
                    </div>
                    <div class="w-full mt-4">
                      <button @click="handleUpdateProfile" type="button" class="btn-primary w-full"
                        :disabled="isButtonLoading">
                        <span v-if="isButtonLoading" class="flex">
                          <svg class="motion-safe:animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                            </circle>
                            <path class="opacity-75" fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                            </path>
                          </svg>
                          Actualizando Perfil...
                        </span>
                        <span v-else>Acttualizar</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  import type { Category, ProfessionalData } from '@/interfaces/Psycho/ProfessionalData';
  import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue';
  import type { PsychoProfileError } from '@/interfaces/Errors';

  definePageMeta({
    layout: 'app',
    middleware: ['auth', 'psycho'],
  });

  useHead({
    title: 'Editar Perfil Profesional - Physco'
  });

  const { updateProfessionalProfileData, getCategories, getProfessionalProfileData } = useApi();
  const user = useUser();
  const notification = useNotification();

  const categories = ref<Category[]>([]);
  const isButtonLoading = ref<boolean>(false);
  const { name, profile_photo_url } = user;
  const errs = ref<PsychoProfileError>({
    title_specializations: [],
    license_number: [],
    specialization: [],
    categories: []
  });

  const professionalData = ref<ProfessionalData>({
    title_specializations: '',
    license_number: null,
    specialization: null,
    categories: [],
  });

  onMounted(() => {
    getCategoriesData();
    getProfessionalData();
  })

  const getCategoriesData = (async () => {
    const response = await getCategories();
    categories.value = response.data;
  });

  const getProfessionalData = (async () => {
    const response = await getProfessionalProfileData();
      professionalData.value = response.data;
  });

  const handleAddCategory = ((category: Category) => {
    const exists = professionalData.value.categories.some((cat) => cat.id === category.id);

    if (exists) return;

    professionalData.value.categories.push(category);
  });

  const handleRemoveCategory = ((category: number) => {
    professionalData.value.categories.splice(category, 1);
  });

  const validatePsychologistData = (): boolean => {
    const data = professionalData.value;
    let status = true;

    if (!data.title_specializations || data.title_specializations.trim() === '') {
      errs.value.title_specializations.push('El título de especialización es obligatorio.');
      status = false;
    }

    if (!data.license_number || isNaN(data.license_number)) {
      errs.value.license_number.push('El número de colegiatura es obligatorio y debe ser un número.');
      status = false;
    } else {
      const licenseNumberStr = String(data.license_number);
      if (licenseNumberStr.length < 6 || licenseNumberStr.length > 7) {
        errs.value.license_number.push('El número de colegiatura debe tener entre 6 y 7 dígitos.');
        status = false;
      }
    }

    if (!data.specialization || data.specialization.trim() === '') {
      errs.value.specialization.push('La especialización es obligatoria.');
      status = false;
    }

    if (!data.categories || data.categories.length === 0) {
      errs.value.categories.push('Debe seleccionar al menos una categoría.');
      status = false;
    }

    return status;
  };

  const handleUpdateProfile = (async () => {
    errs.value = {
      title_specializations: [],
      license_number: [],
      specialization: [],
      categories: []
    };

    const statusValidation = validatePsychologistData();

    if (statusValidation == false) {
      return;
    }

    isButtonLoading.value = true

    try {
      errs.value = {
        title_specializations: [],
        license_number: [],
        specialization: [],
        categories: []
      };

      const formData = professionalData.value;
      const formDataCategories = formData.categories.map(category => category.id);

      await updateProfessionalProfileData(formData.title_specializations, formData.license_number as number,
             formData.specialization as string, formDataCategories);

      navigateTo('/psycho/profile');

      notification.add('Perfil actualizado', 'Se actualizó la información de tu perfile profesional correctamente.', 'success', true);
    } catch (err: any) {
      errs.value = err.errors;
      notification.add('Error al actualizar tu perfil', 'No se puedo quitar la información de tu perfil.', 'error', true);
    } finally {
      isButtonLoading.value = false;
    }

  });
</script>

<style></style>