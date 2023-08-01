<script>
	const handleSubmit = async (event) => {
		event.preventDefault();

		const formData = {
			naziv: event.target.naziv.value,
			opis: event.target.opis.value
		};

		try {
			const response = await fetch('http://localhost:3001/objava', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formData)
			});

			if (response.ok) {
				const responseData = await response.json();
				console.log(responseData.msg); // Display success message from the backend
				// You can also reset the form or show a success message to the user
			} else {
				console.error('Failed to submit form:', response.status, response.statusText);
				// Display an error message to the user
			}
		} catch (error) {
			console.error('Error submitting form:', error);
			// Display an error message to the user
		}
	};
</script>

<h1 class="text-center text-5xl font-serif font-extrabold text-purple-500 m-5">
	<span class="text-transparent bg-clip-text bg-gradient-to-r to-purple-700 from-purple-400"
		>Nova objava</span
	>
</h1>
<div class="container grid place-items-center">
	<form method="POST" on:submit={handleSubmit}>
		<div class="grid place-items-center mb-2 p-4">
			<label for="naziv" class="block mb-3 text-sm font-medium text-gray-900 dark:text-white">
				Vnesite naziv:</label
			>
			<input
				type="text"
				name="naziv"
				required
				placeholder="Naziv"
				class="block h-12 mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			/>
		</div>
		<div class="grid place-items-center mb-0.5 p-4">
			<label for="opis" class="block mb-3 text-sm font-medium text-gray-900 dark:text-white">
				Vnesite opis:</label
			>
			<input
				type="text"
				name="opis"
				required
				placeholder="Opis"
				class="block h-40 w-80 pl-4 mt-2 text-sm rounded-lg text-gray-900 border border-gray-300 bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			/>
		</div>
		<br />
		<div class="grid place-items-center">
			<button
				type="submit"
				class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
				>Shrani</button
			>
		</div>
	</form>
</div>
