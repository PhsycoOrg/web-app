<template>
  <div>
    <h2 class="leading-7 font-medium text-base text-black">Preferencias</h2>
    <p class="leading-6 text-sm text-gray-500">Configura las preferencias y ajustes</p>
    <ul role="list" class="leading-6 text-sm border-t border-gray-200	mt-6 divide-y divide-gray-100">
      <li class="py-3 gap-x-6 justify-between items-center flex">
        <div class="font-medium">Duración de Sesiones</div>
        <div class="text-perfume-700 text-right">
          <Listbox as="div" class="w-48" :modelValue="data.time_intervals" @update:modelValue="value => handleChangeTimeIntervales(value)">
            <div class="relative">
              <ListboxButton class="relative w-full h-10 cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6">
                <span>
                  {{ data.time_intervals }}
                </span>
                <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                  </svg>
                </span>
              </ListboxButton>
              <ListboxOptions class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
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
                    <div :class="[selected ? 'font-semibold' : 'font-normal']" class="flex justify-between items-center ml-3 truncate">
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
        <div class="font-medium">Tiempo entre sesión <span class="text-gray-500 text-xs">(en minutos)</span></div>
        <input v-model="data.time_between_appointments" type="number" step="1" class="form-input w-48" min="0" max="60"
          placeholder="en minutos">
      </li>
      <li class="py-3 gap-x-6 justify-between items-center flex">
        <div class="font-medium">Anticipación para agendar <span class="text-gray-500 text-xs">(en horas)</span></div>
        <input v-model="data.confirmation_advance_notice" type="number" step="1" class="form-input w-48" min="1" max="60"
          placeholder="en horas">
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
        <div class="flex flex-col items-end">
          <div class="mb-1">
            <Switch v-model="data.max_daily_appointments.active"
              :class="data.max_daily_appointments.active ? 'bg-perfume-600' : 'bg-gray-200'"
              class="relative inline-flex h-6 w-11 items-center rounded-full">
              <span class="sr-only">Enable notifications</span>
              <span :class="data.max_daily_appointments.active ? 'translate-x-6' : 'translate-x-1'"
                class="inline-block h-4 w-4 transform rounded-full bg-white transition" />
            </Switch>
          </div>

          <input v-if="data.max_daily_appointments.active" v-model="data.max_daily_appointments.quantity" type="number" step="1" 
            class="form-input w-48" min="1">
          <span v-else>Sin límite</span>
        </div>
      </li>
      <li class="py-3 gap-x-6 justify-between items-center flex">
        <div class="font-medium">Diás no disponibles</div>
        <div class="flex flex-col items-end">
          <div v-if="data.unavailable_days.length > 0">
            <div v-for="(date, index) in data.unavailable_days" :key="index" class="w-full flex items-center gap-1.5 mb-1.5">
              <div class="w-full">
                <input type="date" class="form-input" v-model="data.unavailable_days[index]" :min="getTodayDate()">
              </div>
              <button @click="handleRemoveUnavailableDay(index)" class="h-10 mt-1 p-1.5 border border-red-700 rounded-md text-red-700 hover:text-white hover:bg-red-700">
                <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
              </button>
            </div>
          </div>
          <button @click="handleAddUnavailableDay()"
            class="mt-2 p-1.5 border border-perfume-700 rounded-md text-perfume-700 hover:text-white hover:bg-perfume-700">
            <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
  import { Switch, Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue';
  const props = defineProps({
    data: {
      type: Object,
      required: true
    }
  })

  const { data } = props;
  const timeIntervalsOptions = [
    { id: '1_hour', name: '1 hora' },
    { id: '30_minutes', name: '30 minutos' },
  ]
  
  const handleChangeTimeIntervales = ((time: string) => {
    data.time_intervals = time;
  });

  const handleAddUnavailableDay = (() => {
    data.unavailable_days.push(getTodayDate());
  });
  const handleRemoveUnavailableDay = ((index: number) => {
    data.unavailable_days.splice(index, 1);
  })

  const getTodayDate = (() => {
      const today = new Date();
      const year = today.getFullYear();
      let month: string | number = today.getMonth() + 1;
      let day: string | number = today.getDate();

      month = month < 10 ? `0${month}` : month;
      day = day < 10 ? `0${day}` : day;

      return `${year}-${month}-${day}`;
    });
</script>

<style scoped>
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>