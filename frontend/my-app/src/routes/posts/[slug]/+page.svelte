<script>
	export let data;
  import { onMount } from 'svelte';
  import { getPost } from './getPost';
  import Posts from '$lib/components/posts/SinglePagePost.svelte';
	import SinglePagePost from '$lib/components/posts/SinglePagePost.svelte';

  let id = data.slug;
  let post;
	
  console.log("ID: ", id)

  onMount(async () => {
    post = await getPost(id);
    console.log("Post: " ,post);
  });
</script>

<main>
  <SinglePagePost {...post} />
	
</main>
