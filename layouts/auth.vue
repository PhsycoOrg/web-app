<template>
  <div class="min-h-screen flex">
    <div class="w-1/2 bg-slate-50 p-20 flex-col justify-center hidden md:flex">
      <svg class="icon icon-tabler icon-tabler-quote h-12 w-12 text-gray-400 mb-6"
        width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" 
        stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" />
        <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" />
      </svg>
      <blockquote class="text-3xl font-medium italic text-gray-600 mb-5">
        “{{ writingEffect }}”
      </blockquote>
      <p class="font-medium text-perfume-700 mb-1">{{ currentQuote.author }}</p>
    </div>
    <div class="w-full md:w-1/2 bg-white p-5 md:p-16 flex flex-col justify-center">
      <div class="w-full md:max-w-md mx-auto">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import '@fontsource/poppins/300.css';
  import '@fontsource/poppins/400.css';
  import '@fontsource/poppins/500.css';
  import '@fontsource/poppins/600.css';
  import type { Quote } from '~/interfaces/QuoteInterfaces';

  const quotes: Quote[] = [
    {
      quote: 'Confiar en ti mismo no garantiza el éxito, pero no hacerlo garantiza el fracaso.',
      author: 'Albert Bandura'
    },
    {
      quote: 'El gran descubrimiento de mi generación es que los seres humanos pueden alterar sus vidas al alterar sus actitudes mentales.',
      author: 'William James'
    },
    {
      quote: 'La mayoría de la gente no quiere la libertad, porque la libertad implica responsabilidad, y la mayoría de las personas tienen miedo de la responsabilidad.',
      author: 'Sigmund Freud'
    },
    {
      quote: 'Vivir es nacer a cada instante.',
      author: 'Erich Fromm'
    },
    {
      quote: 'Supongo que es tentador tratar todo como si fuera un clavo, si la única herramienta que tienes es un martillo.',
      author: 'Abraham Maslow'
    }
  ];

  const writingIntervalId = ref<any>(0);
  const changeQuoteIntervalId = ref<any>(0);
  const writingEffect = ref<string>('');
  const currentQuote = ref<Quote>(quotes[0]);

  const getRandomQuote = (() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    currentQuote.value = quotes[randomIndex];
    startWritingEffect();
  });

  const startWritingEffect = () => {
    let index = 0;
    const fullText = currentQuote.value.quote;

    writingIntervalId.value = setInterval(() => {
      writingEffect.value = fullText.substring(0, index);
      index++;

      if (index > fullText.length) {
        clearInterval(writingIntervalId.value);
      }
    }, 70);
  };

  onMounted(() => {
    getRandomQuote();
    changeQuoteIntervalId.value = setInterval(() => getRandomQuote(), 30000);
  });

  onBeforeUnmount(() => {
    clearInterval(changeQuoteIntervalId.value);
    clearInterval(writingIntervalId.value);
  });
</script>

<style></style>