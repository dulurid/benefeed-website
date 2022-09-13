<script setup>
import LineCharts from '~/components/LineCharts.vue'
const target = ref(null)
const targetIsVisible = useElementVisibility(target)
</script>

<template>
  <section class="h-auto bg-white">
    <div class="px-10 pt-24 mx-auto max-w-7xl">
      <div class="w-full mx-auto text-left md:text-center">
        <h1 class="mb-8">
          Kinerja <span class="--text-gradient">Investasi</span> dan<br class="lg:block hidden">  watchlist <span class="--text-gradient">Benefeed</span> VS IHSG
        </h1>
        <p class="px-0 mb-6 text-lg text-gray-600 lg:px-24">
          Say hello to the number one source for all your design needs. Drag and drop designs, edit designs, and modify the components to help tell your story.
        </p>
      </div>
    </div>
    <div class="overflow-hidden relative component_block bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl pt-8 md:pb-10 lg:pb-32 flex flex-col w-full h-full items-center justify-center mx-auto">
        <div class="flex items-center h-full w-full rounded-md">
          <div class="lg:grid lg:grid-cols-12 lg:gap-8 flex flex-col w-full items-center pt-10 pb-0 md:pb-10 relative">
            <div class="col-span-12">
              <div class="bg-transparent p-2 relative">
                <div class="absolute inset-0 opacity-10 blur-xl animate-pulse" style="background-image:linear-gradient(120deg, #5145cd -0.55%, #37BDF9 22.86%, #37BDF9 48.36%, #17BC9B 73.33%, #17BC9B 99.34%)" />
                <div class="bg-white h-[450px] py-10  sm:w-full relative sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                  <div ref="target">
                    <LineCharts v-if="targetIsVisible" />
                  </div>
                </div>
              </div>
            </div>
            <img src="/illustrations/image_1.png" class="absolute bottom-0 translate-y-40 sm:block hidden left-1/2 ml-40 lg:mb-0 -mb-8 lg:-ml-20 transform w-48 h-auto">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
