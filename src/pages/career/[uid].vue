<script setup>
import { storeToRefs } from 'pinia'
const router = useRoute()
const uid = router.params.uid

const careerStore = useCareersStore()

careerStore.fetchDetail(uid)
</script>

<template>
  <div class=" max-w-7xl mx-auto">
    <div class=" h-screen">
      {{ careerStore.isLoading }}
      <h1>Ini halaman career detail</h1>
      {{ careerStore.career }}
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
