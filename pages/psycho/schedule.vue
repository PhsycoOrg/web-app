<template>
  <section class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <div class="col-span-2">
      <h2 class="text-xl font-semibold">Configurar Disponibilidad</h2>
      <div class="mt-4 grid grid-cols-1 gap-6">
        <div class="bg-white border border-slate-200 p-4 rounded-lg">
          <div class="p-3 pt-3 lg:px-9 lg:pt-9 flex-auto min-h-[70px] pb-0 bg-transparent">
            <div class="block lg:flex gap-6">
              <div class="w-full lg:w-1/2">
                <Preferences :data="data" />
              </div>
              <div class="w-full lg:w-1/2">
                <Schedule :data="data" />
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
  import type { ProfessionalConfig } from '@/interfaces/Psycho/Schedule';
  import Preferences from '@/components/Psycho/Schedule/Preferences.vue';
  import Schedule from '@/components/Psycho/Schedule/Schedule.vue';

  definePageMeta({
    layout: 'app',
    middleware: ['auth', 'psycho'],
  });

  useHead({
    title: 'Configurar Disponibilidad - Physco'
  });

  const data = ref<ProfessionalConfig>({
    session_fee: 0,
    time_intervals: '1_hour',
    time_between_appointments: 0,
    automatic_confirmation: false,
    confirmation_advance_notice: 0,
    max_daily_appointments: {
      active: true,
      quantity: 10
    },
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
</script>

<style></style>