<template>
  <section class="h-[100vh] grid grid-rows-[1fr_auto]">
    <template v-if="qn < n">
      <main class="bg-cute p-6 relative">
        <header class="flex justify-between">
          <h2 class="text-white">{{ qn + 1 }} / {{ n }}</h2>
          <h2 class="text-white font-thin">
            <NuxtLink to="/">quitter le quiz</NuxtLink>
          </h2>
        </header>

        <p class="text-3xl text-black mt-10 text-balance">{{ question.label }}</p>
        <span v-if="question.aiGenerated" class="text-white font-bold text-xs">
          <SparklesIcon class="size-3 inline" />
          Générée par IA<span v-if="question.reviewer">, revue par {{ question.reviewer }}</span>
        </span>
        <details v-if="!state && question.hint" class="absolute bottom-6">
          <summary class="text-white font-bold text-xs">
            <LightBulbIcon class="size-3 inline" /> <u class="cursor-pointer">Indice</u>
          </summary>
          <p class="text-white">{{ question.hint }}</p>
        </details>
      </main>
      <footer class="bg-white p-6 grid gap-3 h-max md:w-1/2 md:mx-auto">
        <template v-if="state != null">
          <div v-if="state === true" class="bg-green-600 text-white rounded p-2 mt-5">
            <p>🥳  Bien joué</p>
          </div>
          <div v-if="state === false" class="bg-red-600 text-white rounded p-2 mt-5">
            <p>😖  Eh, c'est pas ça...</p>
          </div>
          <p class="italic text-gray-600">{{ question.explanation }}</p>
          <button class="btn btn-outline btn-info" @click="next">
            <span v-if="qn < n - 1">Question suivante</span>
            <span v-else>Terminer</span>
          </button>
        </template>
        <template v-else>
          <button v-for="a in question.possibleAnswers" class="btn text-white" @click="compute(a)"
            :class="{ 'btn-outline': myAnswer === a }">
            {{ cap(a) }}
          </button>
        </template>
      </footer>
    </template>
    <template v-else>
      <main class="bg-[#92B4F4] p-6 relative">
        <h2 class="text-white">{{ n }} / {{ n }}</h2>

        <p class="text-3xl text-black mt-10 text-balance">Terminé!</p>
        <p class="text-9xl text-white">{{ score }}<small class="text-2xl">/ {{ n }}</small></p>

        <div class="grid gap-3 mt-6">
          <article v-for="(q, i) in data" :key="q.id" class="bg-white text-black rounded p-3 border border-solid"
            :class="{
              'border-red-600 !bg-red-100': !goodAnswers[i]
            }">
            <p>{{ q.label }}</p>
            <p class="font-bold">{{ q.answer }}</p>
            <p class="text-sm text-gray-500">{{ q.explanation }}</p>
          </article>
        </div>
      </main>
      <footer class="bg-white p-6 grid gap-3 h-max">
        <NuxtLink class="btn btn-outline btn-info" to="/">
          Retour à l'accueil
        </NuxtLink>
      </footer>
    </template>
  </section>
</template>
<script setup>
import { SparklesIcon, LightBulbIcon } from '@heroicons/vue/24/solid'

function cap(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

let n = useRoute().query.n || 15
const tags = useRoute().query.tags
const type = useRoute().query.type
const difficulty = useRoute().query.difficulty

const db = await queryCollection('questions')
  .all()

// TODO: Filtering should happen with Nuxt Content but filter in arrays don't work yet
let data = []
if (tags) {
  data = db.filter(q => q.tags?.includes(tags))
}
if (type) {
  if (type === 'yesNo') {
    data = db.filter(q => q.possibleAnswers.length === 2)
  } else if (type === 'multipleChoice') {
    data = db.filter(q => q.possibleAnswers.length > 2)
  }
}
if (difficulty) {
  data = db.filter(q => q.difficulty === difficulty)
}

data = [...data].sort(() => 0.5 - Math.random()).slice(0, n);

if (data.length < n) n = data.length

const qn = ref(0);
const score = ref(0);

// Questions
const goodAnswers = ref([undefined]);
const state = computed(() => goodAnswers.value[qn.value]);
const myAnswer = ref("");

const question = computed(() => {
  return data[qn.value];
});

const compute = (answer) => {
  myAnswer.value = answer;
  if (answer.toLowerCase() === question.value.answer.toLowerCase()) {
    goodAnswers.value[qn.value] = true;
    score.value++
  } else {
    goodAnswers.value[qn.value] = false;
  }
};
const next = () => {
  qn.value++
  goodAnswers.value.push(undefined)
  myAnswer.value = ""
};
</script>
