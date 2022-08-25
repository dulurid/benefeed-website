<script setup>
import { usePrismic } from '@prismicio/vue'
import CareerCard from '~/components/ui/CareerCard.vue'

const { asText, asImageSrc } = usePrismic()
const careerStore = useCareersStore()

careerStore.fetchAll()
</script>

<template>
  <section id="careers-heros" class="max-w-7xl mx-auto px-4 mt-8">
    <div class="grid grid-cols-2 gap-8">
      <div class="flex flex-col items-start justify-center ">
        <h1>Lets join to our team</h1>
        <p class=" mt-4 max-w-lg">
          Our mission is to be the best local partner for our institutional and retail clients. We recognize that the investment industry is changing rapidly with technology.
        </p>
      </div>

      <div>
        <div class=" grid grid-cols-3 gap-4">
          <div class="flex flex-col gap-4">
            <div class="h-[150px] w-full bg-gray-50">
              <img class="h-[150px] w-full object-cover" src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="">
            </div>

            <div class="h-[250px] w-full bg-gray-50">
              <img class="h-[250px] w-full object-cover" src="https://images.unsplash.com/photo-1524758870432-af57e54afa26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="">
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <div class="h-[250px] w-full bg-gray-50">
              <img class="h-[250px] w-full object-cover" src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80" alt="">
            </div>

            <div class="h-[150px] w-full bg-gray-50">
              <img class="h-[150px] w-full object-cover" src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="">
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <div class="h-[200px] w-full bg-gray-50">
              <img class="h-[200px] w-full object-cover" src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80" alt="">
            </div>

            <div class="h-[200px] w-full bg-gray-50">
              <img class="h-[200px] w-full object-cover" src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="careers-list" class="max-w-7xl mx-auto px-4 mt-16">
    <h2>Available jobs</h2>
    <div class=" grid grid-cols-3 gap-8 mt-8">
      <CareerCard
        v-for="career in careerStore.careers" :key="career.uid"
        :position="asText(career.position)"
        job-type="Full Time"
        location="Surabaya"
        image-url="https://images.prismic.io/benefeeddulur/84ec9bfd-b5dc-48eb-a754-8bb37aa74d04_career-man-example.png?auto=compress,format"
        :to="`/career/${career.uid}`"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>

</style>
