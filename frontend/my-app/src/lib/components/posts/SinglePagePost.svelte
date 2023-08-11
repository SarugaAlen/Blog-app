<script lang="ts">
	// @ts-nocheck
	import { blur } from 'svelte/transition';
	import Naslov from '$lib/components/headings/naslov.svelte';
	export let _id: string;
	export let naziv: string;
	export let opis: string;
	export let date: string;
	export let avtor: string;

</script>

<div class="flex justify-center items-center w-screen h-screen gradient bg-gradient-to-r from-blue-400 via-purple-600 to-pink-600 animate-gradient">
	<div class="flex flex-col justify-start items-center w-3/4 h-4/5 bg-white rounded shadow-lg">
			<Naslov data={naziv} />
            <div class="text-lg mt-10 overflow-auto">
                <p class="m-3">{opis}</p>
            </div>
            <div class="mt-auto mb-5 items-center justify-center">
                <p class="text-gray-600 mr-4 font-semibold">{avtor}</p>
                <p class="text-gray-400">{date}</p>
            </div>
	</div>
</div>
