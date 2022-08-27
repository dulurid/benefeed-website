<script setup>
import { usePrismic } from '@prismicio/vue'
import BlogCard from '~/components/ui/BlogCard.vue'
import LoadingProductCard1 from '~/components/ui/LoadingProductCard.vue'

const { asText, asImageSrc, asDate } = usePrismic()
const blogStore = useBlogsStore()

onMounted(() => {
  blogStore.fetchAll()
})
</script>

<template>
  <section id="page-blogs" class="w-full bg-white py-10 mx-auto max-w-7xl md:px-8">
    <div v-if="blogStore.isLoading" class="grid grid-cols-3 gap-6 pb-10">
      <LoadingBlogCard class="col-span-3" />
      <LoadingBlogCard v-for="index in 8" :key="index" />
    </div>

    <div v-else class="grid grid-cols-3 gap-6 pb-10">
      <div class="col-span-3">
        <div class="flex flex-col items-center rounded-2xl bg-neutral-50 md:flex-row shadow-xl ">
          <div class="w-full md:w-1/2">
            <img
              data-aos="fade-right" class="h-full max-h-64 w-full rounded-l-lg object-cover sm:max-h-96"
              :src="asImageSrc(blogStore.featuredBlog.image)"
            >
          </div>
          <div class="mb-6 flex h-full w-full flex-col items-start justify-center py-6 md:mb-0 md:w-1/2">
            <div
              class="flex h-full transform flex-col items-start justify-center space-y-3 md:space-y-5 md:pl-10 lg:pl-16"
            >
              <div
                class="inline-block items-center rounded-full bg-green-500 py-1.5 pl-2 pr-3 text-xs font-medium uppercase leading-none text-white"
              >
                <svg class="mr-1 h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <span>Newest</span>
              </div>
              <h2 class="text-4xl font-bold leading-none  text-justify  lg:text-3xl xl:text-5xl">
                <p> {{ asText(blogStore.featuredBlog.title) }}</p>
                <p class="pt-3 pr-6 text-neutral-500 text-sm font-normal">
                  {{ asText(blogStore.featuredBlog.content) }}
                </p>

                <p class="pt-2 text-sm font-medium">
                  Posted by <span class="mr-1 underline">{{ blogStore.featuredBlog.author }}</span>.
                </p>
              </h2>

              <RouterLink
                :to="`/blog/${blogStore.featuredBlog.uid}`"
                class="bg-primary-500 text-white mt-4 inline-block rounded-full px-5 py-1.5"
              >
                Learn more
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
      <BlogCard
        v-for="blog in blogStore.blogs" :key="blog.uid" :title="asText(blog.title)" :date="blog.date"
        :content="asText(blog.content)" :author="blog.author" :image="asImageSrc(blog.image)"
        :to="`/blog /${blog.uid}`"
      >
        <RouterLink
          :to="`/blog/${blog.uid}`"
          class="bg-primary-500 text-white mt-4 inline-block rounded-full px-5 py-1.5"
        >
          Learn more
        </RouterLink>
      </BlogCard>
    </div>
  </section>
</template>

