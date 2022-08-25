import { acceptHMRUpdate, defineStore } from 'pinia'
import { usePrismic } from '@prismicio/vue'

export const useCareersStore = defineStore('product', {
  state: () => ({
    isLoading: true,
    careers: [{}],
    career: {},
  }),
  actions: {
    async fetchAll() {
      this.isLoading = true

      const { client: prismic, predicate } = usePrismic()
      const document = await prismic.query(predicate.at('document.type', 'careers'))
      console.log(document)

      const results = document.results
      this.careers = results.map((item) => {
        return {
          id: item.id,
          uid: item.uid,
          position: item.data.position,
          type: 'Full Time',
          location: 'Surabaya',
          imageUrl: '',
        }
      })

      this.isLoading = false
    },
    async fetchDetail(uid: string) {
      this.isLoading = true

      const { client: prismic } = usePrismic()
      const document = await prismic.getByUID('careers', uid)
      console.log(document)

      this.career = document.data

      this.isLoading = false
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
