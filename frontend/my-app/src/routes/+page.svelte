<script>
	const currentDate = new Date();
	$: currentHour = currentDate.getHours();
</script>

<h1>Welcome to SvelteKit</h1>
<p>This is the Home page</p>
{#if currentHour < 12}
	<h2 class="text-red-600">Good morning!</h2>
{:else if currentHour >= 12 && currentHour < 18}
	<h2 class="text-blue-600">Good afternoon!</h2>
{:else}
	<h2 class="text-green-600">Good evening!</h2>
{/if}
