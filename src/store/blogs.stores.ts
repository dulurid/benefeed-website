import { acceptHMRUpdate, defineStore } from 'pinia'
import { usePrismic } from '@prismicio/vue'

export const useBlogsStore = defineStore('blogs', {
  state: () => ({
    isLoading: true,
    blogs: [{}],
    blog: {},
  }),
  actions: {
    async fetchAll() {
      this.isLoading = true

      const { client: prismic, predicate } = usePrismic()
      const document = await prismic.query(predicate.at('document.type', 'blogs'))
      console.log(document)

      const results = document.results
      this.blogs = results.map((item) => {
        return {

          uid: item.uid,
          title: item.data.title,
          content: item.data.content,
          author: item.data.author,
          image: item.data.thumbnail,
          date: item.data.first_publication_date,
        }
      })

      this.isLoading = false
    },
    async fetchDetail(uid: string) {
      this.isLoading = true

      const { client: prismic } = usePrismic()
      const document = await prismic.getByUID('blogs', uid)
      console.log(document)

      this.blog = document.data

      this.isLoading = false
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
