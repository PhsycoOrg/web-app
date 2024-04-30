<template>
  <div>
    <h2 class="leading-7 font-medium text-base text-black">Horario Disponible</h2>
    <p class="leading-6 text-sm text-gray-500">Configura tu horario disponible</p>
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
                <input type="time" class="form-input" :min="`${formatTime(time.start_time)}`" v-model="time.end_time">
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
</template>

<script lang="ts" setup>
  import { Switch } from '@headlessui/vue';

  const props = defineProps({
    data: {
      type: Object,
      required: true
    }
  });

  const { data } = props;
  const handleAddDayRangeTime = ((day: number) => {
    type ObjectKey = keyof typeof data.schedule;
    const key = day as ObjectKey;
    if (data.schedule[key].time_ranges.length < 3) {
      data.schedule[key].time_ranges.push({ 'start_time': '', 'end_time': '' });
    }
  });

  const handleRemoveDayRangeTime = ((day: number, time: number) => {
    type ObjectKey = keyof typeof data.schedule;
    const key = day as ObjectKey;
    data.schedule[key].time_ranges.splice(time, 1);
  });

  const formatTime = ((time: string) => {
    if (!time || typeof time !== 'string' || !time.includes(':')) {
        return '';
      }

      let [hours, minutes] = time.split(':');

      hours = hours.padStart(2, '0');
      minutes = minutes.padStart(2, '0');

      // Devolver la hora formateada
      return `${hours}:${minutes}`;
    });
</script>

<style></style>