import { getServerSession } from '#auth'
import { createError, eventHandler } from 'h3'

export default eventHandler(async (event) => {
  // Only protect a certain backend route
  if (!event.node.req.url?.startsWith('/api/protected/middleware')) {
    return
  }

  const session = await getServerSession(event)
  if (!session) {
    throw createError({ statusMessage: 'Unauthenticated', statusCode: 403 })
  }
})
