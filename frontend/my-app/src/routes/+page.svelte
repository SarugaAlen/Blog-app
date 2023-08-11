<script>
	const imagePath = '/images/img1.png';
</script>

<div
	class="flex justify-center items-center w-screen h-screen gradient bg-gradient-to-r from-blue-400 via-purple-600 to-pink-600 animate-gradient"
>
	<div class="flex flex-col w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 ml-5 md:ml-20">
		<h1 class="text-white font-bold mt-5 md:mt-10 text-4xl md:text-7xl font-mono">Dobrodošli</h1>
		<p class="text-xl md:text-2xl text-white font-bold font-mono mt-3">
			Lorem Ipsum
		</p>
		<button
			type="button"
			class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-m md:text-lg px-5 py-2.5 md:py-3 text-center ml-5 md:ml-32 mr-2 mb-2 mt-3 md:mt-4 lg:mt-5 w-3/6 md:w-3/12"
			><a href="/new">Pojdi</a>
		</button>
	</div>
	<div class="flex flex-col justify-center md:justify-end mt-5 md:mt-0 md:mr-40 mr-0">
		<img src={imagePath} alt="slika" class="max-w-full md:max-w-5xl h-auto shadow-l" />
	</div>
</div>
