import { acceptHMRUpdate, defineStore } from 'pinia'
import { usePrismic } from '@prismicio/vue'

export const useAboutStore = defineStore('about', {
  state: () => ({
    isLoading: true,
    heros: {
      title: '',
      description: '',
      image: '',
    },
    ourTeam: {
    },
    vision: {
      title: '',
      description: '',
      image: '',
    },
    mission: {
      title: '',
      description: '',
      image: '',
    },

  }),
  actions: {
    async fetchAboutDocument() {
      this.isLoading = true

      const { client: prismic } = usePrismic()

      const document = await prismic.getSingle('about') // follow prismic aboutID (about)
      console.log(document)
      console.log(document.data)

      this.heros = {
        ...this.heros,
        ...{
          title: document.data.main_title,
          description: document.data.main_story,
          image: document.data.main_thumbnail,
        },
      }
      this.vision = {
        ...this.vision,
        ...{
          title: document.data.vision_title,
          description: document.data.vision_text,
          image: document.data.vision_thumbnail,
        },
      }
      this.mission = {
        ...this.heros,
        ...{
          title: document.data.mission_title,
          description: document.data.mission_text,
          image: document.data.mission_thumbnail,
        },
      }

      this.isLoading = false
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
