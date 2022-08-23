import { acceptHMRUpdate, defineStore } from 'pinia'
import { usePrismic } from '@prismicio/vue'

export const useProductStore = defineStore('product', {
  state: () => ({
    isLoading: true,
    products: [{}],
    product: {},
  }),
  actions: {
    async fetchProductDocuments() {
      this.isLoading = true

      const { client: prismic, predicate } = usePrismic()
      const document = await prismic.query(predicate.at('document.type', 'products'))
      console.log(document)

      this.products = document.results

      this.isLoading = false
    },
    async fetchProductDetail(uid: string) {
      this.isLoading = true

      const { client: prismic } = usePrismic()
      const document = await prismic.getByUID('products', uid)
      console.log(document)

      this.product = document.data

      this.isLoading = false
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
