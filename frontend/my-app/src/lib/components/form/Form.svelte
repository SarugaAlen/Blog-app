<script>
	import { handleSubmit } from './formSubmit.js';
</script>


<div class="flex flex-col items-center justify-center mt-6">
	<h1 class="text-center text-5xl font-serif font-extrabold text-purple-500 m-5">
		<span class="text-transparent bg-clip-text bg-gradient-to-r to-purple-700 from-purple-400"
			>Nova objava</span
		>
	</h1>
	<form class="w-full max-w-sm" id="form_id" method="POST" on:submit={handleSubmit}>
		<div class="grid place-items-center mb-2 p-4">
			<label for="naziv" class="block mb-3 text-xl font-medium text-gray-900 dark:text-white">
				Naziv:</label
			>
			<input
				type="text"
				name="naziv"
				required
				min="1"
				max="50"
				placeholder="Naziv"
				pattern="[A-Ža-ž0-9\s.!?]+"
				class="block h-12 mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-m rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			/>
		</div>
		<div class="grid place-items-center mb-0.5 p-4">
			<label for="opis" class="block mb-3 text-xl font-medium text-gray-900 dark:text-white">
				Opis:</label
			>
			<input
				type="text"
				name="opis"
				required
				placeholder="Opis"
				min="1"
				max="100"
				pattern="[A-Ža-ž0-9\s.,!?]+"
				class="block h-40 w-80 pl-4 mt-2 text-m rounded-lg text-gray-900 border border-gray-300 bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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

