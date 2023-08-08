<script>
	import { handleFormSubmission } from "./signupSubmit";
</script>

<div
	class="flex flex-col justify-center items-center w-screen h-screen gradient bg-gradient-to-r from-blue-400 via-purple-600 to-pink-600 animate-gradient"
>
	<div
		class="flex flex-col items-center justify-start bg-white w-5/6 sm:w-3/5 md:w-2/3 lg:w-1/2 xl:w-1/3 rounded-lg h-auto p-4 sm:p-8"
	>
		<h1
			class="text-center text-4xl sm:text-5xl font-serif font-extrabold text-purple-500 mb-4 sm:mb-5"
		>
			<span class="text-transparent bg-clip-text bg-gradient-to-r to-purple-700 from-purple-400"
				>Registracija</span
			>
		</h1>
		<form method="POST" class="w-full mt-4" id="registrationForm" on:submit={handleFormSubmission}>
			<div class="mt-5">
				<label for="username" class="block text-gray-600">Uporabniško ime</label>
				<input
					type="text"
					id="username"
					name="username"
					placeholder="Uporabniško ime"
					required
					class="w-full px-3 py-2 border-b border-purple-500 focus:outline-none"
				/>
			</div>
			<div class="mb-2 mt-5">
				<label for="email" class="block text-gray-600">Email</label>
				<input
					type="email"
					id="email"
					name="email"
					placeholder="Email"
					required
					class="w-full px-3 py-2 border-b border-purple-500 focus:outline-none"
				/>
			</div>
			<div class="mb-2 mt-5">
				<label for="password" class="block text-gray-600">Geslo</label>
				<input
					type="password"
					id="password"
					name="password"
					placeholder="Geslo"
					required
					class="w-full px-3 py-2 border-b border-purple-500 focus:outline-none"
				/>
			</div>
			<div class="mb-4">
				<label for="password2" class="block text-gray-600">Ponovite geslo</label>
				<input
					type="password"
					id="password2"
					name="password2"
					placeholder="Ponovite geslo"
					required
					class="w-full px-3 py-2 border-b border-purple-500 focus:outline-none"
				/>
			</div>
			<div class="mb-2 mt-14">
				<button
					type="submit"
					class="w-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white py-2 rounded-md hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium"
				>
					Registracija
				</button>
			</div>
		</form>
	</div>
</div>
