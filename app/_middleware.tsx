import { Hono } from 'hono'
import { basicAuth } from 'hono/basic-auth'

const app = new Hono()

app.use(
  '/employees/',
  basicAuth({
    username: 'admin',
    password: 'admin',
  })
)

app.get('/create', (c) => {
  return c.text('You are authorized')
})


export default app;