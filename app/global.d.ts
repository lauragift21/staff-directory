import {} from 'hono'

type Head = {
  title?: string
  hasScript?: string
}

declare module 'hono' {
  interface Env {
    Variables: {}
    Bindings: {
      DB: D1Database,
      MY_BUCKET: R2Bucket
    }
  }
  interface ContextRenderer {
    (content: string | Promise<string>, head?: Head): Response | Promise<Response>
  }
}
