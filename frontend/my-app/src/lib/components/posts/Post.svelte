<script lang='ts'>
// @ts-nocheck
    import { blur } from 'svelte/transition';

    export let _id: string;
    export let naziv: string;
    export let opis: string;
    export let date: string;

</script>

<div transition:blur class="items-center overflow-hidden rounded-xl shadow-lg m-5 w-4/5">
    <div class="flex flex-row">
        <h2 class="text-2xl w-64 text-purple-600 font-semibold p-4 text-left">{naziv}</h2>
        <p class="text-m w-32 font-semibold ml-auto p-4 text-right">{date}</p>
    </div>
    <div class="flex flex-col items-center justify-center mb-6">
        <p class="text-m text-center">{opis}</p>
    </div>
    <div class="flex flex-col items-center">
        <button class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-4 ml-2">
            <a href="/posts/{_id}">Preberi več</a>
        </button>
    </div>
</div>