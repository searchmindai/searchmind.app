import type { ServiceContext } from '@vtex/api'

declare global {
  type Context = ServiceContext<Clients>
}
