<script setup>
import { usePrismic } from '@prismicio/vue'
import { useAboutStore } from '~/store/about.stores'

const { asText, asImageSrc } = usePrismic()
const about = useAboutStore()
about.fetchAboutDocument()

useHead({
  title: 'Benefeed - About',
  meta: [
    { name: 'description', content: 'Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting' },
  ],
})
</script>

<template>
  <section class="">
    <div class="bg-white">
      <div class="bg-neutral-50">
        <div class="container m-auto px-6">
          <div class="items-center justify-between p-5 lg:flex">
            <div class=" lg:w-6/12 lg:p-0">
              <h1 class="mb-3 text-4xl text-left font-bold capitalize leading-none text-neutral-900 sm:text-4xl">
                {{ asText(about.heros.title) }}
                <hr>
              </h1>
              <p class="text-sm leading-5 font-normal text-neutral-800 text-justify">
                {{ asText(about.heros.description) }}
              </p>
            </div>

            <div class="scale-100 lg:w-4/12">
              <div data-v-5634ab58="" class="w-full max-w-md transform translate-y-10 relative ml-24">
                <div data-v-5634ab58="" class="absolute inset-0 lg:pr-24 pb-20">
                  <div
                    data-v-5634ab58=""
                    class="w-full h-full bg-gradient-to-br from-primary-300 to-primary-500 rounded-3xl shadow-2xl"
                  />
                </div>
                <img
                  :src="asImageSrc(about.heros.image)" alt=""
                  class="lg:-ml-12 transform lg:mt-8 -translate-y-20 rounded-3xl w-[350px] h-auto"
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Our Teams -->
  <section>
    <div class="py-20 bg-green-50">
      <div class="container mx-auto px-6 md:px-12 xl:px-32">
        <div class="mb-16 text-center">
          <h2 class="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">
            Our Teams
          </h2>
          <p class="text-gray-600 lg:w-8/12 lg:mx-auto">
            Tailus prides itself not only on award-winning technology, but also on the talent of its people of some of the brightest minds and most experienced executives in business.
          </p>
        </div>
        <div class="grid gap-12 items-center md:grid-cols-3">
          <div class="space-y-4 text-center">
            <img
              class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64 shadow-xl"
              src="https://tailus.io/sources/blocks/classic/preview/images/woman1.jpg" alt="woman" loading="lazy" width="640" height="805"
            >
            <div>
              <h4 class="text-2xl">
                Hentoni Doe
              </h4>
              <span class="block text-sm text-gray-500">CEO-Founder</span>
            </div>
          </div>
          <div class="space-y-4 text-center">
            <img
              class="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80 shadow-xl"
              src="https://tailus.io/sources/blocks/classic/preview/images/man.jpg" alt="man" loading="lazy" width="1000" height="667"
            >
            <div>
              <h4 class="text-2xl">
                Jonathan Doe
              </h4>
              <span class="block text-sm text-gray-500">Chief Technical Officer</span>
            </div>
          </div>
          <div class="space-y-4 text-center">
            <img
              class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64 shadow-xl"
              src="https://tailus.io/sources/blocks/classic/preview/images/woman.jpg" alt="woman" loading="lazy" width="1000" height="667"
            >
            <div>
              <h4 class="text-2xl">
                Anabelle Doe
              </h4>
              <span class="block text-sm text-gray-500">Chief Operations Officer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Vision & Mission -->

  <section class="w-full bg-white">
    <div class="mx-auto max-w-7xl py-10 md:px-8">
      <div class="mt-4 flex flex-col md:mt-4 md:flex-row md:space-x-8">
        <div
          class="flex flex-1 flex-col items-center justify-center overflow-hidden bg-neutral-50 text-center md:rounded-2xl"
        >
          <div class="flex flex-col px-4 pb-8 pt-4 sm:px-16">
            <h2 class="mt-1 mb-6 text-3xl font-semibold leading-none tracking-tighter md:text-4xl">
              {{ asText(about.vision.title) }}
            </h2>
            <p class="font-light text-gray-600">
              {{ asText(about.vision.description) }}
            </p>
          </div>
          <img class="h-[250px] w-auto" :src="asImageSrc(about.vision.image)">
        </div>

        <div
          class="flex flex-1 flex-col items-center justify-center overflow-hidden bg-neutral-50 text-center md:rounded-2xl"
        >
          <div class="flex flex-col px-4 pb-8 pt-4 sm:px-16">
            <h2 class="mt-1 mb-6 text-3xl font-semibold leading-none tracking-tighter md:text-4xl">
              {{ asText(about.mission.title) }}
            </h2>
            <p class="font-light text-gray-600">
              {{ asText(about.mission.description) }}
            </p>
          </div>

          <img class="h-[250px] w-auto" :src="asImageSrc(about.mission.image)">
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
</style>
