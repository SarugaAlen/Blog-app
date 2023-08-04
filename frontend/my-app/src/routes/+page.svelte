<script>
    const imagePath = '/images/img1.png'
</script>

<div class="flex justify-center items-center w-screen h-screen gradient bg-gradient-to-r from-blue-400 via-purple-600 to-pink-600 animate-gradient">
    <div class="flex flex-col w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 ml-5 md:ml-20">
        <h1 class="text-white font-bold mt-5 md:mt-10 text-4xl md:text-7xl font-mono">Dobrodošli</h1>
        <p class="text-xl md:text-2xl text-white font-bold font-mono mt-3">Zaupajte nam o vašem dnevu</p>
    </div>
    <div class="flex flex-col justify-center md:justify-end mt-5 md:mt-0 md:mr-40 mr-0">
        <img src={imagePath} alt="slika" class="max-w-full md:max-w-5xl h-auto shadow-l">
    </div>
</div>