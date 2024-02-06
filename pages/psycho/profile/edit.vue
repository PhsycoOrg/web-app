<template>
  <section class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <div class="col-span-2">
      <h2 class="text-xl font-semibold">Editar Perfil Profesional</h2>
      <div class="mt-4 grid grid-cols-1 gap-6">
        <div class="bg-white border border-slate-200 p-4 rounded-lg">
          <div class="p-3 pt-3 lg:px-9 lg:pt-9 flex-auto min-h-[70px] pb-0 bg-transparent">
            <div class="flex flex-wrap mb-6 xl:flex-nowrap">
              <div class="relative inline-block shrink-0 rounded-2xl mb-5 mr-5 w-20 h-20 lg:w-40 lg:h-40">
                <img class="inline-block shrink-0 rounded-2xl w-full h-full"
                  src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar1.jpg"
                  alt="image" />
              </div>
              <div class="grow">
                <div class="flex flex-col">
                  <div class="flex items-center mb-2">
                    <p class="text-secondary-inverse font-semibold text-[1.5rem] mr-1">
                      Alec Jhonson
                    </p>
                    <span title="Perfil Verificado">
                      <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-purple-300">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                      </svg>
                    </span>
                  </div>
                  <div class="pr-2 mb-4 w-full">
                    <div>
                      <label for="title_specializations" class="text-black font-medium leading-6 text-sm block">
                        Título - Especialidad
                      </label>
                      <div class="mt-1">
                        <input class="form-input" id="title_specializations" type="text" required
                          placeholder="Psicólogo Clínico en Terapia Cognitivo-Conductual" />
                        <!-- <small v-if="errs && errs.email" v-for="error in errs.email" class="text-red-600" >{{ error }}</small> -->
                      </div>
                    </div>
                    <div class="mt-4">
                      <label for="license_number" class="text-black font-medium leading-6 text-sm block">
                        Colegiatura
                      </label>
                      <div class="mt-1">
                        <input class="form-input" id="license_number" type="text" required maxlength="6"
                          placeholder="Ej. 234567" />
                        <!-- <small v-if="errs && errs.email" v-for="error in errs.email" class="text-red-600" >{{ error }}</small> -->
                      </div>
                    </div>
                  </div>
                </div>
                <div class="">
                  <div class="flex flex-wrap items-center">
                    <div class="w-full">
                      <label for="license_number" class="text-black font-medium leading-6 text-sm block">
                        Áreas específicas de especialización
                      </label>
                      <div class="mt-1">
                        <textarea class="form-input min-h-32" id="license_number" required
                          placeholder="Ejemplo: Como Psicólogo Clínico especializado en Terapia Cognitivo-Conductual, mis áreas específicas de experiencia incluyen el manejo de trastornos de ansiedad, depresión y estrés. Utilizo enfoques basados en la modificación de pensamientos y conductas para ayudar a los pacientes a desarrollar habilidades de afrontamiento efectivas. También tengo experiencia trabajando con adultos jóvenes y adultos en el ámbito universitario. Siéntete libre de compartir detalles similares sobre tus áreas de especialización y experiencia clínica."></textarea>
                        <!-- <small v-if="errs && errs.email" v-for="error in errs.email" class="text-red-600" >{{ error }}</small> -->
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-wrap items-center mt-4">
                    <a href="javascript:void(0)" v-for="n in 15"
                      class="mr-3 mb-2 inline-flex items-center justify-center text-secondary-inverse rounded-full bg-neutral-100 hover:bg-neutral-200 transition-all duration-200 ease-in-out px-3 py-1 text-sm font-medium leading-normal">
                      Following </a>
                    <a href="javascript:void(0)"
                      class="mr-3 mb-2 inline-flex items-center justify-center text-secondary-inverse rounded-full bg-neutral-100 hover:bg-neutral-200 transition-all duration-200 ease-in-out px-3 py-1 text-sm font-medium leading-normal">
                      Followers </a>
                    <a href="javascript:void(0)"
                      class="mr-3 mb-2 inline-flex items-center justify-center text-secondary-inverse rounded-full bg-neutral-100 hover:bg-neutral-200 transition-all duration-200 ease-in-out px-3 py-1 text-sm font-medium leading-normal">
                      Deals </a>
                  </div>
                </div>
              </div>
            </div>
            <hr class="w-full h-px border-neutral-200">
            <div class="block lg:flex gap-6">
              <div class="mt-7 w-full lg:w-1/2">
                <h2 class="leading-7 font-medium text-base text-black">Preferencias</h2>
                <p class="leading-6 text-sm text-gray-500">Consulta las preferencias y ajustes de tu psicólogo</p>
                <ul role="list" class="leading-6 text-sm border-t border-gray-200	mt-6 divide-y divide-gray-100">
                  <li class="py-3 gap-x-6 justify-between items-center flex">
                    <div class="font-medium">Anticipación para agendar</div>
                    <p class="text-perfume-700">24 horas</p>
                  </li>
                  <li class="py-3 gap-x-6 justify-between items-center flex">
                    <div class="font-medium">Confirmación automática de cita</div>
                    <div class="text-perfume-700">Sí</div>
                  </li>
                  <li class="py-3 gap-x-6 justify-between items-center flex">
                    <div class="font-medium">Duración de Sesiones</div>
                    <div class="text-perfume-700 text-right">
                      <p>30 minutos</p>
                      <p>1 hora</p>
                    </div>
                  </li>
                </ul>
              </div>
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
  definePageMeta({
    layout: 'app',
    middleware: ['auth', 'psycho'],
  });

  useHead({
    title: 'Editar Perfil Profesional - Physco'
  });
</script>

<style></style>