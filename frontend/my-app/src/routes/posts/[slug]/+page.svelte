<script>
	export let data;
  import { onMount } from 'svelte';
  import { getPost } from './getPost';

  let id = data.slug;
  let post;
	
  console.log("ID: ", id)

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
