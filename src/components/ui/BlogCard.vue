<script>
export default {
  props: {
    title: { type: [String], required: true },
    content: { type: [String], required: true },
    author: { type: [String], required: true },
    image: { type: [String], required: true },
    date: { type: [String], required: true },
  },
}
</script>

<template>
  <div class="flex flex-col space-y-3 shadow p-4 rounded-xl bg-neutral-50">
    <div class="block items-center">
      <img
        class="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56"
        :src="image"
        alt=""
      >
    </div>
    <h2 class="text-lg font-bold sm:text-xl md:text-2xl">
      {{ title }}
    </h2>
    <p class="text-sm text-gray-500 line-clamp-2">
      {{ content }}
    </p>
    <p class="pt-2 text-xs font-medium">
      Posted By <a class="mr-1 underline">{{ author }}</a> ·
      <span class="mx-1">{{ date }}</span> ·
    </p>
    <div class="flex">
      <slot />
    </div>
  </div>
</template>
