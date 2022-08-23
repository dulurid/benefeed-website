<script setup>
useHead({
  title: 'Benefeed - Blog',
  meta: [
    { name: 'description', content: 'Lorem ipsum dolor sir amet' },
  ],
})
</script>

<template>
  <section class="bg-white">
    <div class=" w-full px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8  md:space-y-16 max-w-7xl">
      <div class="flex flex-col items-center rounded-2xl bg-neutral-50 md:flex-row shadow-xl ">
        <div class="w-full md:w-1/2">
          <a href="#_" class="block">
            <img
              data-aos="fade-right" class="h-full max-h-64 w-full rounded-lg object-cover sm:max-h-96"
              src="https://images.unsplash.com/photo-1606189934390-2b10bb7f8094?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            >
          </a>
        </div>
        <div class="mb-6 flex h-full w-full flex-col items-start justify-center py-6 md:mb-0 md:w-1/2">
          <div
            class="flex h-full transform flex-col items-start justify-center space-y-3 md:space-y-5 md:pl-10 lg:pl-16"
          >
            <div
              class="inline-block flex items-center rounded-full bg-green-500 py-1.5 pl-2 pr-3 text-xs font-medium uppercase leading-none text-white"
            >
              <svg class="mr-1 h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <span>Newest</span>
            </div>
            <h2 class="text-4xl font-bold leading-none lg:text-3xl xl:text-5xl">
              <a href="#_">Rahasia Menjadi Kaya </a>
            </h2>
            <p class="pt-1 text-sm font-normal">
              Gimana sih cara menjadi kaya? Ada rumusnya ga sih?” Rasanya ini menjadi pertanyaan sejuta umat. Menjadi
              kaya
            </p>
            <p class="pt-2 text-sm font-medium">
              Posted by <span class="mr-1 underline">Benefeed Admin</span> · <span class="mx-1">August 22rd,
                2022</span>.
            </p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-12 pb-10 gap-5">
        <!-- 1 -->
        <div
          class="flex flex-col  col-span-12 space-y-3 shadow-xl  p-4 rounded-xl item-center bg-neutral-50 sm:col-span-6 xl:col-span-4"
        >
          <a href="#_" class="block items-center">
            <img
              class="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56"
              src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            >
          </a>
          <h2 class="text-lg font-bold sm:text-xl md:text-2xl">
            <a href="#_">Karier Pasar Modal vs. Passion</a>
          </h2>
          <p class="text-sm text-gray-500 text-justify">
            Ada anak muda yang baru beberapa tahun berkarier di dunia pasar modal minta pendapat saya. Kurang lebih
            begini kata-katanya: “Saya merasa jenuh sekali bekerja di dunia pasar modal. Jujur, bekerja di
          </p>
          <p class="pt-2 text-xs font-medium">
            <a href="#_" class="mr-1 underline">Benefeed Admin</a> · <span class="mx-1">April 17, 2021</span> ·
          </p>
        </div>

        <!-- 2 -->
        <div
          class="flex flex-col  col-span-12 space-y-3 p-4  shadow-xl rounded-xl item-center bg-neutral-50 sm:col-span-6 xl:col-span-4"
        >
          <a href="#_" class="block items-center">
            <img
              class="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56"
              src="https://images.unsplash.com/photo-1635236269483-7e5d494e0097?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
            >
          </a>
          <h2 class="text-lg font-bold sm:text-xl md:text-2xl">
            <a href="#_">Investasi Ala Ali dan Dundee
            </a>
          </h2>
          <p class="text-sm text-gray-500 text-justify">
            Ada anak muda yang baru beberapa tahun berkarier di dunia pasar modal minta pendapat saya. Kurang lebih
            begini kata-katanya: “Saya merasa jenuh sekali bekerja di dunia pasar modal. Jujur, bekerja di
          </p>
          <p class="pt-2 text-xs font-medium">
            <a href="#_" class="mr-1 underline">Benefeed Admin</a> · <span class="mx-1">April 17, 2021</span> ·
          </p>
        </div>

        <!-- 3 -->
        <div
          class="flex flex-col  col-span-12 space-y-3 p-4 shadow-xl  rounded-xl item-center bg-neutral-50 sm:col-span-6 xl:col-span-4"
        >
          <a href="#_" class="block items-center">
            <img
              class="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56"
              src="https://images.unsplash.com/photo-1620808335012-0db31a306eb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
            >
          </a>
          <h2 class="text-lg font-bold sm:text-xl md:text-2xl">
            <a href="#_">Everything Needs Money
            </a>
          </h2>
          <p class="text-sm text-gray-500 text-justify">
            Ada anak muda yang baru beberapa tahun berkarier di dunia pasar modal minta pendapat saya. Kurang lebih
            begini kata-katanya: “Saya merasa jenuh sekali bekerja di dunia pasar modal. Jujur, bekerja di
          </p>
          <p class="pt-2 text-xs font-medium">
            <a href="#_" class="mr-1 underline">Benefeed Admin</a> · <span class="mx-1">April 17, 2021</span> ·
          </p>
        </div>

        <!-- 4 -->
        <div
          class="flex flex-col  col-span-12 space-y-3 p-4 shadow-xl rounded-xl item-center bg-neutral-50 sm:col-span-6 xl:col-span-4"
        >
          <a href="#_" class="block items-center">
            <img
              class="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56"
              src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            >
          </a>
          <h2 class="text-lg font-bold sm:text-xl md:text-2xl">
            <a href="#_">Investasi Antara Putin dan Gresham
            </a>
          </h2>
          <p class="text-sm text-gray-500 text-justify">
            Ada anak muda yang baru beberapa tahun berkarier di dunia pasar modal minta pendapat saya. Kurang lebih
            begini kata-katanya: “Saya merasa jenuh sekali bekerja di dunia pasar modal. Jujur, bekerja di
          </p>
          <p class="pt-2 text-xs font-medium">
            <a href="#_" class="mr-1 underline">Benefeed Admin</a> · <span class="mx-1">April 17, 2021</span> ·
          </p>
        </div>

        <!-- 5 -->
        <div
          class="flex flex-col  col-span-12 space-y-3 p-4 shadow-xl rounded-xl item-center bg-neutral-50 sm:col-span-6 xl:col-span-4"
        >
          <a href="#_" class="block items-center">
            <img
              class="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56"
              src="https://images.unsplash.com/photo-1604594849809-dfedbc827105?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            >
          </a>
          <h2 class="text-lg font-bold sm:text-xl md:text-2xl">
            <a href="#_">Annoying One Person for the Rest of Our Lives
            </a>
          </h2>
          <p class="text-sm text-gray-500 text-justify">
            Ada anak muda yang baru beberapa tahun berkarier di dunia pasar modal minta pendapat saya. Kurang lebih
            begini kata-katanya: “Saya merasa jenuh sekali bekerja di dunia pasar modal. Jujur, bekerja di
          </p>
          <p class="pt-2 text-xs font-medium">
            <a href="#_" class="mr-1 underline">Benefeed Admin</a> · <span class="mx-1">April 17, 2021</span> ·
          </p>
        </div>

        <!-- 6 -->
        <div
          class="flex flex-col  col-span-12 space-y-3 p-4 shadow-xl rounded-xl item-center bg-neutral-50 sm:col-span-6 xl:col-span-4"
        >
          <a href="#_" class="block items-center">
            <img
              class="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56"
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJ1c3NpbmVzJTIwbWFufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            >
          </a>
          <h2 class="text-lg font-bold sm:text-xl md:text-2xl">
            <a href="#_">Mentalitas Pejuang Kemerdekaan
            </a>
          </h2>
          <p class="text-sm text-gray-500 text-justify">
            Ada anak muda yang baru beberapa tahun berkarier di dunia pasar modal minta pendapat saya. Kurang lebih
            begini kata-katanya: “Saya merasa jenuh sekali bekerja di dunia pasar modal. Jujur, bekerja di
          </p>
          <p class="pt-2 text-xs font-medium">
            <a href="#_" class="mr-1 underline">Benefeed Admin</a> · <span class="mx-1">April 17, 2021</span> ·
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-white">
    <div class="flex flex-col items-center p-2">
      <!-- Help text -->
      <nav aria-label="Page navigation example">
        <ul class="inline-flex items-center -space-x-px">
          <li>
            <a href="#" class="ml-0 block rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span class="sr-only">Previous</span>
              <svg aria-hidden="true" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
            </a>
          </li>
          <li>
            <a href="#" class="border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
          </li>
          <li>
            <a href="#" class="border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
          </li>
          <li>
            <a href="#" aria-current="page" class="z-10 border border-blue-300 bg-blue-50 py-2 px-3 leading-tight text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
          </li>
          <li>
            <a href="#" class="border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
          </li>
          <li>
            <a href="#" class="border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
          </li>
          <li>
            <a href="#" class="block rounded-r-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span class="sr-only">Next</span>
              <svg aria-hidden="true" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<style lang="scss" scoped>
</style>
