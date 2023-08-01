<script>
	import '../app.postcss';
</script>
<body class="flex flex-col min-h-screen">
    <header>
        <nav class="flex items-center justify-between flex-wrap bg-purple-500 p-6">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <h2 class="font-semibold text-xl tracking-tight"><a href="/">Home</a></h2>
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow">
                <h2 class="block mt-4 lg:inline-block lg:mt-0 text-purple-100 hover:text-white mr-4"><a href="/about">About</a></h2>
                <h2 class="block mt-4 lg:inline-block lg:mt-0 text-purple-100 hover:text-white mr-4"><a href="/new">New</a></h2>
            </div>
        </div>
        </nav>
    </header>
    
    
    <main>
        <slot />
    </main>
    
    <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800 mt-auto flex items-center justify-center h-11">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400 font-bold">© 2023</span>
      </footer>
</body>




