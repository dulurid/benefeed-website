import type { UserModule } from '~/types'
import { useHomeStore } from '~/store/home.stores'

export const install: UserModule = ({ router, isClient }) => {
  if (!isClient)
    return

  /**
   * Router Hooks
   */
  router.beforeEach(async (to) => {
    const homeStore = useHomeStore()
    console.log(homeStore.isLoading)
    console.log('Called Router Hooks')
    console.log(to)
  })
}
