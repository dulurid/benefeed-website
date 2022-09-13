<script>
export default {

}
</script>

<template>
  <header class="container max-w-screen-xl mx-auto px-0 md:px-8 xl:px-4 bg-white">
    <nav id="nav" class="flex justify-between items-center h-24">
      <div>
        <Logo class="h-8 w-auto" />
      </div>

      <div>
        <ul id="menu" class="bg-white md:flex border-t border-gray-100 md:border-t-0  flex-row gap-x-8 ml-0">
          <li class="h-16 md:px-0 px-6 border-b border-gray-100 md:border-b-0 md:h-full">
            <RouterLink to="/" class="font-medium h-full flex items-center text-gray-600 text-base hover:text-gray-800 transition duration-300">
              Home
            </RouterLink>
          </li>
          <li class="relative border-b md:border-b-0 border-gray-100 group z-30 flex md:flex-row flex-col items-start md:items-center h-full">
            <RouterLink to="/product" class="h-16 md:h-full md:px-0 md:w-auto w-full px-6 flex items-center gap-1 font-medium text-gray-600 text-base hover:text-gray-800 transition duration-300">
              <span class="">Product</span>
              <svg class="w-5 h-5 group-hover:-rotate-180 ease-out duration-300 transition-all" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
            </RouterLink>
            <div class="w-full space-y-3 border-t md:block border-gray-100 hidden group-hover:block invisible group-hover:visible opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all ease-out shadow-sm duration-300 border-b md:fixed top-0 md:mt-24 left-0 bg-white">
              <ul class="max-w-7xl mx-auto flex md:flex-row flex-col md:px-4 justify-between">
                <li v-for="index in 4" :key="index" class="w-full md:w-1/4 border-l border-gray-100">
                  <RouterLink to="/product" class="relative hover:bg-primary-50 block p-6 lg:p-7 lg:py-10 transition duration-300">
                    <div>
                      <h3 class="text-lg font-bold mb-2">
                        Equity Trading {{ index }}
                      </h3>
                      <p class="text-xs max-w-[200px] text-gray-500">
                        The product for makers. Build the app of your dreams
                      </p>
                    </div>

                    <div class="absolute bottom-2 right-2 opacity-80">
                      <img class="h-32 w-auto" src="/illustrations/image_1.png" alt="">
                    </div>
                  </RouterLink>
                </li>
              </ul>
            </div>
          </li>
          <li class="h-16 md:px-0 px-6 border-b border-gray-100 md:border-b-0 md:h-full">
            <RouterLink to="/career" class="font-medium h-full flex items-center text-gray-600 text-base hover:text-gray-800 transition duration-300">
              Career
            </RouterLink>
          </li>
          <li class="h-16 md:px-0 px-6 border-b border-gray-100 md:border-b-0 md:h-full">
            <RouterLink to="/blog" class="font-medium h-full flex items-center text-gray-600 text-base hover:text-gray-800 transition duration-300">
              Blog
            </RouterLink>
          </li>
          <li class="h-16 md:px-0 px-6 border-b border-gray-100 md:border-b-0 md:h-full">
            <RouterLink to="/about" class="font-medium h-full flex items-center text-gray-600 text-base hover:text-gray-800 transition duration-300">
              About
            </RouterLink>
          </li>

          <a href="#_" class="block md:hidden px-5 py-3 font-medium bg-primary-600 text-white text-base text-center">Online Registration</a>
        </ul>
      </div>

      <div>
        <a href="#_" class="hidden md:block px-5 py-2.5 font-medium bg-primary-600 text-white text-base rounded-md hover:bg-primary-600 transform hover:scale-[1.01] transition duration-300 ml-auto">Online Registration</a>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>

</style>
