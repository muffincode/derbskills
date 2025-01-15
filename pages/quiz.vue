<template>
  <section class="h-[100vh] max-w-full flex flex-col gap-10 justify-center items-center mx-8">
    <div class="flex flex-col gap-1 self-start">
      <h1 class="text-lg text-primary">Quiz de 15 questions</h1>
      <small>score: {{ score }}/15</small>
    </div>

    <div class="indicator">
      <span class="indicator-item indicator-center badge badge-secondary md:indicator-end">Question {{ qn }}/15</span>
      <Question
        v-if="data.length"
        :question="data[qn]"
        @next="qn++"
        @success="score++"
      />
    </div>

    <p class="italic text-sm">Toutes les questions ont été générées par I.A. et ne sont donc peut-être pas fiables à 100%</p>
  </section>
</template>
<script setup>
const yesNo = await queryContent("yesno").findOne();
const quatro = await queryContent("quatro").findOne();

const db = quatro.body.concat(yesNo.body);

const data = [...db].sort(() => 0.5 - Math.random()).slice(0, 15);

const qn = ref(0);
const score = ref(0);
</script>
