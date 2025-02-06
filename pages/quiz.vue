<template>
  <section class="h-[100vh] grid grid-rows-[1fr_auto]">
    <main class="bg-cute p-6 relative">
      <h2 class="text-white">{{ qn }} / {{ n }}</h2>

      <p class="text-3xl text-black mt-10">{{ question.label }}</p>

      <details v-if="!state" class="absolute bottom-6">
        <summary class="text-gray-500">💡 Indice</summary>
        <p class="text-gray-700">{{ question.hint }}</p>
      </details>
    </main>
    <footer class="bg-white p-6 grid gap-3 h-max">
      <template v-if="state">
        <div v-if="state === 'success'" class="bg-green-600 text-white rounded p-2 mt-5">
          <p>🥳  Bien joué</p>
        </div>
        <div v-if="state === 'failure'" class="bg-red-600 text-white rounded p-2 mt-5">
          <p>😖  Eh, c'est pas ça...</p>
        </div>
        <p class="italic text-gray-600">{{ question.explanation }}</p>
        <button class="btn btn-outline btn-info" @click="next">
          Question suivante
        </button>
      </template>
      <template v-else>
        <button v-for="a in question.possibleAnswers" class="btn" @click="compute(a)" :disabled="state != ''"
          :class="{ 'btn-outline': myAnswer === a }">
          {{ cap(a) }}
        </button>
      </template>
    </footer>
  </section>
</template>
<script setup>
function cap(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

const db = await queryCollection('questions').all()

const data = [...db].sort(() => 0.5 - Math.random()).slice(0, 15);

const qn = ref(0);
const score = ref(0);

const n = useRoute().query.n || 15

// Questions
const state = ref("");
const myAnswer = ref("");

const question = computed(() => {
  return data[qn.value];
});

const compute = (answer) => {
  myAnswer.value = answer;
  if (answer.toLowerCase() === question.value.answer.toLowerCase()) {
    state.value = "success";
    score.value++
  } else {
    state.value = "failure";
  }
};
const next = () => {
  qn.value++;
  state.value = "";
  myAnswer.value = "";
};
</script>
