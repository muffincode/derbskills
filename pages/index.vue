<template>
    <section class="flex flex-col gap-8 p-6">
        <header>
            <h1>🛼 Bienvenue sur <u>derbskills</u></h1>
        </header>
        <hr>
        <main class="grid gap-6">

            <section>
                <h2 class="mb-4">Les derbquiz</h2>
                <div class="grid grid-cols-2 grid-rows-[200px] gap-3">
                    <article class="bg-cute text-white p-3 rounded flex flex-col justify-between">
                        <h3 class="grid gap-2">
                            <span class="text-3xl">🎲</span>
                            <span>Quiz aléatoire de 15 questions</span>
                        </h3>
                        <button class="btn">Commencer</button>
                    </article>
                    <article class="bg-cute text-white p-3 rounded flex flex-col justify-between">
                        <h3 class="grid gap-2">
                            <span class="text-3xl">🎲</span>
                            <span>Quiz aléatoire de 30 questions</span>
                        </h3>
                        <button class="btn">Commencer</button>
                    </article>
                </div>
            </section>

            <section>
                <h2 class="mb-4">Les questions</h2>
                <div class="grid grid-cols-2 gap-3">
                    <article class="bg-gray-200 text-white p-3 rounded flex flex-col justify-between">
                        <h3 class="text-gray-600 grid gap-2">
                            <span class="text-3xl">⏳</span>
                            <i>Pour bientôt...</i>
                        </h3>
                    </article>
                </div>
            </section>
        </main>

        <footer class="fixed bottom-3 left-3 text-xs text-gray-400">
            💖 créé par Camille F.
        </footer>
    </section>

</template>