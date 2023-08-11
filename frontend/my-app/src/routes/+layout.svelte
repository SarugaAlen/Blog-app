<script>
	import '../app.postcss';

	import { onMount } from "svelte";

    let token;
	let username;

    onMount(() => {
        token = localStorage.getItem('token');
		username = localStorage.getItem('username');
    });
</script>

<body class="flex flex-col min-h-screen">
	<header>
		<nav class="flex items-center justify-between flex-wrap bg-white p-6">
			<div class="flex items-center flex-shrink-0 text-purple-700 mr-6">
				<h2 class="font-semibold text-xl tracking-tight"><a href="/">Domov</a></h2>
			</div>
			<div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto font-semibold">
				<div class="text-m lg:flex-grow">
					<h2 class="block mt-4 lg:inline-block lg:mt-0 text-purple-500 hover:text-purple-800 mr-4">
						<a href="/posts">Objave</a>
					</h2>
					<h2 class="block mt-4 lg:inline-block lg:mt-0 text-purple-500 hover:text-purple-800 mr-4">
						<a href="/new">Nova objava</a>
					</h2>
				</div>
				{#if token}
				<p>{username}</p>			
				{:else}
				<h2
					class="block mt-4 ml-auto lg:inline-block lg:mt-0 text-purple-500 hover:text-purple-800 mr-8"
				>
					<a
						href="/login"
						class="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
						>Prijava</a
					>
				</h2>
				{/if}
			</div>
		</nav>
	</header>

	<main>
		<slot />
	</main>

	<footer
		class="bg-white rounded-lg shadow dark:bg-gray-800 mt-auto flex items-center justify-center h-11 w-full"
	>
		<span class="text-sm text-gray-500 sm:text-center dark:text-gray-400 font-bold">© 2023</span>
	</footer>
</body>
