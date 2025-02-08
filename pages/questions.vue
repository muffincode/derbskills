<template>
    <section class="p-6">
        <h1 class="mb-4">Questions</h1>
        <main class="grid gap-3">
            <article v-for="q in db" class="">
                <header class="bg-cute text-white p-3 rounded-t">
                    <p class="leading-tight"><SparklesIcon v-if="q.aiGenerated" class="size-3 inline" /> {{ q.label }}</p>
                    <p class="text-right font-bold">{{ q.answer }}</p>
                </header>
                <footer class="bg-[#DDFDFE] text-gray-600 p-3 text-xs rounded-b">
                    <p>Difficulté: {{ q.difficulty }}</p>
                    <p>Tags: {{ q.tags.join(', ') }}</p>
                </footer>
            </article>
        </main>
    </section>
</template>
<script setup>
import { SparklesIcon } from '@heroicons/vue/24/solid'

const db = await queryCollection('questions').order('difficulty', 'ASC').all()
</script>