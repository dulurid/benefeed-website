import { acceptHMRUpdate, defineStore } from 'pinia'
import { usePrismic } from '@prismicio/vue'

export const useHomeStore = defineStore('home', {
  state: () => ({
    isLoading: true,
    isFinished: false,
    heros: {
      headline: '',
      description: '',
      imageRight: '',
      imageLeft: '',
    },
    clients: {},
    featured: {},
    products: {},
  }),
  actions: {
    async fetchHomeDocument() {
      this.isLoading = true

      const { client } = usePrismic()
      const document = await client.getSingle('home_page')
      console.log(document)

      this.heros = {
        ...this.heros,
        ...{
          headline: document.data.titlehome,
          description: document.data.text1,
          imageRight: document.data.herosimg1,
          imageLeft: document.data.herosimg2,
        },
      }
      this.isLoading = false
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
