<script>
	export let data;
  let id = data.slug;
	import { onMount } from 'svelte';
  import { getPost } from './getPost'

  console.log("ID: ", id)
  let post;
  onMount(async () => {
    post = await getPost(id);
    console.log("Post: " ,post);
  });
</script>

<main>
  {#if post}
		<h1>{post.naziv}</h1>
    <p>{post.opis}</p>
		<p>{post.author}</p>
    <p>{post.date}</p>
	{:else}
		<p>Loading...</p>
	{/if}
	
</main>
