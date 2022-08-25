<script>
export default {
  props: {
    position: { type: [String], requried: true },
    jobType: { type: [String], requried: true },
    location: { type: [String], requried: true },
    imageUrl: { type: [String], requried: true },
    to: { type: [String], requried: true },
  },
}
</script>

<template>
  <div class=" rounded-md p-6 bg-gray-50 relative min-h-[200px]">
    <h3 class=" font-bold text-xl tracking-tight">
      {{ position }}
    </h3>

    <div class="mt-4">
      <p class="text-sm text-gray-600">
        {{ jobType }}
      </p>
      <p class=" text-sm text-gray-600">
        {{ location }}
      </p>
    </div>

    <div class="absolute top-2 right-2">
      <img class="max-h-[180px] w-auto" src="/illustrations/career-man-example.png" alt="">
    </div>

    <div class=" absolute bottom-6 left-6">
      <RouterLink :to="to" class="bg-gray-100 rounded-lg px-8 py-2 hover:bg-gray-200 transition duration-300 transform hover:scale-[1.01]">
        Open
      </RouterLink>
    </div>
  </div>
</template>
