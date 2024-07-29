import { sign } from 'jsonwebtoken'
import { z } from 'zod'
import type { UserData } from '~/server/users'
import { DEMO_USERS, DEMO_USERS_REFRESH } from '~/server/users'

export const SECRET = 'dummy'
export const EXPIRY_TIME = 60

const loginBodySchema = z.object({
  email: z.string().email(),
  password: z.literal('hunter2'),
})

export default eventHandler(async (event) => {
  // Parse the request body
  const formData = loginBodySchema.safeParse(await readBody(event))
  if (!formData.success) {
    throw createError({ statusCode: 403, statusMessage: 'Incorrect credentials' })
  }

  // Find the user from the "database"
  const userData = DEMO_USERS[formData.data.email]
  if (!userData) {
    throw createError({ statusCode: 403, statusMessage: 'Incorrect credentials' })
  }

  const user: UserData & { email: string } = {
    email: formData.data.email,
    ...userData
  }

  const accessToken = sign({ ...user, scope: ['user'] }, SECRET, { expiresIn: EXPIRY_TIME })
  const refreshToken = sign({ ...user, scope: ['refresh'] }, SECRET, { expiresIn: EXPIRY_TIME })
  
  const userRefreshToken = DEMO_USERS_REFRESH.find(u => u.id === userData.id);

  if (userRefreshToken) {
    userRefreshToken.refreshToken = refreshToken
  } else {
    DEMO_USERS_REFRESH.push({ id: userData.id, refreshToken })
  }
  
  return { token: { accessToken, refreshToken} }
})
