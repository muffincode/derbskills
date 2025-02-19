<template>
    <main class="w-2/3 mx-auto p-6">
        <h1>Créer votre propre quiz</h1>
        <hr>
        <form @submit.prevent="onSubmit" class="grid gap-3 max-w-2/3">
    
            <label class="form-control w-full">
                <div class="label">
                    <span class="label-text">Nombre de questions</span>
                </div>
                <input v-model="n" type="number" placeholder="Nombre de questions"
                    class="input input-bordered w-full" />
            </label>
    
            <label class="form-control w-full">
                <div class="label">
                    <span class="label-text">Type de question</span>
                </div>
                <select class="select select-bordered w-full" name="type" id="type" v-model="type">
                    <option disabled selected>Tous</option>
                    <option value="yesNo">Oui/Non</option>
                    <option value="multipleChoice">Choix multiple</option>
                </select>
            </label>
    
            <label class="form-control w-full">
                <div class="label">
                    <span class="label-text">Difficulté</span>
                </div>
                <select class="select select-bordered w-full" name="type" id="type" v-model="difficulty">
                    <option disabled selected>Tous</option>
                    <option value="1">Facile</option>
                    <option value="2">Moyen</option>
                    <option value="3">Difficile</option>
                </select>
            </label>
    
            <label class="form-control w-full">
                <div class="label">
                    <span class="label-text">Pack</span>
                </div>
                <select class="select select-bordered w-full" name="type" id="type" v-model="pack">
                    <option disabled selected>Tous</option>
                    <option :value="pack.id.split('/')[2]" v-for="pack in packs">{{ pack.title }}</option>
                </select>
            </label>
    
            <label class="form-control w-full">
                <div class="label">
                    <span class="label-text">Tags</span>
                </div>
                <select class="select select-bordered w-full" name="type" id="type" v-model="tags">
                    <option disabled selected>Tous</option>
                    <option :value="t.id.split('/')[2]" v-for="t in dbTags">{{ t.fr }}</option>
                </select>
            </label>
    
            <button type="submit" class="btn btn-primary">Commencer le quiz</button>
        </form>
    </main>

</template>
<script setup>
const { data: packs } = await useAsyncData('packs', () => queryCollection('packs').all())
const { data: dbTags } = await useAsyncData('dbTags', () => queryCollection('tags').all())

const tags = ref('')
const difficulty = ref('')
const pack = ref('')
const n = ref(10)

const onSubmit = async () => {
    const params = {
        tags: tags.value,
        type: type.value,
        difficulty: difficulty.value,
        pack: pack.value,
        n: n.value
    }
    console.log(params)
    await navigateTo({ path: '/quiz', query: params })
}
</script>