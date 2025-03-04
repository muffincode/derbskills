<template>
    <section class="p-6">
        <h1 class="mb-4">Contribuer</h1>
        <p class="mb-3">Si vous souhaitez <b>ajouter vos propres questions</b>, plusieurs options s'offrent à vous :</p>

        <main class="grid md:grid-cols-[2fr_1fr] mt-6 grid-cols-1">
            <div class="p-3">
                <h2 class="mb-4">Méthode simple</h2>
                <p>Créez un compte <a href="/admin" class="underline">ici</a> et dans la collection "Questions" créez et
                    publiez un nouveau document.</p>
                    <br>
                <p>La liste des champs à remplir est assez simple :</p>
                <table class="table-auto w-full">
                    <thead>
                        <tr>
                            <th class="px-4 py-2">Champ</th>
                            <th class="px-4 py-2">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border px-4 py-2"><b>label</b></td>
                            <td class="border px-4 py-2">La question, idéalement écrite en français et en inclusif.</td>
                        </tr>
                        <tr>
                            <td class="border px-4 py-2"><b>hint</b></td>
                            <td class="border px-4 py-2">Un indice</td>
                        </tr>
                        <tr>
                            <td class="border px-4 py-2"><b>possibleAnswers</b></td>
                            <td class="border px-4 py-2">une liste de réponses possibles, idéalement 2 (oui/non) ou 4.</td>
                        </tr>
                        <tr>
                            <td class="border px-4 py-2"><b>answer</b></td>
                            <td class="border px-4 py-2">La bonne réponse (copiée de la liste au dessus)</td>
                        </tr>
                        <tr>
                            <td class="border px-4 py-2"><b>explanation</b></td>
                            <td class="border px-4 py-2">Une explication qui apparaît après avoir répondu</td>
                        </tr>
                        <tr>
                            <td class="border px-4 py-2"><b>tags</b></td>
                            <td class="border px-4 py-2">Les catégories auxquelles votre question appartient</td>
                        </tr>
                        <tr>
                            <td class="border px-4 py-2"><b>difficulty</b></td>
                            <td class="border px-4 py-2">Sur une échelle de 1 à 3</td>
                        </tr>
                        <tr>
                            <td class="border px-4 py-2"><b>author</b></td>
                            <td class="border px-4 py-2">Pour identifier la personne qui a écrit la question. <i>Pensez à créer une entrée dans la collection "Authors" au préalable</i>. (optionnel)</td>
                        </tr>
                        <tr>
                            <td class="border px-4 py-2"><b>aiGenerated</b></td>
                            <td class="border px-4 py-2">Marquer comme une question générée par IA (optionnel)</td>
                        </tr>
                        <tr>
                            <td class="border px-4 py-2"><b>reviewer</b></td>
                            <td class="border px-4 py-2">Utilisé pour indiquer qu'une personne a revu une question générée par IA (optionnel)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="p-3">
                <h2 class="mb-4">Via Github</h2>
                <p>Vous pouvez aussi <a href="https://github.com/derbskills/derbskills" class="underline">contribuer via
                        Github</a>, en créant votre propre pack de questions. Les instructions sont détaillées sur le
                    repo.</p>

                <h2 class="mt-6 mb-4">Par mail</h2>
                <p>Vous pourrez bientôt envoyer un CSV avec vos questions.</p>

            </div>
        </main>



    </section>
</template>
<script setup>
// const { data: packs } = await useAsyncData('packs', () => queryCollection('packs').all())

</script>