<script>
	import { onMount } from 'svelte';
	import Post from '$lib/components/posts/Post.svelte';

	export let posts = [];

	onMount(async () => {
		const response = await fetch('http://localhost:3001/posts', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await response.json();
		posts = data.posts;
	});
</script>

<main>
	{#if posts.length > 0}
		<div class="flex flex-col items-center">
			{#each posts as post (post._id)}
				<Post {...post} />
			{/each}
		</div>
	{:else}
    <div>
		<h1 class="text-black ">There are no posts</h1>
    </div>
	{/if}
</main>
