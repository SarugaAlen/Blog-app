<script>
	import { handleSubmit } from './formSubmit.js';
</script>

<div class="flex justify-center items-center w-screen h-screen gradient bg-gradient-to-r from-blue-400 via-purple-600 to-pink-600 animate-gradient">
    <div class="flex flex-col items-center justify-start bg-white w-4/5 sm:w-3/5 md:w-2/3 lg:w-1/2 xl:w-1/3 rounded-lg h-auto p-4 sm:p-8">
        <h1 class="text-center text-4xl sm:text-5xl font-serif font-extrabold text-purple-500 m-4 sm:m-5">
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-purple-700 from-purple-400">Nova objava</span>
        </h1>
        <form class="w-full max-w-sm" id="form_id" method="POST" on:submit={handleSubmit}>
            <div class="mb-2 p-2 sm:p-4">
                <label for="naziv" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Naziv:</label>
                <input
                    type="text"
                    name="naziv"
                    required
                    min="1"
                    max="50"
                    placeholder="Naziv"
                    pattern="[A-Ža-ž0-9\s.!?]+"
                    class="block w-full h-12 mt-1.5 sm:mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <div class="mb-0.5 p-2 sm:p-4">
                <label for="opis" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Opis:</label>
                <input
                    type="text"
                    name="opis"
                    required
                    placeholder="Opis"
                    min="1"
                    max="100"
                    pattern="[A-Ža-ž0-9\s.,!?]+"
                    class="block w-full h-24 sm:h-40 pl-3 mt-1.5 text-sm rounded-lg text-gray-900 border border-gray-300 bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <br />
            <div class="grid place-items-center">
                <button
                    type="submit"
                    class="text-white w-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-4 py-2 text-center mr-2 mb-2"
                >
                    Shrani
                </button>
            </div>
        </form>
    </div>
</div>



