import { basicAuth } from 'hono/basic-auth'
import  { createRoute } from 'honox/factory'

export default createRoute(
  basicAuth({
    username: 'admin',
    password: 'saycheese'
  })
);