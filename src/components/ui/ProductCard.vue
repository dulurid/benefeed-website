<script>
export default {
  props: {
    caption: { type: [String], requried: true },
    title: { type: [String], requried: true },
    description: { type: [String], requried: true },
    imageUrl: { type: [String], requried: true },
  },
}
</script>

<template>
  <div
    class="flex flex-col items-center justify-center flex-1 overflow-hidden text-center bg-gray-50 md:rounded-xl"
  >
    <div class="flex flex-col px-10 pb-8 pt-8 sm:px-16">
      <h3 class="text-xl leading-none">
        {{ caption }}
      </h3>
      <p
        class="mt-5 text-3xl mb-4 font-semibold leading-none tracking-tighter md:text-4xl"
      >
        {{ title }}
      </p>

      <p class="font-light text-gray-600">
        {{ description }}
      </p>

      <slot />
    </div>
    <img
      class="h-[350px] w-auto"
      :src="imageUrl"
    >
  </div>
</template>

<style lang="scss" scoped>

</style>
