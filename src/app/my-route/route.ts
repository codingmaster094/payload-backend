import { NextRequest } from 'next/server'
import configPromise from '@payload-config'
import { getPayload, type GlobalSlug } from 'payload'

const allowedGlobals: GlobalSlug[] = [
  'home',
  'asthetik',
  'naturheilmedizin',
  'uber-mich',
  'kontakt',
  'impressum',
  'datenschutzerklarung'
] 

export const GET = async (req: NextRequest) => {
  try {
    const url = new URL(req.url)
    const type = url.searchParams.get('type')
    const slug = url.searchParams.get('slug')

    const payload = await getPayload({ config: await configPromise })

    if (!type) {
      return new Response(JSON.stringify({ error: 'Missing type parameter' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    switch (type) {
      case 'users': {
        const users = await payload.find({ collection: 'users' })
        return new Response(JSON.stringify(users), {
          headers: { 'Content-Type': 'application/json' },
        })
      }

      case 'menus': {
        const menus = await payload.find({ collection: 'menus', depth: 2 })
        return new Response(JSON.stringify(menus.docs), {
          headers: { 'Content-Type': 'application/json' },
        })
      }

      case 'header': {
        const headerSettings = await payload.find({
          collection: 'header',
          limit: 1,
        })
        return new Response(JSON.stringify(headerSettings.docs[0]), {
          headers: { 'Content-Type': 'application/json' },
        })
      }

      case 'footer': {
        const footerSettings = await payload.find({
          collection: 'footer',
          limit: 1,
        })
        return new Response(JSON.stringify(footerSettings.docs[0]), {
          headers: { 'Content-Type': 'application/json' },
        })
      }

      case 'review': {
        const review = await payload.find({
          collection: 'review',
          limit: 1,
        })
        return new Response(JSON.stringify(review.docs[0]), {
          headers: { 'Content-Type': 'application/json' },
        })
      }

      case 'landing': {
        if (!slug) {
          return new Response(JSON.stringify({ error: 'Missing slug for landing page' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
          })
        }
      
        const page = await payload.find({
          collection: 'landing',
          where: {
            slug: {
              equals: slug,
            },
          },
          depth: 3,
        })
      
        if (!page.docs || page.docs.length === 0) {
          return new Response(JSON.stringify({ error: 'Landing page not found' }), {
            status: 404,
            headers: { 'Content-Type': 'application/json' },
          })
        }
      
        return new Response(JSON.stringify(page.docs[0]), {
          headers: { 'Content-Type': 'application/json' },
        })
      }
      

      case 'global': {
        if (!slug || !allowedGlobals.includes(slug as GlobalSlug)) {
          return new Response(JSON.stringify({ error: `Invalid or missing global slug` }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
          })
        }

        try {
          const global = await payload.findGlobal({ slug: slug as GlobalSlug })
          return new Response(JSON.stringify(global), {
            headers: { 'Content-Type': 'application/json' },
          })
        } catch (err) {
          console.error('Error fetching global:', err)
          return new Response(JSON.stringify({ error: `Global "${slug}" not found` }), {
            status: 404,
            headers: { 'Content-Type': 'application/json' },
          })
        }
      }

      default: {
        return new Response(JSON.stringify({ error: `Unknown type "${type}"` }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        })
      }
    }
  } catch (error) {
    console.error('Error in route handler:', error)
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
