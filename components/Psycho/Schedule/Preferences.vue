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
        <div class="font-medium">Tiempo entre sesión</div>
        <input v-model="data.time_between_appointments" type="number" step="1" class="form-input w-48" min="0" max="60"
          placeholder="en minutos">
      </li>
      <li class="py-3 gap-x-6 justify-between items-center flex">
        <div class="font-medium">Anticipación para agendar</div>
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
  })
</script>

<style></style>