<script>
</script>

<div class="flex justify-center items-center w-screen h-screen gradient bg-gradient-to-r from-blue-400 via-purple-600 to-pink-600 animate-gradient">
    <div class="flex flex-col items-center justify-start bg-white w-2/6 rounded-lg h-5/6 p-8">
        <h1 class="text-center text-5xl font-serif font-extrabold text-purple-500 mb-5">
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-purple-700 from-purple-400">Prijava</span>
        </h1>
        <form method="POST" class="w-full mt-8">
            <div class="mb-4">
                <label for="username" class="block text-gray-600">Uporabniško ime</label>
                <input type="text" id="username" name="username" placeholder="Uporabniško ime" required
                    class="w-full px-4 py-2 border-b border-purple-500 focus:outline-none"
                />
            </div>
            <div class="mb-4">
                <label for="password" class="block text-gray-600">Geslo</label>
                <input type="password" id="password" name="password" placeholder="Geslo" required
                    class="w-full px-4 py-2 border-b border-purple-500 focus:outline-none"
                />
            </div>
            <div class="mb-4">
                <p class="text-purple-500">Ste pozabili geslo?</p>
            </div>
            <div class="mb-4">
                <button type="submit"
                    class="w-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white py-2 rounded-md hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium">
                    Prijava
                </button>
            </div>
            <div class="text-center">
                <p>Še nimate računa? <span class="text-purple-500">Prijavite se</span></p>
            </div>
        </form>
    </div>
</div>


