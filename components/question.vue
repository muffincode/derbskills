<template>
  <div class="card bg-slate-700 shadow-xl w-[90vw] max-w-[500px]">
    <!--     <figure>
      <img
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        alt="Shoes" />
    </figure> -->
    <div class="card-body">
      <h2 v-if="title" class="card-title">{{ title }}</h2>
      <p>{{ question.label }}</p>

      <div v-if="!question.possible_a" class="card-actions justify-end">
        <button
          class="btn btn-secondary"
          @click="compute('non')"
          :disabled="state != ''"
          :class="{ 'btn-outline': myAnswer === 'non' }"
        >
          Non
        </button>
        <button
          class="btn btn-primary"
          @click="compute('oui')"
          :disabled="state != ''"
          :class="{ 'btn-outline': myAnswer === 'oui' }"
        >
          Oui
        </button>
      </div>

      <div v-else class="flex flex-row gap-1 flex-wrap">
        <button
            v-for="a in possibleAnswers"
          class="btn"
          @click="compute(a)"
          :disabled="state != ''"
          :class="{ 'btn-outline': myAnswer === a }"
        >
          {{ a }}
        </button>
      </div>

      <details v-if="!state">
        <summary>💡 Indice</summary>
        {{ question.hint }}
      </details>
      <template v-else>
        <div
          v-if="state === 'success'"
          class="bg-green-600 text-white rounded p-2 mt-5"
        >
          <p>🥳 Bien joué</p>
        </div>
        <div
          v-if="state === 'failure'"
          class="bg-red-600 text-white rounded p-2 mt-5"
        >
          <p>😖 Eh, c'est pas ça...</p>
        </div>
        <p class="italic">{{ question.explanation }}</p>
        <button class="btn btn-outline btn-info" @click="next">
          Question suivante
        </button>
      </template>
    </div>
  </div>
</template>

<script setup>
const state = ref("");
const myAnswer = ref("");

const props = defineProps({
  question: { type: Object, required: true },
});

const possibleAnswers = computed(() => [props.question.possible_a, props.question.possible_b, props.question.possible_c, props.question.possible_d])

const emit = defineEmits(["success", "failure"]);

const compute = (answer) => {
  myAnswer.value = answer;
  if (answer.toLowerCase() === props.question.answer.toLowerCase()) {
    state.value = "success";
    emit("success");
  } else {
    state.value = "failure";
    emit("failure");
  }
};

const next = () => {
  state.value = "";
  emit("next");
};
</script>
