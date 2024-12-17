import { getToken } from '#auth'
import { eventHandler } from 'h3'

export default eventHandler(event => getToken({ event }))
