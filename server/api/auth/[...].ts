import CredentialsProvider from 'next-auth/providers/credentials'
import GithubProvider from 'next-auth/providers/github'
import { NuxtAuthHandler } from '#auth'

export default NuxtAuthHandler({
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: '/auth/signin'
  },
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    GithubProvider.default({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    }),
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    CredentialsProvider.default({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: '(hint: jsmith@auth.com)' },
        password: { label: 'Password', type: 'password', placeholder: '(hint: hunter2)' },
      },
      authorize(credentials: any) {
        console.warn('ATTENTION: You should replace this with your real providers or credential provider logic! The current setup is not safe')
        const user = {
          name: 'J Smith',
          email: 'jsmith@auth.com',
        }

        if (credentials?.email === user.email && credentials?.password === 'hunter2') {
          return user
        }
        else {
          console.error('Warning: Malicious login attempt registered, bad credentials provided')
          return null
        }
      },
    }),
  ],
  callbacks: {
    session({ session }) {
      return ({
        ...session,
        user: {
          ...session.user,
          id: '1',
          avatar: 'https://avatar.iran.liara.run/public/13',
          role: 'admin',
          subscriptions: [{ id: 4081, status: 'ACTIVE' }, { id: 2931, status: 'INACTIVE' }],
        }
      })
    }
  }
})
