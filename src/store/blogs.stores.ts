import { acceptHMRUpdate, defineStore } from 'pinia'
import { usePrismic } from '@prismicio/vue'
import dayjs from 'dayjs'

export const useBlogsStore = defineStore('blogs', {
  state: () => ({
    isLoading: true,
    blogs: [{}],
    featuredBlog: {},
    blog: {
      title: '',
    },
    detailBlog: [{}],
  }),
  actions: {
    async fetchAll() {
      this.isLoading = true

      const { client: prismic, predicate, asText } = usePrismic()
      const document = await prismic.query(
        predicate.at('document.type', 'blogs'),
        {
          orderings: {
            field: 'document.first_publication_date',
            direction: 'desc',
          },
        },
      )

      const results = document.results
      this.blogs = results.map((item) => {
        console.log(item.data.title)
        return {
          uid: item.uid,
          title: asText(item.data.title),
          content: item.data.content,
          author: item.data.author,
          image: item.data.thumbnail,
          date: dayjs(item.first_publication_date).format('DD-MM-YYYY'),
        }
      })

      this.detailBlog = results.map((item) => {
        console.log(item.data.title)
        return {
          uid: item.uid,
          title: asText(item.data.title),
          content: item.data.content,
          author: item.data.author,
          image: item.data.thumbnail,
          date: dayjs(item.first_publication_date).format('DD-MM-YYYY'),
        }
      })

      this.featuredBlog = this.blogs[0]
      this.detailBlog.splice(3)
      this.blogs.splice(0, 1)
      this.isLoading = false
    },
    async fetchDetail(uid: string) {
      this.isLoading = true

      const { client: prismic } = usePrismic()
      const document = await prismic.getByUID('blogs', uid)
      console.log(document)
      this.blog = {
        ...this.blog,
        ...{
          title: document.data.title,
          author: document.data.author,
          image: document.data.thumbnail,
          content: document.data.content,
          date: dayjs(document.first_publication_date).format('DD-MM-YYYY'),
        },
      }
      this.isLoading = false
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
