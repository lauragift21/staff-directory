import { Hono } from 'hono'
import { basicAuth } from 'hono/basic-auth'

const app = new Hono()

app.use(
  '/admin',
  basicAuth({
    username: 'admin',
    password: 'saycheese',
  })
)



export default app;