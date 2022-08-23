<script setup>
import { storeToRefs } from 'pinia'
const router = useRoute()
const uid = router.params.uid

const store = useProductStore()

store.fetchProductDetail(uid)
</script>

<template>
  <div class=" max-w-7xl mx-auto">
    <div class=" h-screen">
      {{ store.isLoading }}
      <h1>Ini halaman product detail</h1>
      {{ store.product }}
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
