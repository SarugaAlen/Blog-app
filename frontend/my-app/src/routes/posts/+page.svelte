<script>
    import Post from '$lib/components/Post.svelte';

    const testPosts = [
        {
            _id: 1,
            naziv: 'Test Post 1',
            opis: 'This is the description of Test Post 1.',
            datum: '2023-08-02',
        },
        {
            _id: 2,
            naziv: 'Test Post 2',
            opis: 'This is the description of Test Post 2.',
            datum: '2023-08-03',
        },
        // Add more test posts as needed
    ];

</script>


    <div class="flex flex-col items-center">
        {#each testPosts as post (post._id)}
            <Post {...post} />
        {/each} 
    </div>