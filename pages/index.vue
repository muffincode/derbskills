<template>
    <section class="flex flex-col gap-8 p-6">
        <header>
            <h1 class="flex flex-row gap-2">
                <img src="assets/logo.webp" alt="Logo de derbskills" width="28px">
                derbskills
            </h1>
        </header>
        <hr>
        <main class="grid gap-6 md:w-2/3 md:mx-auto">
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

            <section>
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

            <section>
                <h2 class="mb-4">Les questions</h2>
                <div class="grid grid-cols-2 gap-3 md:grid-cols-3">
                    <NuxtLink to="/questions" class="bg-gray-200 text-white p-3 rounded flex flex-col justify-between gap-6">
                        <h3 class="text-gray-600 grid gap-2">
                            <span class="text-3xl">🙋‍♀️</span>
                            <span>Voir toutes les questions ({{ questions.length }})</span>
                        </h3>
                        <button class="btn">Lire</button>
                    </NuxtLink>
                </div>
            </section>
        </main>

        <footer class="text-xs text-gray-400">
            💖 créé par Camille F.
        </footer>
    </section>
</template>

<script setup>
const { data: tags } = await useAsyncData('tags', () => queryCollection('tags').all())
const { data: questions } = await useAsyncData('questions', () => queryCollection('questions').all())
</script>