<script lang="ts">
	// @ts-nocheck
	import { blur } from 'svelte/transition';

	export let _id: string;
	export let naziv: string;
	export let opis: string;
	export let date: string;
	export let author: string;

</script>

<div class="flex justify-center items-center w-screen h-screen gradient bg-gradient-to-r from-blue-400 via-purple-600 to-pink-600 animate-gradient">
	<div class="flex flex-col justify-start items-center w-3/4 h-4/5 bg-white rounded shadow-lg">
			<h1 class="text-center text-5xl font-serif font-extrabold text-purple-500 mt-10">
				<span class="text-transparent bg-clip-text bg-gradient-to-r to-purple-700 from-purple-400"
					>{naziv}</span
				>
			</h1>
            <div class="text-lg mt-10 overflow-auto">
                <p class="m-3">{opis}</p>
            </div>
            <div class="mt-auto mb-5 items-center justify-center">
                <p class="text-gray-600 mr-4 font-semibold">{author}</p>
                <p class="text-gray-400">{date}</p>
            </div>
	</div>
</div>
