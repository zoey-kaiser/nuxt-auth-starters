interface Subscription {
  id: number
  status: 'ACTIVE' | 'INACTIVE'
}

export interface UserData {
  id: string
  name: string
  avatar: string
  role: 'admin' | 'guest' | 'account'
  subscriptions: Subscription[]
}

// This list of users is only for demonstration. In your application these should be saved in a database!
export const DEMO_USERS: Record<string, UserData> = {
  'jsmith@auth.com': {
    id: '198372',
    name: 'Jordan Smith',
    avatar: 'https://avatar.iran.liara.run/public/13',
    role: 'admin',
    subscriptions: [{ id: 4081, status: 'ACTIVE' }, { id: 2931, status: 'INACTIVE' }],
  },
  'klang@auth.com': {
    id: '22337',
    name: 'Karolina Lang',
    avatar: 'https://avatar.iran.liara.run/public/98',
    role: 'account',
    subscriptions: [{ id: 2612, status: 'INACTIVE' }, { id: 2122, status: 'ACTIVE' }, { id: 2178, status: 'ACTIVE' }],
  }
}
