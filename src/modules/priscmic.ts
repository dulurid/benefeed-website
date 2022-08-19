import { createPrismic } from '@prismicio/vue'
import { type UserModule } from '~/types'

// Setup Prismic
// @see https://prismic.io/docs/technical-reference/prismicio-vue?version=v3#set-up-the-plugin
export const install: UserModule = ({ app }) => {
  const prismic = createPrismic({
    endpoint: 'https://benefeeddulur.prismic.io/api/v2',
  })
  app.use(prismic)
}
