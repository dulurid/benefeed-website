import { useSinglePrismicDocument } from '@prismicio/vue'

export const useHome = () => {
  const loading = ref()
  const { data: document, state, error, refresh } = useSinglePrismicDocument('home_page')

  loading.value = state

  return {
    document,
    state,
    error,
    refresh,
    loading,
  }
}
