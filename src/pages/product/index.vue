<script setup>
import { storeToRefs } from 'pinia'
import ProductCard from '~/components/ui/ProductCard.vue'
import LoadingProduct from '~/components/ui/LoadingProductCard.vue'

const productStore = useProductStore()

onMounted(() => {
  productStore.fetchAll()
})
</script>

<template>
  <section id="page-products" class="w-full bg-white py-10 mx-auto max-w-7xl md:px-8">
    <h1 class="mb-8">
      Our Products
    </h1>
    <div v-if="productStore.isLoading" class="grid grid-cols-2 gap-8">
      <LoadingProduct />
      <LoadingProduct />
      <LoadingProduct />
      <LoadingProduct />
    </div>

    <div v-else class="grid grid-cols-2 gap-8">
      <ProductCard
        v-for="product in productStore.products"
        :key="product.id"
        caption="Product caption"
        title="Product title"
        description="Lorem ipsum dolor sir amet."
        image-url="https://images.prismic.io/benefeeddulur/d21f8c2f-cca3-4025-9734-bebbba6e7b41_Become+a+trading+partner.png"
      >
        <RouterLink
          :to="`/product/${product.uid}`"
          class="bg-primary-500 text-white mt-8 mx-auto inline-block rounded-full px-5 py-1.5"
        >
          Learn more
        </RouterLink>
      </ProductCard>
    </div>
  </section>
</template>
