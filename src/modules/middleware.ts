import type { UserModule } from '~/types'

export const install: UserModule = ({ router, isClient }) => {
  if (!isClient)
    return

  /**
   * Router Hooks
   */
  router.beforeEach(async () => {
  })
}
