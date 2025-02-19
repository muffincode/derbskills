<template>
    <section class="flex flex-col gap-8 p-6">
        <header class="flex flex-row justify-between">
            <h1 class="flex flex-row gap-2">
                <img src="assets/logo.webp" alt="Logo de derbskills" width="28px">
                derbskills
            </h1>
            <div class="flex gap-3">
                <NuxtLink to="/contribute">
                    <DocumentPlusIcon class="size-6 inline cursor-pointer text-black" />
                </NuxtLink>
                <!-- <NuxtLink to="/user">
                    <UserCircleIcon class="size-6 inline cursor-pointer text-black" />
                </NuxtLink> -->
            </div>
        </header>
        <hr>
        <main class="grid gap-6 md:w-2/3 md:mx-auto">
            <section class="bg-[#92B4F4] p-6 rounded text-white grid gap-3">
                <p>
                    Bienvenue sur <b>derbskills</b>, le site pour réviser les Minimum Skills nécessaire pour jouer au roller derby.</p>
                <p class="text-sm">Le site propose actuellement  <NuxtLink to="/questions" class="underline"><b>{{ nbQ }}</b> questions</NuxtLink>. Retrouvez les quiz ci-dessous!
                </p>
            </section>

            <section>
                <h2 class="mb-4">Les derbquiz</h2>
                <div class="grid grid-cols-2 gap-3 md:grid-cols-3">
                    <NuxtLink to="/quiz?n=15" class="bg-cute text-white p-3 rounded flex flex-col justify-between gap-6">
                        <h3 class="grid gap-2">
                            <span class="text-3xl">🎲</span>
                            <span>Quiz aléatoire de 15 questions</span>
                        </h3>
                        <button class="btn">Commencer</button>
                    </NuxtLink>
                    <NuxtLink to="/quiz?n=30" class="bg-cute text-white p-3 rounded flex flex-col justify-between gap-6">
                        <h3 class="grid gap-2">
                            <span class="text-3xl">🎲</span>
                            <span>Quiz aléatoire de 30 questions</span>
                        </h3>
                        <button class="btn">Commencer</button>
                    </NuxtLink>
                    <NuxtLink to="/quiz?type=yesNo" class="bg-cute text-white p-3 rounded flex flex-col justify-between gap-6">
                        <h3 class="grid gap-2">
                            <span class="text-3xl">🪙</span>
                            <span>Quiz de Oui-Non</span>
                        </h3>
                        <button class="btn">Commencer</button>
                    </NuxtLink>
                    <NuxtLink to="/quiz?type=multipleChoice" class="bg-cute text-white p-3 rounded flex flex-col justify-between gap-6">
                        <h3 class="grid gap-2">
                            <span class="text-3xl">🍀</span>
                            <span>Questions à choix multiple</span>
                        </h3>
                        <button class="btn">Commencer</button>
                    </NuxtLink>
                    <NuxtLink to="/quiz?difficulty=1" class="bg-cute text-white p-3 rounded flex flex-col justify-between gap-6">
                        <h3 class="grid gap-2">
                            <span class="text-3xl">☀️</span>
                            <span>Questions faciles</span>
                        </h3>
                        <button class="btn">Commencer</button>
                    </NuxtLink>
                    <NuxtLink to="/quiz?difficulty=2" class="bg-cute text-white p-3 rounded flex flex-col justify-between gap-6">
                        <h3 class="grid gap-2">
                            <span class="text-3xl">⛅️</span>
                            <span>Questions moyennes</span>
                        </h3>
                        <button class="btn">Commencer</button>
                    </NuxtLink>
                    <NuxtLink to="/quiz?difficulty=3" class="bg-cute text-white p-3 rounded flex flex-col justify-between gap-6">
                        <h3 class="grid gap-2">
                            <span class="text-3xl">⛈</span>
                            <span>Questions difficiles</span>
                        </h3>
                        <button class="btn">Commencer</button>
                    </NuxtLink>
                </div>
            </section>

            <section v-if="tags.length > 0">
                <h2 class="mb-4">Par thématique</h2>
                <div class="grid grid-cols-2 gap-3 md:grid-cols-3">
                    <NuxtLink v-for="tag in tags" :key="tag.id" :to="`/quiz?tags=${tag.key}&n=10`" class="bg-cute text-white p-3 rounded flex flex-col justify-between gap-6">
                        <h3 class="grid gap-2">
                            <span class="text-3xl">{{ tag.icon }}</span>
                            <span>Réviser les {{ tag.fr }}</span>
                        </h3>
                        <button class="btn">Commencer</button>
                    </NuxtLink>
                </div>
            </section>

            <h2 class="">Personnalisé</h2>
            <section class="bg-[#92B4F4] p-6 rounded text-white grid gap-3">
                <p>Créez un quiz avec des filtres personnalisés (nombre de questions, thématiques, etc)</p>
                <NuxtLink><button class="btn">Créer un quiz</button></NuxtLink>
            </section>

            <section v-if="packs.length > 0">
                <h2 class="mb-4">Les packs</h2>
                <div class="grid grid-cols-2 gap-3 md:grid-cols-3">
                    <NuxtLink v-for="pack in packs" :key="pack.id" :to="`/quiz?pack=${pack.id.split('/')[2]}&n=10`" class="bg-cute text-white p-3 rounded flex flex-col justify-between gap-6">
                        <h3 class="grid gap-2">
                            <span class="text-xl">{{ pack.title }}</span>
                            <span class="text-sm">{{ pack.description }}</span>
                        </h3>
                        <button class="btn">Commencer</button>
                    </NuxtLink>

                </div>
            </section>
        </main>

        <footer class="text-xs text-gray-400">
            🐏 créé par Camille F.
        </footer>
    </section>
</template>

<script setup>
import { DocumentPlusIcon, UserCircleIcon } from '@heroicons/vue/24/outline'

useHead({
  script: [
    { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
  ],
});

const { data: tags } = await useAsyncData('tags', () => queryCollection('tags').all())
const { data: questions } = await useAsyncData('questions', () => queryCollection('questions').all())
const { data: packs } = await useAsyncData('packs', () => queryCollection('packs').all())

const nbQ = computed(() => questions.value?.length)
</script>