<script>
export default {

}
</script>

<template>
  <header class="container max-w-screen-xl mx-auto px-0 md:px-8 xl:px-4 bg-white">
    <nav id="nav" class="flex-wrap flex items-center h-24">
      <div class="flex items-center h-24 justify-between md:w-auto w-full md:px-0 px-6">
        <div class="flex items-center space-x-2">
          <svg width="34" height="27" viewBox="0 0 34 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.2191 1.38461H25.5546L15.0152 17.2889H0.679688L11.2191 1.38461Z" fill="#007AFF" class="" /><path d="M11.8468 18.7629L7.76465 24.9231H22.7801L33.3196 9.01877H22.2372L15.7799 18.7629H11.8468Z" fill="#312ECB" /></svg>
          <p class="font-bold text-black text-lg uppercase">
            Product
          </p>
        </div>
      </div>

      <ul id="menu" class="hidden bg-white md:flex h-full md:w-auto w-full md:items-center border-t border-gray-100 md:border-t-0 flex-col md:flex-row gap-x-8 ml-0 md:ml-12">
        <li class="h-16 md:px-0 px-6 border-b border-gray-100 md:border-b-0 md:h-full">
          <RouterLink to="/" class="font-medium h-full flex items-center text-gray-500 text-base hover:text-gray-800 transition duration-300">
            Home
          </RouterLink>
        </li>
        <li class="relative border-b md:border-b-0 border-gray-100 group z-30 flex md:flex-row flex-col items-start md:items-center h-full">
          <a href="#_" class="h-16 md:h-full md:px-0 md:w-auto w-full px-6 flex items-center gap-1 font-medium text-gray-500 text-base hover:text-gray-800 transition duration-300">
            <span class="">Product</span>
            <svg class="w-5 h-5 group-hover:-rotate-180 ease-out duration-300 transition-all" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
          </a>
          <div class="w-full space-y-3 border-t md:block border-gray-100 hidden group-hover:block invisible group-hover:visible opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all ease-out shadow-sm duration-300 border-b md:fixed top-0 md:mt-24 left-0 bg-white">
            <ul class="max-w-7xl mx-auto flex md:flex-row flex-col md:px-4 justify-between">
              <li class="w-full md:w-1/5 border-l border-gray-100">
                <a href="#_" class="font-semibold text-lg hover:bg-gray-50 block p-6 lg:p-7 lg:py-10 rounded-lg transition duration-300">
                  <svg class="h-6 w-auto mb-5" viewBox="0 0 73 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M46.868 24c0 12.426-10.074 22.5-22.5 22.5-12.427 0-22.5-10.074-22.5-22.5S11.94 1.5 24.368 1.5c12.426 0 22.5 10.074 22.5 22.5Z" fill="#68DBFF" /><path d="M71.132 24c0 12.426-9.975 22.5-22.28 22.5-12.304 0-22.278-10.074-22.278-22.5S36.547 1.5 48.852 1.5c12.304 0 22.28 10.074 22.28 22.5Z" fill="#FF7917" /><path d="M36.67 42.842C42.81 38.824 46.868 31.886 46.868 24c0-7.886-4.057-14.824-10.198-18.841A22.537 22.537 0 0 0 26.573 24 22.537 22.537 0 0 0 36.67 42.842Z" fill="#5D2C02" /></svg>
                  <span class="font-bold text-slate-800 text-xs uppercase block my-2">Product One</span>
                  <span class="block text-xs font-medium text-slate-500 leading-5">The product for makers. Build the app of your dreams</span>
                </a>
              </li>
              <li class="w-full md:w-1/5 border-l border-gray-100">
                <a href="#_" class="font-semibold text-lg hover:bg-gray-50 block p-6 lg:p-7 lg:py-10 rounded-lg transition duration-300">
                  <svg class="h-5 mt-0.5 w-auto mb-5" viewBox="0 0 78 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M55.5 0h22l-19 32h-22l19-32Z" fill="#FF7A00" /><path d="M35.5 0h16l-19 32h-16l19-32Z" fill="#FF9736" /><path d="M19.5 0h12l-19 32H.5l19-32Z" fill="#FFBC7D" /></svg>
                  <span class="font-bold text-slate-800 text-xs uppercase block my-2">Product Two</span>
                  <span class="block text-xs font-medium text-slate-500 leading-5">Start building an email list of subscribers that convert</span>
                </a>
              </li>
              <li class="w-full md:w-1/5 border-l border-gray-100">
                <a href="#_" class="font-semibold text-lg hover:bg-gray-50 block p-6 lg:p-7 lg:py-10 rounded-lg transition duration-300">
                  <svg class="h-7 w-auto mb-4" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.684 40.138c11.046 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20 8.954 20 20 20Zm6.24-30.683c.303-1.079-.744-1.717-1.7-1.036l-13.347 9.509c-1.037.738-.874 2.21.245 2.21h3.515v-.027h6.85l-5.582 1.97-2.46 8.74c-.304 1.079.743 1.717 1.7 1.036l13.346-9.508c1.037-.74.874-2.211-.245-2.211h-5.33l3.007-10.683Z" fill="#F15757" /></svg>
                  <span class="font-bold text-slate-800 text-xs uppercase block my-2">Product Three</span>
                  <span class="block text-xs font-medium text-slate-500 leading-5">Design a top converting landing page for your product</span>
                </a>
              </li>
              <li class="w-full md:w-1/5 border-l border-gray-100">
                <a href="#_" class="font-semibold text-lg hover:bg-gray-50 block p-6 lg:p-7 lg:py-10 rounded-lg transition duration-300">
                  <svg class="h-7 w-auto mb-4" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.101 40.323c11.046 0 20-8.954 20-20 0-11.045-8.954-20-20-20-11.045 0-20 8.955-20 20 0 11.046 8.955 20 20 20Zm3.087-24.547a4.366 4.366 0 1 0-6.173 0l3.086 3.087 3.087-3.087Zm1.46 7.634a4.366 4.366 0 1 0 0-6.174l-3.086 3.087 3.087 3.087Zm-1.46 7.635a4.366 4.366 0 0 0 0-6.174l-3.087-3.087-3.086 3.087a4.366 4.366 0 0 0 6.173 6.174ZM9.38 23.41a4.366 4.366 0 0 1 6.174-6.174l3.087 3.087-3.087 3.087a4.366 4.366 0 0 1-6.174 0Z" fill="#7F57F1" /></svg>
                  <span class="font-bold text-slate-800 text-xs uppercase block my-2">Product Four</span>
                  <span class="block text-xs font-medium text-slate-500 leading-5">User feedback and bug reporting for a better product</span>
                </a>
              </li>
              <li class="w-full md:w-1/5 border-r border-l border-gray-100">
                <a href="#_" class="font-semibold text-lg hover:bg-gray-50 block p-6 lg:p-7 lg:py-10 rounded-lg transition duration-300">
                  <svg class="h-7 w-auto mb-4" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.654 3.891c-1.43 1-2.724 2.184-3.847 3.515 4.59-.426 10.42.27 17.189 3.654 7.228 3.614 13.05 3.737 17.1 2.955a19.888 19.888 0 0 0-1.378-3.199c-4.638.49-10.583-.158-17.511-3.622-4.4-2.2-8.278-3.106-11.553-3.303Zm26.355 3.07A19.95 19.95 0 0 0 20.1.293c-1.74 0-3.427.222-5.036.64 2.18.594 4.494 1.464 6.93 2.682 5.073 2.536 9.453 3.353 13.014 3.344Zm4.953 10.96c-4.894.967-11.652.769-19.755-3.283-7.576-3.788-13.605-3.74-17.672-2.836-.21.046-.415.095-.615.146a19.85 19.85 0 0 0-1.262 3.64c.326-.087.662-.17 1.01-.247 4.933-1.096 11.904-1.048 20.328 3.164 7.576 3.788 13.605 3.74 17.672 2.836.139-.03.276-.063.411-.096a20.296 20.296 0 0 0-.117-3.323Zm-.536 7.545c-4.846.847-11.408.522-19.219-3.384-7.576-3.787-13.605-3.74-17.672-2.836-.902.2-1.714.445-2.43.703-.003.114-.004.23-.004.345 0 11.045 8.955 20 20 20 9.258 0 17.046-6.29 19.325-14.828Z" fill="#1E5DFF" /></svg>
                  <span class="font-bold text-slate-800 text-xs uppercase block my-2">Product Five</span>
                  <span class="block text-xs font-medium text-slate-500 leading-5">Analytics and metrics for your application users</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li class="h-16 md:px-0 px-6 border-b border-gray-100 md:border-b-0 md:h-full">
          <RouterLink to="/career" class="font-medium h-full flex items-center text-gray-500 text-base hover:text-gray-800 transition duration-300">
            Career
          </RouterLink>
        </li>
        <li class="h-16 md:px-0 px-6 border-b border-gray-100 md:border-b-0 md:h-full">
          <RouterLink to="/blog" class="font-medium h-full flex items-center text-gray-500 text-base hover:text-gray-800 transition duration-300">
            Blog
          </RouterLink>
        </li>
        <li class="h-16 md:px-0 px-6 border-b border-gray-100 md:border-b-0 md:h-full">
          <RouterLink to="/about" class="font-medium h-full flex items-center text-gray-500 text-base hover:text-gray-800 transition duration-300">
            About
          </RouterLink>
        </li>

        <a href="#_" class="block md:hidden px-5 py-3 font-medium bg-blue-600 text-white text-base text-center">View Dashboard</a>
      </ul>
      <a href="#_" class="hidden md:block px-5 py-2.5 font-medium bg-blue-600 text-white text-base rounded-md hover:bg-blue-600 transform hover:scale-[1.01] transition duration-300 ml-auto">View Dashboard</a>
    </nav>
  </header>
</template>

<style lang="scss" scoped>

</style>
