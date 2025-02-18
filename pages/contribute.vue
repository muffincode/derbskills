<template>
    <section class="p-6">
        <h1 class="mb-4">Contribuer</h1>
        <p class="mb-3">Si vous souhaitez <b>ajouter vos propres questions</b>, deux options s'offrent à vous :</p>
        <ul class="list-disc ms-3">
            <li>Créer un pack de questions complet. Que vous pouvez nommer et vous attribuer.</li>
            <li>Ajouter une question, ponctuellement.</li>
        </ul>
        <br>
        <p class="mb-3">Et en fonction de votre confort avec la technologie, vous avez le choix entre <b>deux méthodes</b> :</p>
        <ul class="list-disc ms-3">
            <li>Passer par Github pour envoyer vos questions</li>
            <li>Passer par le formulaire simplifié</li>
        </ul>

        <main class="grid grid-cols-2 mt-6">
            <div>
                <h2>Méthode simple</h2>
                <p></p>
            </div>
            <div>
                <h2>Via Github</h2>

            </div>
        </main>



    </section>
</template>
<script setup>
const { data: packs } = await useAsyncData('packs', () => queryCollection('packs').all())

</script>