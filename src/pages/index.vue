<script setup>
import { useSinglePrismicDocument } from '@prismicio/vue'
useHead({
  title: 'Benefeed - Home',
  meta: [
    { name: 'description', content: 'Lorem ipsum dolor sir amet' },
  ],
})

const { data: document, state, error, refresh } = useSinglePrismicDocument('home_page')

console.log(document)
</script>

<template>
  <section class="h-auto bg-white">
    <div class="container max-w-screen-xl mx-auto px-0 md:px-8 xl:px-4 relative">
      <!-- Main Hero Content -->
      <div class="text-center py-12 max-w-2xl md:max-w-3xl mx-auto md:py-16 md:px-0 px-8">
        <h1 class="mb-8 text-3xl font-extrabold leading-none max-w-5xl mx-auto tracking-normal text-gray-900 sm:text-6xl md:text-4xl lg:text-5xl md:tracking-tight">
          Belajar <span class="w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 lg:inline">Investasi</span> dan<br class="lg:block hidden"> Pilihan Saham terbaik
        </h1>

        <p class="font-normal text-gray-500 text-base mx-auto max-w-2xl lg:text-lg mb-12 poppins md:text-center text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a href="#_" class="px-7 py-3 sm:w-auto w-full bg-blue-600 text-white font-medium shadow-sm rounded-md hover:bg-blue-600 transform hover:scale-[1.01] transition duration-300">
            Get started today
          </a>
          <a href="#_" class="flex items-center sm:w-auto w-full font-medium justify-center gap-2 px-7 py-3 text-gray-700 shadow-sm border rounded-md hover:bg-gray-50 transform hover:scale-[1.01] transition duration-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M10 8L16 12L10 16V8Z" stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
            <span>How it works</span>
          </a>
        </div>
      </div>

      <!-- Logos Block -->
      <div class="text-center py-12 xl:px-0 px-8">
        <p class="font-medium text-slate-400 text-sm md:text-base mb-8">
          <span class="-ml-4">Trusted by industry leaders</span>
        </p>
        <div class="grid grid-cols-2 sm:grid-cols-6 md:-translate-x-5 lg:translate-x-0 md:grid-cols-5 text-center max-w-4xl mx-auto items-center justify-center gap-20">
          <svg class="w-auto h-10 flex-shrink-0 col-span-1 sm:col-span-2 md:col-span-1 mx-auto" viewBox="0 0 100 33" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M99.994 10.277h-7.962v13.285c0 .6-.232 1.11-.601 1.528-.371.37-.88.555-1.48.6h-4.63c-.648-.046-1.157-.231-1.528-.6-.371-.417-.601-.926-.601-1.528V10.277H75.23v13.98c.047 1.851.371 3.471 1.158 4.766.785 1.297 1.804 2.268 3.147 2.916 1.389.648 2.962 1.02 4.767 1.02h7.732v-.092c1.666 0 3.1-.371 4.304-1.065a7.185 7.185 0 0 0 2.686-3.057c.647-1.295.971-2.824.971-4.49V10.277Zm-79.668.833c-1.389-.602-2.916-.88-4.583-.833h-5.138l-1.99.231a9.042 9.042 0 0 0-.695.232V0H.004v32.96H7.92V19.628c.047-.556.232-1.111.648-1.482.417-.37.88-.601 1.528-.601h4.63c.554 0 1.064.233 1.48.601.417.37.601.926.648 1.482V32.96h7.916V18.61c0-1.991-.417-3.611-1.204-4.861-.832-1.204-1.897-2.083-3.24-2.639Zm26.942 12.452c-.047.6-.232 1.11-.602 1.528-.417.371-.926.556-1.528.6H40.51c-.602-.046-1.11-.23-1.481-.6-.417-.416-.602-.925-.648-1.528V10.277h-7.916v13.98c0 1.851.37 3.471 1.111 4.766.74 1.297 1.805 2.268 3.148 2.916 1.389.648 2.916 1.02 4.767 1.02h7.778v-.092c1.666 0 3.1-.371 4.258-1.065a7.607 7.607 0 0 0 2.732-3.057c.601-1.295.926-2.824.972-4.49V10.277h-7.962v13.285Zm13.98 9.398h7.916V0h-7.916v32.96Z" fill="url(#b)" /></g><defs><linearGradient id="b" x1="50" y1="0" x2="50" y2="32.96" gradientUnits="userSpaceOnUse"><stop stop-color="#A3CC39" /><stop offset=".698" stop-color="#85BD40" /><stop offset="1" stop-color="#65AD45" /></linearGradient><clipPath id="a"><path fill="#fff" d="M0 0h100v32.96H0z" /></clipPath></defs></svg>
          <svg class="w-auto h-10 translate-y-2 flex-shrink-0 col-span-1 sm:col-span-2 md:col-span-1 mx-auto" viewBox="0 0 101 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M62.294 23.544c-5.79 4.28-14.21 6.561-21.474 6.561-10.175 0-19.298-3.754-26.245-10-.527-.491-.07-1.158.596-.772 7.474 4.351 16.702 6.948 26.246 6.948 6.42 0 13.508-1.334 20.035-4.106.982-.386 1.79.667.842 1.369Z" fill="#F90" /><path fill-rule="evenodd" clip-rule="evenodd" d="M64.715 20.772c-.737-.947-4.912-.456-6.772-.21-.561.07-.666-.422-.14-.773 3.333-2.35 8.772-1.649 9.403-.877.632.772-.175 6.246-3.298 8.843-.491.385-.947.175-.737-.351.702-1.755 2.281-5.65 1.544-6.632Z" fill="#F90" /><path fill-rule="evenodd" clip-rule="evenodd" d="M58.048 3.298v-2.28c0-.351.246-.562.562-.562h10.175c.316 0 .597.246.597.562v1.93c0 .315-.281.736-.772 1.438l-5.264 7.509c1.965-.035 4.036.245 5.79 1.228.386.21.491.561.526.877v2.421c0 .35-.35.737-.737.526-3.122-1.649-7.298-1.824-10.736.036-.351.175-.737-.176-.737-.527V14.14c0-.35 0-.982.386-1.543l6.105-8.737h-5.298c-.316 0-.597-.246-.597-.562ZM20.96 17.438h-3.087c-.28-.034-.527-.245-.562-.526V1.052c0-.315.281-.56.597-.56h2.877c.316 0 .526.245.561.526v2.07h.07c.738-2 2.176-2.948 4.07-2.948 1.93 0 3.159.948 4 2.948.738-2 2.457-2.948 4.282-2.948 1.298 0 2.701.527 3.578 1.755.983 1.333.772 3.263.772 4.982v10.035c0 .316-.28.562-.596.562h-3.053c-.316-.035-.561-.281-.561-.562v-8.42c0-.667.07-2.352-.07-2.983-.246-1.053-.913-1.369-1.825-1.369-.737 0-1.544.492-1.86 1.299-.315.807-.28 2.14-.28 3.052v8.421c0 .316-.28.562-.597.562H26.19c-.316-.035-.562-.281-.562-.562v-8.42c0-1.755.28-4.387-1.894-4.387-2.211 0-2.14 2.527-2.14 4.386v8.421a.616.616 0 0 1-.633.527ZM78.153.14c4.597 0 7.088 3.93 7.088 8.948 0 4.842-2.737 8.702-7.088 8.702-4.49 0-6.947-3.93-6.947-8.843C71.171 4 73.662.14 78.153.14Zm0 3.264c-2.28 0-2.42 3.122-2.42 5.052 0 1.93-.036 6.07 2.385 6.07 2.386 0 2.527-3.333 2.527-5.368 0-1.333-.07-2.947-.456-4.21-.351-1.123-1.053-1.545-2.035-1.545Zm13.018 14.035h-3.088c-.315-.035-.561-.281-.561-.562V.982a.606.606 0 0 1 .596-.526h2.878c.28 0 .49.21.561.456v2.421h.07c.877-2.175 2.07-3.193 4.21-3.193 1.37 0 2.738.492 3.615 1.86.807 1.263.807 3.404.807 4.947v10c-.035.281-.28.492-.597.492h-3.087c-.281-.035-.527-.246-.562-.492V8.316c0-1.755.21-4.28-1.93-4.28-.736 0-1.438.49-1.79 1.262-.42.983-.49 1.93-.49 3.018v8.561a.642.642 0 0 1-.632.562Zm-41.228-7.58c0 1.194.035 2.211-.561 3.299-.492.877-1.264 1.403-2.14 1.403-1.194 0-1.895-.912-1.895-2.245 0-2.632 2.35-3.123 4.596-3.123v.667Zm3.123 7.545a.634.634 0 0 1-.737.07c-1.018-.842-1.228-1.264-1.79-2.07-1.684 1.719-2.912 2.245-5.087 2.245-2.597 0-4.632-1.614-4.632-4.807 0-2.526 1.369-4.21 3.298-5.053 1.685-.736 4.035-.877 5.825-1.087v-.386c0-.737.07-1.614-.386-2.246-.386-.561-1.088-.807-1.72-.807-1.192 0-2.245.597-2.49 1.86-.07.28-.246.561-.527.561l-2.982-.316c-.246-.07-.527-.245-.456-.631C42.083 1.087 45.347 0 48.294 0c1.509 0 3.474.386 4.667 1.544 1.508 1.403 1.368 3.298 1.368 5.333v4.807c0 1.439.596 2.07 1.158 2.877.21.281.245.632 0 .807-.667.527-1.79 1.51-2.421 2.036ZM9.416 9.86c0 1.193.036 2.21-.56 3.298-.492.877-1.264 1.403-2.141 1.403-1.193 0-1.895-.912-1.895-2.245 0-2.632 2.351-3.123 4.597-3.123v.667Zm3.088 7.544a.634.634 0 0 1-.736.07c-1.018-.842-1.229-1.264-1.79-2.07-1.684 1.719-2.912 2.245-5.088 2.245-2.596 0-4.631-1.614-4.631-4.807 0-2.526 1.368-4.21 3.298-5.053 1.684-.736 4.035-.877 5.825-1.087v-.386c0-.737.07-1.614-.386-2.246-.386-.561-1.088-.807-1.72-.807-1.193 0-2.245.597-2.49 1.86-.071.28-.247.561-.527.561l-2.983-.316c-.245-.07-.526-.245-.456-.631C1.522 1.087 4.785 0 7.732 0c1.51 0 3.474.386 4.667 1.544 1.509 1.403 1.369 3.298 1.369 5.333v4.807c0 1.439.596 2.07 1.157 2.877.211.281.246.632 0 .807-.666.527-1.789 1.51-2.42 2.036Z" fill="#000" /></svg>
          <svg class="w-auto h-10 translate-y-2 flex-shrink-0 col-span-1 sm:col-span-2 md:col-span-1 mx-auto" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M13.75 25.29c-1.504.265-3.035.344-4.618.555L4.302 11.7v14.753c-1.504.158-2.877.37-4.302.58V.008h4.012l5.49 15.334V.007h4.248v25.284Zm8.314-15.386c1.636 0 4.143-.079 5.648-.079v4.223c-1.874 0-4.064 0-5.648.079v6.281c2.48-.158 4.962-.37 7.469-.449v4.065l-11.692.924V.008h11.692V4.23h-7.47v5.674ZM45.236 4.23h-4.38v19.425c-1.426 0-2.851 0-4.224.052V4.23h-4.38V.007h12.984V4.23Zm6.862 5.384h5.78v4.223h-5.78v9.58h-4.144V.007h11.798V4.23h-7.654v5.384Zm14.516 10.108c2.401.053 4.83.238 7.178.37v4.17c-3.773-.238-7.548-.475-11.4-.555V.007h4.222v19.715Zm10.741 4.83c1.346.08 2.772.158 4.144.317V.007h-4.144v24.545ZM100 .007 94.642 12.86 100 27.033c-1.584-.211-3.167-.502-4.75-.766l-3.036-7.812-3.087 7.18c-1.531-.265-3.01-.344-4.54-.555l5.437-12.378L85.114.007h4.54l2.771 7.1 2.956-7.1H100Z" fill="#D81F26" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h100v27.04H0z" /></clipPath></defs></svg>
          <svg class="w-auto h-10 flex-shrink-0 col-span-1 sm:col-span-3 md:col-span-1 mx-auto" viewBox="0 0 100 29" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M22.37 5.849a.265.265 0 0 0-.24-.223c-.099-.008-2.043-.038-2.043-.038s-1.627-1.58-1.787-1.74c-.161-.16-.475-.112-.597-.076l-.816.253a5.729 5.729 0 0 0-.392-.96c-.578-1.105-1.427-1.69-2.451-1.691h-.004c-.071 0-.141.007-.213.012a3.128 3.128 0 0 0-.092-.106c-.446-.478-1.02-.71-1.705-.69-1.323.038-2.64.994-3.71 2.69-.751 1.195-1.323 2.696-1.486 3.858l-2.604.807c-.767.24-.792.264-.892.987-.074.547-2.081 16.064-2.081 16.064l16.817 2.909 7.29-1.812S22.388 5.986 22.37 5.849Zm-6.326-1.563-1.305.404c-.01-.67-.09-1.602-.402-2.408 1.004.19 1.498 1.327 1.707 2.004Zm-2.185.677-2.808.87c.272-1.04.786-2.075 1.418-2.752.235-.253.564-.534.954-.695.366.764.445 1.845.436 2.577ZM12.056 1.47c.311-.007.572.061.796.208a3.827 3.827 0 0 0-1.028.8c-.84.902-1.484 2.302-1.741 3.652l-2.306.714c.455-2.126 2.237-5.315 4.28-5.374Z" fill="#95BF47" /><path d="M22.131 5.627c-.1-.009-2.044-.038-2.044-.038s-1.626-1.58-1.787-1.74a.397.397 0 0 0-.225-.104v24.159l7.288-1.811S22.39 5.987 22.371 5.849a.266.266 0 0 0-.24-.223Z" fill="#5E8E3E" /><path d="m14.034 9.374-.846 3.167s-.945-.43-2.064-.36c-1.641.105-1.659 1.14-1.642 1.4.09 1.416 3.815 1.725 4.025 5.043.164 2.61-1.385 4.396-3.616 4.537-2.68.168-4.154-1.412-4.154-1.412l.568-2.414s1.484 1.12 2.672 1.045c.776-.05 1.054-.68 1.026-1.127-.117-1.847-3.151-1.738-3.343-4.774-.162-2.554 1.516-5.144 5.218-5.377 1.427-.092 2.156.272 2.156.272Z" fill="#fff" /><path d="M34.961 16.006c-.838-.455-1.269-.838-1.269-1.365 0-.67.598-1.101 1.533-1.101 1.088 0 2.059.455 2.059.455l.766-2.347s-.705-.551-2.778-.551c-2.885 0-4.884 1.652-4.884 3.974 0 1.317.933 2.323 2.18 3.041 1.005.574 1.364.982 1.364 1.58 0 .622-.503 1.125-1.436 1.125-1.392 0-2.705-.718-2.705-.718l-.814 2.346s1.213.814 3.256.814c2.968 0 5.1-1.46 5.1-4.094-.001-1.411-1.078-2.417-2.372-3.16Zm11.828-4.932c-1.46 0-2.61.694-3.495 1.747l-.048-.024 1.269-6.632H41.21l-3.208 16.88h3.304l1.102-5.77c.43-2.18 1.556-3.52 2.61-3.52.742 0 1.03.503 1.03 1.221 0 .455-.048 1.006-.144 1.46l-1.245 6.609h3.305l1.292-6.824c.144-.719.24-1.58.24-2.155-.001-1.868-.983-2.993-2.706-2.993Zm10.175 0c-3.974 0-6.607 3.59-6.607 7.589 0 2.562 1.58 4.62 4.549 4.62 3.902 0 6.536-3.495 6.536-7.589 0-2.37-1.39-4.62-4.478-4.62Zm-1.628 9.673c-1.125 0-1.604-.958-1.604-2.156 0-1.89.982-4.98 2.778-4.98 1.173 0 1.555 1.007 1.555 1.988 0 2.035-.98 5.148-2.729 5.148Zm14.557-9.673c-2.23 0-3.496 1.963-3.496 1.963h-.047l.192-1.772H63.62a70.668 70.668 0 0 1-.67 4.381l-2.299 12.09h3.304l.91-4.883h.072s.678.43 1.94.43c3.878 0 6.415-3.974 6.415-7.996 0-2.226-.982-4.213-3.4-4.213Zm-3.16 9.72c-.858 0-1.365-.479-1.365-.479l.55-3.088c.384-2.06 1.461-3.424 2.61-3.424 1.006 0 1.317.933 1.317 1.82 0 2.13-1.269 5.17-3.112 5.17ZM78.01 6.333c-1.053 0-1.891.838-1.891 1.915 0 .982.622 1.652 1.556 1.652h.048c1.03 0 1.915-.694 1.939-1.915 0-.958-.647-1.653-1.652-1.653Zm-4.62 16.711h3.303l2.251-11.707h-3.328l-2.227 11.707Zm13.958-11.73h-2.299l.12-.552c.191-1.125.862-2.13 1.963-2.13.358 0 .713.057 1.053.167l.647-2.586s-.575-.287-1.796-.287c-1.174 0-2.346.335-3.232 1.101-1.126.958-1.653 2.346-1.916 3.735l-.095.551H80.26l-.479 2.49h1.533l-1.748 9.242h3.305l1.748-9.242h2.274l.455-2.49Zm7.948.024s-2.065 5.203-2.993 8.044h-.048c-.063-.915-.814-8.045-.814-8.045H87.97l1.988 10.75c.049.239.025.383-.072.55-.383.742-1.03 1.461-1.796 1.988-.622.455-1.316.742-1.867.933l.91 2.802c.67-.143 2.059-.695 3.232-1.796 1.509-1.412 2.897-3.591 4.333-6.56l4.046-8.668h-3.447v.002Z" fill="#000" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h100v28.36H0z" /></clipPath></defs></svg>
          <svg class="w-auto h-10 flex-shrink-0 col-span-2 sm:col-span-3 md:col-span-1 mx-auto" viewBox="0 0 100 34" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M99.153 26.993a.843.843 0 0 1-.847-.847.85.85 0 0 1 .847-.847.85.85 0 0 1 .847.847c0 .46-.386.847-.847.847Zm0-1.53a.684.684 0 0 0-.683.683c0 .376.307.683.683.683a.684.684 0 0 0 .683-.683.684.684 0 0 0-.683-.683Zm.429 1.127h-.196l-.17-.317h-.222v.317h-.18v-.931h.445c.196 0 .318.127.318.307a.295.295 0 0 1-.196.28l.2.345Zm-.334-.486c.07 0 .138-.043.138-.138 0-.111-.058-.138-.138-.138h-.28v.28h.28v-.004Zm-88.52-.89h2.17v5.912h3.769v1.895h-5.939v-7.807Zm8.183 3.922v-.026c0-2.239 1.81-4.065 4.218-4.065s4.186 1.794 4.186 4.033v.027c0 2.238-1.81 4.064-4.218 4.064s-4.186-1.794-4.186-4.033Zm6.203 0v-.026c0-1.127-.805-2.101-2.006-2.101-1.18 0-1.974.958-1.974 2.085v.026c0 1.128.804 2.102 1.99 2.102 1.196 0 1.99-.958 1.99-2.086Zm4.858.46v-4.382h2.197v4.34c0 1.128.572 1.657 1.434 1.657.863 0 1.435-.513 1.435-1.598v-4.399h2.196v4.33c0 2.52-1.434 3.62-3.657 3.62-2.212-.005-3.604-1.122-3.604-3.567Zm10.575-4.382h3.007c2.783 0 4.408 1.599 4.408 3.854v.026c0 2.255-1.64 3.922-4.45 3.922h-2.965v-7.802Zm3.044 5.886c1.291 0 2.154-.71 2.154-1.974v-.027c0-1.254-.863-1.974-2.154-1.974h-.879v3.964h.879v.01Zm7.515-5.886h6.245v1.895h-4.09v1.334h3.699v1.794h-3.7v2.784h-2.154v-7.807Zm9.252 0h2.154v5.912h3.784v1.895h-5.944v-7.807h.006Zm11.59-.058h2.086l3.324 7.86h-2.324l-.571-1.392h-3.006l-.556 1.392h-2.27l3.318-7.86Zm1.906 4.785-.863-2.213-.878 2.213h1.741Zm6.293-4.727h3.69c1.195 0 2.016.307 2.545.847.46.445.693 1.043.693 1.82v.027c0 1.197-.64 1.99-1.598 2.393l1.863 2.725h-2.504l-1.572-2.365h-.947v2.365h-2.17v-7.812Zm3.589 3.742c.735 0 1.153-.36 1.153-.92v-.027c0-.614-.444-.921-1.17-.921h-1.418v1.863l1.435.005Zm6.457-3.742h6.277v1.837h-4.134v1.18h3.742v1.71h-3.742v1.238h4.187v1.837h-6.33v-7.802ZM5.997 30.052c-.307.683-.948 1.17-1.784 1.17-1.18 0-1.99-.99-1.99-2.102v-.026c0-1.127.794-2.085 1.974-2.085.89 0 1.572.545 1.853 1.291h2.28c-.36-1.863-2.005-3.244-4.117-3.244C1.81 25.06 0 26.882 0 29.12v.027c0 2.244 1.784 4.038 4.187 4.038 2.058 0 3.673-1.334 4.09-3.117l-2.28-.016Z" fill="#404041" /><path d="m93.908 12.76-5.97-3.424-1.032-.444-24.42.17v12.395h31.417l.005-8.696Z" fill="#fff" /><path d="M83.037 20.313c.29-1 .18-1.92-.307-2.604-.445-.624-1.196-.99-2.101-1.032L63.5 16.455a.33.33 0 0 1-.264-.138.382.382 0 0 1-.043-.307.472.472 0 0 1 .403-.307l17.28-.222c2.043-.095 4.272-1.752 5.05-3.784l.99-2.572a.518.518 0 0 0 .026-.334A11.226 11.226 0 0 0 75.97 0c-4.954 0-9.156 3.202-10.66 7.637a5.12 5.12 0 0 0-3.546-.99 5.061 5.061 0 0 0-4.52 4.52 5.15 5.15 0 0 0 .128 1.768 7.19 7.19 0 0 0-6.987 7.193c0 .35.027.693.069 1.043a.34.34 0 0 0 .334.29h31.613c.18 0 .349-.126.402-.306l.233-.842Z" fill="#F38020" /><path d="M88.494 9.31c-.154 0-.318 0-.471.016-.111 0-.207.084-.25.196l-.666 2.323c-.291 1-.18 1.921.307 2.604.445.624 1.196.99 2.101 1.032l3.647.222a.33.33 0 0 1 .264.138.388.388 0 0 1 .043.307.472.472 0 0 1-.402.307l-3.8.222c-2.06.096-4.272 1.752-5.05 3.785l-.28.709c-.059.137.042.28.195.28h13.042a.34.34 0 0 0 .333-.248 9.51 9.51 0 0 0 .35-2.53c0-5.16-4.203-9.363-9.363-9.363Z" fill="#FAAE40" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h100v33.185H0z" /></clipPath></defs></svg>
        </div>
      </div>
      <div class="absolute inset-y-32 -left-16">
        <img class="h-[350px] w-auto" src="/img/hero_image_1.png" alt="">
      </div>
      <div class="absolute inset-y-32 -right-16">
        <img class="h-[350px] w-auto" src="/img/hero_image_2.png" alt="">
      </div>
    </div>
  </section>

  <section class="h-auto bg-white">
    <div class="px-10 pt-24 mx-auto max-w-7xl">
      <div class="w-full mx-auto text-left md:text-center">
        <h1 class="mb-8 text-3xl font-extrabold leading-none max-w-5xl mx-auto tracking-normal text-gray-900 sm:text-6xl md:text-4xl lg:text-5xl md:tracking-tight">
          Kinerja <span class="w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 lg:inline">Investasi</span> dan<br class="lg:block hidden">  watchlist <span class="w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 lg:inline">Benefeed</span> VS IHSG
        </h1>
        <p class="px-0 mb-6 text-lg text-gray-600 md:text-xl lg:px-24">
          Say hello to the number one source for all your design needs. Drag and drop designs, edit designs, and modify the components to help tell your story.
        </p>
      </div>
    </div>
  </section>

  <section class="h-auto bg-white">
    <div class="overflow-hidden relative component_block bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl pt-8 md:pb-10 lg:pt-16 lg:pb-32 flex flex-col w-full h-full items-center justify-center mx-auto">
        <div class="flex items-center h-full w-full rounded-md">
          <div class="lg:grid lg:grid-cols-12 lg:gap-8 flex flex-col w-full items-center pt-10 pb-0 md:pb-10 relative">
            <div class="px-8 xl:px-5 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-7 lg:text-left">
              <h1 class="mt-1 text-5xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-7xl">
                The Free <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">LMS</span>
              </h1>
              <p class="font-semibold text-5xl sm:text-6xl">
                for your company
              </p>
              <p class="mt-3 text-base text-gray-500 sm:mt-7 sm:text-xl lg:text-lg xl:text-xl lg:pr-32">
                Learning and educating your team should be fun and enjoyable for employees and managers. <br>
              </p>
              <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <button class="w-full sm:w-auto shadow flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-bold rounded-full text-white bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-500 hover:to-blue-400 focus:outline-none transition duration-150 ease-in-out md:py-4 md:text-base cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Sign Up Today
                </button>
                <div class="mt-3 cursor-pointer sm:mt-0 sm:ml-3">
                  <div href="/pricing" class="w-full flex items-center relative justify-center pl-12 pr-8 py-3 border border-gray-100 text-base leading-6 font-bold rounded-full text-indigo-500 bg-gray-100 hover:text-indigo-400 hover:bg-gray-200 focus:outline-none focus:shadow-outline-indigo focus:border-gray-100 transition duration-150 ease-in-out md:py-4 md:text-base cursor-pointer">
                    <span class="text-3xl absolute left-0 ml-3 sm:block hidden">🍿</span>
                    <span class="">See How It Works</span>
                  </div>
                </div>
              </div>
              <p class="text-sm text-gray-400 mb-4 font-medium mt-8">
                <span class="text-indigo-500 sm:mr-2 sm:ml-2">Free, for up to 50 users.</span> Setup in less than 15 minutes.
              </p>
            </div>
            <div class="mt-12 pr-0 lg:pr-2 relative w-full sm:max-w-lg sm:mx-auto justify-center lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-5 lg:flex lg:items-center">
              <div class="bg-transparent p-2 relative">
                <div class="absolute inset-0 opacity-30 blur-xl animate-pulse" style="background-image:linear-gradient(120deg, #5145cd -0.55%, #37BDF9 22.86%, #37BDF9 48.36%, #17BC9B 73.33%, #17BC9B 99.34%)" />
                <div class="bg-white sm:max-w-md py-10 px-10 sm:w-full relative sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                  <div>
                    <div class="mx-auto w-full max-w-sm">
                      <div class="mx-auto w-full max-w-sm">
                        <div class="flex w-full items-center text-indigo-700">
                          <h2 class="text-xl font-bold text-gray-700">
                            Voted the BEST LMS. Find out Why 👇
                          </h2>
                        </div>
                        <div class="mt-5">
                          <div class="mt-5">
                            <form onsubmit="e.preventDefault()" class="">
                              <div class="mb-5">
                                <div class="grid grid-cols-2">
                                  <label for="first_name" class="col-span-1 block text-sm font-medium leading-5 text-gray-600">
                                    First Name
                                  </label>
                                  <label for="last_name" class="col-span-1 ml-2 block text-sm font-medium leading-5 text-gray-600">
                                    Last Name
                                  </label>
                                </div>
                                <div class="mt-1 flex grid grid-cols-2 gap-4">
                                  <div class="rounded-md shadow-sm">
                                    <input name="first_name" type="text" class="col-span-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-indigo-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAfBJREFUWAntVk1OwkAUZkoDKza4Utm61iP0AqyIDXahN2BjwiHYGU+gizap4QDuegWN7lyCbMSlCQjU7yO0TOlAi6GwgJc0fT/fzPfmzet0crmD7HsFBAvQbrcrw+Gw5fu+AfOYvgylJ4TwCoVCs1ardYTruqfj8fgV5OUMSVVT93VdP9dAzpVvm5wJHZFbg2LQ2pEYOlZ/oiDvwNcsFoseY4PBwMCrhaeCJyKWZU37KOJcYdi27QdhcuuBIb073BvTNL8ln4NeeR6NRi/wxZKQcGurQs5oNhqLshzVTMBewW/LMU3TTNlO0ieTiStjYhUIyi6DAp0xbEdgTt+LE0aCKQw24U4llsCs4ZRJrYopB6RwqnpA1YQ5NGFZ1YQ41Z5S8IQQdP5laEBRJcD4Vj5DEsW2gE6s6g3d/YP/g+BDnT7GNi2qCjTwGd6riBzHaaCEd3Js01vwCPIbmWBRx1nwAN/1ov+/drgFWIlfKpVukyYihtgkXNp4mABK+1GtVr+SBhJDbBIubVw+Cd/TDgKO2DPiN3YUo6y/nDCNEIsqTKH1en2tcwA9FKEItyDi3aIh8Gl1sRrVnSDzNFDJT1bAy5xpOYGn5fP5JuL95ZjMIn1ya7j5dPGfv0A5eAnpZUY3n5jXcoec5J67D9q+VuAPM47D3XaSeL4AAAAASUVORK5CYII=&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;">
                                  </div>
                                  <div class="rounded-md shadow-sm">
                                    <input name="last_name" type="text" class="col-span-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-indigo-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                                  </div>
                                </div>
                                <div class="mt-1" />
                              </div>
                              <div>
                                <label for="email" class="block text-sm font-medium leading-5 text-gray-600">
                                  Business Email Address
                                </label>
                                <div class="mt-1 rounded-md shadow-sm">
                                  <input name="email" type="email" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-indigo-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                                </div>
                              </div>
                              <div class="mt-6">
                                <button type="submit" class="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-500 hover:to-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                  Create My Free Account
                                </button>
                              </div>
                            </form>
                            <div class="pt-6 px-2 sm:block hidden">
                              <p class="text-xs leading-5 text-gray-500">
                                Everything you need for an internal learning management system for your team and employees.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img src="https://cdn.devdojo.com/images/august2022/character.png" class="absolute bottom-0 translate-y-40 sm:block hidden left-1/2 ml-40 lg:mb-0 -mb-8 lg:-ml-20 transform w-48 h-auto">
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="w-full bg-white">
    <div class="py-10 mx-auto max-w-7xl md:px-8">
      <div>
        <h1 class="font-bold text-3xl">
          Our Products
        </h1>
      </div>
      <div class="flex flex-col mt-10 md:flex-row md:mt-8 md:space-x-8">
        <div
          class="flex flex-col items-center justify-center flex-1 overflow-hidden text-center bg-gray-100 md:rounded-xl"
        >
          <div class="flex flex-col px-10 pb-8 pt-8 sm:px-16">
            <h3 class="text-xl leading-none">
              Equity Trading
            </h3>
            <p
              class="mt-5 text-3xl mb-4 font-semibold leading-none tracking-tighter md:text-4xl"
            >
              Become a trading partner
            </p>

            <p class="font-light text-gray-600">
              Just trade in your eligible computer for credit or recycle it for
              free. It’s good for you and the planet.
            </p>
            <a
              href="#_"
              class="bg-primary-500 text-white mt-8 mx-auto inline-block rounded-full px-5 py-1.5"
            >Learn more
            </a>
          </div>
          <img
            class="h-[350px] w-auto"
            src="/illustrations/business-3d-young-people-in-casual-clothes-standing.png"
          >
        </div>
        <div
          class="flex flex-col items-center justify-center flex-1 overflow-hidden text-center bg-gray-100 md:rounded-xl"
        >
          <div class="flex flex-col px-10 pb-8 pt-8 sm:px-16">
            <h3 class="text-xl leading-none">
              Fixed Income
            </h3>
            <p
              class="mt-5 text-3xl mb-4 font-semibold leading-none tracking-tighter md:text-4xl"
            >
              Better understand fixed income
            </p>

            <p class="font-light text-gray-600">
              Just trade in your eligible computer for credit or recycle it for
              free. It’s good for you and the planet.
            </p>
            <a
              href="#_"
              class="bg-primary-500 text-white mt-8 mx-auto inline-block rounded-full px-5 py-1.5"
            >Learn more
            </a>
          </div>
          <img
            class="h-[350px] w-auto"
            src="/illustrations/business-3d-close-up-of-businessman-in-dark-blue-suit-giving-thumbs-up.png"
          >
        </div>
      </div>
      <div class="flex flex-col mt-10 md:flex-row md:mt-8 md:space-x-8">
        <div
          class="flex flex-col items-center justify-center flex-1 overflow-hidden text-center bg-gray-100 md:rounded-xl"
        >
          <div class="flex flex-col px-10 pb-8 pt-8 sm:px-16">
            <h3 class="text-xl leading-none">
              Research
            </h3>
            <p
              class="mt-5 text-3xl mb-4 font-semibold leading-none tracking-tighter md:text-4xl"
            >
              Maximizing added value
            </p>

            <p class="font-light text-gray-600">
              We provide our clients with a unique perspective, in-depth
              knowledge, and conviction.
            </p>
            <a
              href="#_"
              class="bg-primary-500 text-white mt-8 mx-auto inline-block rounded-full px-5 py-1.5"
            >Learn more
            </a>
          </div>
          <img
            class="h-[350px] w-auto"
            src="/illustrations/business-3d-close-up-of-businesswoman-in-red-suit-with-paper-coffee-cup.png"
          >
        </div>
        <div
          class="flex flex-col items-center justify-center flex-1 overflow-hidden text-center bg-gray-100 md:rounded-xl"
        >
          <div class="flex flex-col px-10 pb-8 pt-8 sm:px-16">
            <h3 class="text-xl leading-none">
              Investment Banking
            </h3>
            <p
              class="mt-5 text-3xl mb-4 font-semibold leading-none tracking-tighter md:text-4xl"
            >
              Achieve short & long term goals
            </p>

            <p class="font-light text-gray-600">
              Our investment banking team brings a wealth of experience and a
              vast network with one-goal in mind: to maximize value.
            </p>
            <a
              href="#_"
              class="bg-primary-500 text-white mt-8 mx-auto inline-block rounded-full px-5 py-1.5"
            >Learn more
            </a>
          </div>
          <img class="h-[350px] w-auto" src="/illustrations/old-man.png">
        </div>
      </div>
    </div>
  </section>

  <section class="w-full px-10 py-12 bg-white lg:py-20">
    <div class="relative flex max-w-5xl px-24 py-16 mx-auto bg-indigo-500 rounded-lg lg:py-20">
      <div class="flex">
        <div class="relative z-50 md:w-7/12">
          <svg class="absolute w-6 h-auto -ml-10 text-indigo-400 fill-current" viewBox="0 0 100 84" xmlns="http://www.w3.org/2000/svg"><path d="M40.87 0C28.12 0 18.117 3.91 10.873 11.826 3.613 19.742 0 32.09 0 48.913v34.941H42.032V46.112H21.745c0-9.242 1.509-16.114 4.468-20.613 2.959-4.5 7.838-6.762 14.656-6.762V0zm57.64 0c-6.375 0-12.052.938-17.039 2.86-4.987 1.922-9.271 4.866-12.78 8.877-3.507 4.026-6.196 9.133-8.071 15.34-1.861 6.223-2.8 13.478-2.8 21.836v34.941H100V46.112H79.744c0-9.242 1.48-16.114 4.438-20.613 2.959-4.5 7.74-6.762 14.328-6.762V0z" /></svg>
          <blockquote class="text-2xl font-thin text-white lg:text-3xl">
            Saved me so much time! I would highly recommend this tool to all my friends and co-workers.
          </blockquote>
          <p class="mt-3 text-sm text-indigo-300">
            Jake Smith, Founder @ DevStudio Inc.
          </p>
          <p class="mt-10 text-xs text-indigo-300">
            Want to see it in action? No credit card required.
          </p>
          <a href="#_" class="inline-block w-full px-10 py-3 mt-4 text-base font-medium text-center text-indigo-500 bg-gray-100 rounded md:w-auto">Start your free 14-day trial</a>
        </div>
      </div>
      <img src="https://cdn.devdojo.com/images/august2021/user-bg.png" class="absolute bottom-0 right-0 z-20 block h-full mr-6 origin-bottom transform scale-90 opacity-10 lg:hidden lg:mr-12">
      <img src="https://cdn.devdojo.com/images/august2021/user-bg.png" class="absolute bottom-0 right-0 z-20 hidden h-full mr-6 origin-bottom transform scale-110 lg:block lg:mr-12">
    </div>
  </section>
</template>
