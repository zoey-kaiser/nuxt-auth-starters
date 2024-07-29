import { sign } from 'jsonwebtoken'
import { z } from 'zod'
import type { UserData } from '~/server/users'
import { DEMO_USERS, DEMO_USERS_REFRESH } from '~/server/users'

export const SECRET = 'dummy'
export const EXPIRY_TIME = 60

const loginBodySchema = z.object({
    refreshToken: z.string(),
})

// JUST MOCK IMPLEMENTATION, MAKE SURE TO USE YOUR OWN
export default eventHandler(async (event) => {
    // Parse the request body
    const formData = loginBodySchema.safeParse(await readBody(event))
    if (!formData.success) {
        throw createError({ statusCode: 403, statusMessage: 'Incorrect credentials' })
    }

    // Find the user from the "database"
    const userRefreshData = DEMO_USERS_REFRESH.find(u => u.refreshToken === formData.data.refreshToken)
    if (!userRefreshData) {
        throw createError({ statusCode: 403, statusMessage: 'User not found' })
    }
    
    const userKey = (Object.keys(DEMO_USERS)).find(k => DEMO_USERS[k].id === userRefreshData.id)
    if (!userKey) {
        throw createError({ statusCode: 403, statusMessage: 'User not found' })
    }
    
    const userData = DEMO_USERS[userKey]

    const user: UserData & { email: string } = {
        email: userKey,
        ...userData
    }

    const accessToken = sign({ ...user, scope: ['user'] }, SECRET, { expiresIn: EXPIRY_TIME })
    const refreshToken = sign({ ...user, scope: ['refresh'] }, SECRET, { expiresIn: EXPIRY_TIME })
    
    userRefreshData.refreshToken = refreshToken

    return { token: { accessToken, refreshToken} }
})