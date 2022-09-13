<script>
export default {
  props: {
    title: { type: [String], required: true },
    content: { type: [String], required: true },
    author: { type: [String], required: true },
    date: { type: [String], required: true },
  },
}
</script>

<template>
  <div class="flex flex-col pb-2">
    <h3 class="text-lg font-bold sm:text-sm md:text-xl">
      {{ title }}
    </h3>
    <p class="text-sm text-gray-500 line-clamp-2">
      {{ content }}
    </p>
    <p class="pt-2 sm:text-xs md:text-xs">
      Pubished by <a class="  ">{{ author }}</a>
    </p>
    <p class="pt-2 sm:text-xs md:text-xs">
      on <span>{{ date }}</span> ·
    </p>
    <div class="flex">
      <slot />
    </div>
    <hr>
  </div>
</template>
