<script setup>
import { storeToRefs } from 'pinia'
import { usePrismic } from '@prismicio/vue'
const { asText, asImageSrc, asDate } = usePrismic()
const router = useRoute()
const blogStore = useBlogsStore()
const blogFeatured = useBlogsStore()
const { blog } = storeToRefs(blogStore)

console.log(router.params)
onMounted(() => {
  blogStore.fetchDetail(router.params.uuid)
  blogFeatured.fetchAll()
})
</script>

<!-- <template>
  <div>
    <h1>Detail blog {{ router.params }} </h1>
  </div>
</template> -->

<template>


  <div class="mx-auto flex flex-wrap items-center max-w-7xl">
    <div class="mb-10 w-4/5 border-b border-neutral-200 pb-10 md:mb-0 md:border-r-2  px-8 md:border-b-1  ">
      <span class="text-primary-500 text-sm   border-primary-500 md:border-b-[1px]">blog\{{ asText(blog.title)
      }}</span>
      <h1 class="prose lg:prose-xl hover:text-primary-500  pb-20 text-upper">
        {{ asText(blog.title) }}
      </h1>
      <img class="pb-4 w-full h-2/3" :src="asImageSrc(blog.image)">
      <p class="text-base pb-4 leading-relaxed">{{ asText(blog.content) }}</p>
      <hr>
      <div class="flex items-center py-3 tails-selected-element">
        <div class="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
          <img
            src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1256&amp;q=80"
            class="object-cover w-full h-full stroke-lg">
        </div>
        <div class="flex flex-col items-start justify-center">
          <h4 class="font-bold text-neutral-500">By {{ blog.author }}</h4>
          <p class="text-neutral-500">published on {{ blog.date }}</p>
        </div>
      </div>
    </div>

    <!-- side page -->
    <div class="mx-auto flex flex-wrap px-5 py-24 w-1/5">
      <BlogDetailCard v-for="blog in blogStore.blogs" :key="blog.uid" :title="blog.title" :date="blog.date"
        :content="asText(blog.content)" :author="blog.author" :image="asImageSrc(blog.image)"
        :to="`/blog /${blog.uid}`">
        <hr>
      </BlogDetailCard>


    </div>
  </div>


</template>

<style lang="scss" scoped>
</style>
