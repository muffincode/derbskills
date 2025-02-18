<template>
    <section class="p-6">
        <h1 class="mb-4">Préférences</h1>
        <hr>
        <h2>Questions</h2>
        <p>Masquer les questions auxquelles j'ai déjà répondu juste.</p>
        
        <h2>Packs de questions</h2>
        <p>Par défaut, toutes les questions peuvent être utilisées dans l'application.
            Vous pouvez choisir d'ignorer certains packs</p>
        <main class="grid gap-3">
            <article v-for="pack in packs" :key="pack.id" class="bg-cute text-white p-3 rounded">
                {{ pack.title }}
            </article>
        </main>
    </section>
</template>
<script setup>
const { data: packs } = await useAsyncData('packs', () => queryCollection('packs').all())

</script>