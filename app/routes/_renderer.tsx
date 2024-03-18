import { jsxRenderer } from 'hono/jsx-renderer'
import { Script } from 'honox/server'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'

export default jsxRenderer(({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {import.meta.env.PROD ? (
          <>
          <link href='/static/assets/style.css' rel='stylesheet' />
          <script type='module' src='/static/client.js'></script>
          </>
        ) : (
          <>
          <link href='/app/style.css' rel='stylesheet' />
          <script type='module' src='/app/client.ts'></script>
          </>
        )}
        <title>{title}</title>
        <Script src="/app/client.ts" async />
      </head>
      <Nav />
      <body className="max-w-screen-xl mx-auto p-4 dark:bg-gray-800 flex flex-col min-h-screen">{children}</body>
      <Footer />
    </html>
  )
})
