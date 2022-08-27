<script>
export default {
  props: {
    title: { type: [String], requried: true },
    content: { type: [String], requried: true },
    author: { type: [String], requried: true },
    image: { type: [String], requried: true },

  },
}
</script>

<template>
  <div
    class="flex flex-col  col-span-12 space-y-3 shadow-xl  p-4 rounded-xl item-center bg-neutral-50 sm:col-span-6 xl:col-span-4"
  >
    <a class="block items-center">
      <img
        class="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56"
        :src="image"
      >
    </a>
    <h2 class="text-lg font-bold sm:text-xl md:text-2xl">
      {{ title }}
    </h2>
    <p class="text-sm text-gray-500 text-justify">
      {{ content }}
    </p>
    <p class="pt-2 text-xs font-medium">
      Posted By <a class="mr-1 underline">{{ author }}</a> · <span class="mx-1">{{ date }}</span> ·
    </p>
    <slot />
  </div>
</template>

