import type { DefaultSession } from 'next-auth'

interface Subscription {
  id: number
  status: 'ACTIVE' | 'INACTIVE'
}

interface ExtendedUserSession extends DefaultSession.user {
  id?: string
  name: string
  avatar?: string
  email?: string
  role?: 'admin' | 'guest' | 'account'
  subscriptions?: Subscription[]
}

interface ExtendedSession extends DefaultSession {
  user: ExtendedUserSession
}

// Extend the NuxtAuth Session type with more information we pass in /server/api/auth/[...].ts
declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  type Session = ExtendedSession
}
