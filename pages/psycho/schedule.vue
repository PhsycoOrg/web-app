<template>
  <section class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <div class="col-span-2">
      <h2 class="text-xl font-semibold">Configurar Disponibilidad</h2>
      <div class="mt-4 grid grid-cols-1 gap-6">
        <div class="bg-white border border-slate-200 p-4 rounded-lg">
          <div class="p-3 pt-3 lg:px-9 lg:pt-9 flex-auto min-h-[70px] pb-0 bg-transparent">
            <div class="block lg:flex gap-6">
              <div class="w-full lg:w-1/2">
                <h2 class="leading-7 font-medium text-base text-black">Preferencias</h2>
                <p class="leading-6 text-sm text-gray-500">Consulta las preferencias y ajustes de tu
                  psicólogo</p>
                <ul role="list" class="leading-6 text-sm border-t border-gray-200	mt-6 divide-y divide-gray-100">
                  <li class="py-3 gap-x-6 justify-between items-center flex">
                    <div class="font-medium">Duración de Sesiones</div>
                    <div class="text-perfume-700 text-right">
                      <Listbox as="div" class="w-48" :modelValue="data.time_intervals"
                        @update:modelValue="value => handleChangeTimeIntervales(value)">
                        <div class="relative">
                          <ListboxButton
                            class="relative w-full h-10 cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6">
                            <span>
                              {{ data.time_intervals }}
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
                            <ListboxOption as="template" v-slot="{ active, selected }" value="1_hour">
                  <li :class="[active ? 'bg-perfume-200 text-perfume-900' : 'text-perfume-900',
                    'relative cursor-default select-none py-2 pl-3 pr-9']">
                    <div :class="[selected ? 'font-semibold' : 'font-normal']"
                      class="flex justify-between items-center ml-3 truncate">
                      1 hora
                    </div>
                    <span v-if="selected"
                      :class="[active ? 'text-perfume-900' : 'text-indigo-900', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                      <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </span>
                  </li>
                  </ListboxOption>
                  <ListboxOption as="template" v-slot="{ active, selected }" value="30_minutes">
                    <li :class="[active ? 'bg-perfume-200 text-perfume-900' : 'text-perfume-900',
                      'relative cursor-default select-none py-2 pl-3 pr-9']">
                      <div :class="[selected ? 'font-semibold' : 'font-normal']"
                        class="flex justify-between items-center ml-3 truncate">
                        30 minutos
                      </div>
                      <span v-if="selected"
                        :class="[active ? 'text-perfume-900' : 'text-indigo-900', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                        <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                          <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                      </span>
                    </li>
                  </ListboxOption>
                  </ListboxOptions>
              </div>
              </Listbox>
            </div>
            </li>
            <li class="py-3 gap-x-6 justify-between items-center flex">
              <div class="font-medium">Tiempo entre sesión</div>
              <input v-model="data.time_between_appointments" type="number" step="1" class="form-input w-48" min="0"
                max="60" placeholder="en minutos">
            </li>
            <li class="py-3 gap-x-6 justify-between items-center flex">
              <div class="font-medium">Anticipación para agendar</div>
              <input v-model="data.confirmation_advance_notice" type="number" step="1" class="form-input w-48" min="1"
                max="60" placeholder="en horas">
            </li>
            <li class="py-3 gap-x-6 justify-between items-center flex">
              <div class="font-medium">Confirmación automática de cita</div>
              <div class="text-perfume-700">
                <Switch v-model="data.automatic_confirmation"
                  :class="data.automatic_confirmation ? 'bg-perfume-600' : 'bg-gray-200'"
                  class="relative inline-flex h-6 w-11 items-center rounded-full">
                  <span class="sr-only">Enable notifications</span>
                  <span :class="data.automatic_confirmation ? 'translate-x-6' : 'translate-x-1'"
                    class="inline-block h-4 w-4 transform rounded-full bg-white transition" />
                </Switch>
              </div>
            </li>
            <li class="py-3 gap-x-6 justify-between items-center flex">
              <div class="font-medium">Máximo de Citas diarias</div>
              <input v-model="data.max_daily_appointments" type="number" step="1" class="form-input w-48" min="1">
            </li>
            <li class="py-3 gap-x-6 justify-between items-center flex">
              <div class="font-medium">Diás no disponibles</div>
              <div class="text-perfume-700 text-right">
                <input type="date" class="form-input w-48">
                <input type="date" class="form-input w-48">
              </div>
            </li>
            </ul>
          </div>
          <div class="w-full lg:w-1/2">
            <h2 class="leading-7 font-medium text-base text-black">Horario Disponible</h2>
            <p class="leading-6 text-sm text-gray-500">Descubre cuándo tu psicólogo está disponible para citas
            </p>
            <ul role="list" class="leading-6 text-sm border-t border-gray-200	mt-6 divide-y divide-gray-100">
              <li v-for="(day, index) in data.schedule" class="py-3 gap-x-6 justify-between items-center flex w-full">
                <div class="font-medium capitalize w-1/2">{{ day.name }}</div>
                <div class="text-right w-60">
                  <div class="flex justify-end">
                    <Switch v-model="day.available" :class="day.available ? 'bg-perfume-600' : 'bg-gray-200'"
                      class="relative inline-flex h-6 w-11 items-center rounded-full">
                      <span class="sr-only">Enable notifications</span>
                      <span :class="day.available ? 'translate-x-6' : 'translate-x-1'"
                        class="inline-block h-4 w-4 transform rounded-full bg-white transition" />
                    </Switch>
                  </div>

                  <div v-if="day.available" class="mt-2">
                    <div v-if="day.time_ranges.length > 0" v-for="(time, timeIndex) in day.time_ranges"
                      class="w-full flex items-center gap-1.5 mb-1.5">
                      <div class="w-1/2">
                        <label class="text-black text-left font-medium leading-6 text-sm block">Inicio</label>
                        <input type="time" class="form-input " v-model="time.start_time">
                      </div>
                      <div class="w-1/2">
                        <label for="email" class="text-black text-left font-medium leading-6 text-sm block">Fin</label>
                        <input type="time" class="form-input" v-model="time.end_time">
                      </div>
                      <button @click="handleRemoveDayRangeTime(index, timeIndex)"
                        class="h-10 mt-6 p-1.5 border border-red-700 rounded-md text-red-700 hover:text-white hover:bg-red-700">
                        <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                          <path stroke-linecap="round" stroke-linejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                      </button>
                    </div>
                    <button @click="handleAddDayRangeTime(index)"
                      class="mt-2 p-1.5 border border-perfume-700 rounded-md text-perfume-700 hover:text-white hover:bg-perfume-700">
                      <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </button>
                  </div>
                  <div v-else>
                    <p class="text-gray-500">No disponible</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    <pre>
        {{ data }}
      </pre>
  </section>
</template>
  
<script lang="ts" setup>
import { Switch, Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue';
import type { ProfessionalConfig } from '@/interfaces/Psycho/Schedule';

definePageMeta({
  layout: 'app',
  middleware: ['auth', 'psycho'],
});

useHead({
  title: 'Configurar Disponibilidad - Physco'
});

const timeIntervalsOptions = [
  { id: '1_hour', name: '1 hora' },
  { id: '30_minutes', name: '30 minutos' },
]

const data = ref<ProfessionalConfig>({
  session_fee: 0,
  time_intervals: '1_hour',
  time_between_appointments: 0,
  automatic_confirmation: false,
  confirmation_advance_notice: 0,
  max_daily_appointments: 0,
  unavailable_days: [],
  schedule: {
    monday: {
      name: 'lunes',
      available: false,
      time_ranges: []
    },
    tuesday: {
      name: 'martes',
      available: false,
      time_ranges: []
    },
    wednesday: {
      name: 'miércoles',
      available: false,
      time_ranges: []
    },
    thursday: {
      name: 'jueves',
      available: false,
      time_ranges: []
    },
    friday: {
      name: 'viernes',
      available: false,
      time_ranges: []
    },
    saturday: {
      name: 'sábado',
      available: false,
      time_ranges: []
    },
    sunday: {
      name: 'domingo',
      available: false,
      time_ranges: []
    }
  }
});

const handleChangeTimeIntervales = ((time: string) => {
  data.value.time_intervals = time;
})

const handleAddDayRangeTime = ((day: string) => {
  type ObjectKey = keyof typeof data.value.schedule;
  const key = day as ObjectKey;
  if (data.value.schedule[key].time_ranges.length < 3) {
    data.value.schedule[key].time_ranges.push({ 'start_time': '', 'end_time': '' });
  }
});

const handleRemoveDayRangeTime = ((day: string, time: number) => {
  type ObjectKey = keyof typeof data.value.schedule;
  const key = day as ObjectKey;
  data.value.schedule[key].time_ranges.splice(time, 1);
})
</script>
  
<style></style>