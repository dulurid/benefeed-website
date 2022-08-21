<script setup>
import { storeToRefs } from 'pinia'
import ProductSection from '~/components/slices/ProductSection.vue'
import HerosSection from '~/components/slices/HerosSection.vue'
import FeaturedSection from '~/components/slices/FeaturedSection.vue'
import { useHomeStore } from '~/store/home.stores'

const home = useHomeStore()
await home.fetchHomeDocument()

useHead({
  title: 'Benefeed - Home',
  meta: [
    { name: 'description', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.' },
  ],
})
</script>

<template>
  <HerosSection />
  <FeaturedSection />
  <ProductSection />
</template>
