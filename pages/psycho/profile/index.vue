<template>
  <section class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <div class="col-span-2 relative">
      <h2 class="text-xl font-semibold">Perfil Profesional</h2>
      <p class="text-sm"></p>
      <PageLoader v-if="isDataLoading" text="Obteniendo la información de tu Perfil" />
      <div class="mt-4 grid grid-cols-1 gap-6">
        <div class="bg-white border border-slate-200 p-4 rounded-lg">
          <div class="p-3 pt-3 lg:px-9 lg:pt-9 flex-auto min-h-[70px] pb-0 bg-transparent">
            <div class="flex flex-wrap mb-6 xl:flex-nowrap">
              <div class="relative inline-block shrink-0 rounded-2xl mb-5 mr-5 w-20 h-20 lg:w-40 lg:h-40">
                <img class="inline-block shrink-0 rounded-2xl w-full h-full object-cover" :src="profile_photo_url"
                  alt="image" />
              </div>
              <div class="grow">
                <div class="flex flex-wrap items-start justify-between mb-2">
                  <div class="flex flex-col">
                    <div class="flex items-center mb-2">
                      <p class="text-secondary-inverse font-semibold text-[1.5rem] mr-1">
                        {{ name }}
                      </p>
                      <span title="Perfil Verificado">
                        <svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-purple-700">
                          <path fill-rule="evenodd"
                            d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                            clip-rule="evenodd" />
                        </svg>
                      </span>
                      <small v-if="professionalData.public" class="text-sm text-gray-600 font-normal">
                        Perfil es público
                      </small>
                      <small v-else="professionalData.public" class="text-sm text-gray-600 font-normal">
                        Perfil no es público
                      </small>
                    </div>
                    <div class="pr-2 mb-4">
                      <p class="text-secondary-dark text-base mb-4">
                        C.P.P: # {{ professionalData.license_number }}
                      </p>
                      <p class="font-medium text-secondary-dark">
                        {{ professionalData.title_specializations }}
                      </p>
                    </div>
                  </div>
                  <div class="flex flex-wrap my-auto">
                    <NuxtLink to="/psycho/profile/edit" class="btn-primary">
                      Editar
                    </NuxtLink>
                  </div>
                </div>
                <div class="flex flex-wrap w-full ">
                  <div class="flex flex-wrap items-center w-full">
                    {{ professionalData.specialization }}
                  </div>
                  <div class="flex flex-wrap items-center w-full mt-4">
                    <label for="categories" class="text-black block font-medium leading-6 text-[16px] w-full mb-4 items-center">
                      Experiencia en tratamientos específicos:
                    </label>
                    <span v-for="(item, index) in professionalData.categories"
                        class="select-none mr-3 mb-2 inline-flex items-center justify-center text-secondary-inverse rounded-full bg-neutral-100 hover:bg-neutral-200 transition-all duration-200 ease-in-out px-3 py-1 text-sm font-medium leading-normal">
                        {{ item.name }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <hr class="w-full h-px border-neutral-200">
            <div class="block lg:flex gap-6">
              <div class="mt-7 w-full lg:w-1/2">
                <h2 class="leading-7 font-medium text-base text-black">Horario Disponible</h2>
                <p class="leading-6 text-sm text-gray-500">Descubre cuándo tu psicólogo está disponible para citas</p>
                <ul role="list" class="leading-6 text-sm border-t border-gray-200	mt-6 divide-y divide-gray-100">
                  <li class="py-3 gap-x-6 justify-between items-center flex">
                    <div class="font-medium">Diás no disponibles</div>
                    <div class="text-perfume-700 text-right">
                      <p>2024-02-14</p>
                      <p>2024-05-01</p>
                    </div>
                  </li>
                  <li class="py-3 gap-x-6 justify-between items-center flex">
                    <div class="font-medium">Lunes</div>
                    <div class="text-perfume-700 text-right">
                      <p>09:00 - 12:00</p>
                      <p>14:00 - 18:00</p>
                    </div>
                  </li>
                  <li class="py-3 gap-x-6 justify-between items-center flex">
                    <div class="font-medium">Martes</div>
                    <div class="text-perfume-700 text-right">
                      <p>09:00 - 12:00</p>
                    </div>
                  </li>
                  <li class="py-3 gap-x-6 justify-between items-center flex">
                    <div class="font-medium">Miércoles</div>
                    <div class="text-perfume-700 text-right">
                      <p>09:00 - 12:00</p>
                    </div>
                  </li>
                  <li class="py-3 gap-x-6 justify-between items-center flex">
                    <div class="font-medium">Jueves</div>
                    <div class="text-perfume-700 text-right">
                      <p>09:00 - 12:00</p>
                      <p>14:00 - 18:00</p>
                    </div>
                  </li>
                  <li class="py-3 gap-x-6 justify-between items-center flex">
                    <div class="font-medium">Viernes</div>
                    <div class="text-perfume-700 text-right">
                      <p>09:00 - 12:00</p>
                      <p>14:00 - 16:00</p>
                      <p>19:00 - 21:00</p>
                    </div>
                  </li>
                  <li class="py-3 gap-x-6 justify-between items-center flex">
                    <div class="font-medium">Sábado</div>
                    <p class="text-gray-500">No disponible</p>
                  </li>
                  <li class="py-3 gap-x-6 justify-between items-center flex">
                    <div class="font-medium">Domingo</div>
                    <p class="text-gray-500">No disponible</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  import type { ProfessionalData } from '@/interfaces/Psycho/ProfessionalData';
  import PageLoader from '@/components/loaders/PageLoader.vue';

  definePageMeta({
    layout: 'app',
    middleware: ['auth', 'psycho'],
  });

  useHead({
    title: 'Perfil Profesional - Physco'
  });

  const { getProfessionalProfileData } = useApi();
  const user = useUser();
  const { name, profile_photo_url } = user;
  const isDataLoading = ref<boolean>(false);
  const professionalData = ref<ProfessionalData>({
    title_specializations: '',
    license_number: null,
    specialization: null,
    categories: [],
    public: false
  });

  onMounted(() => {
    getProfessionalData();
  });

  const getProfessionalData = (async () => {
    isDataLoading.value = true;
    const response = await getProfessionalProfileData();
    professionalData.value = response.data;
    isDataLoading.value = false;
  });
</script>

<style></style>