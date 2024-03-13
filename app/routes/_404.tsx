import { NotFoundHandler } from 'hono'

const handler: NotFoundHandler = (c) => {
  return c.render(<h1>Sorry, Not Found...</h1>)
}

export default handler