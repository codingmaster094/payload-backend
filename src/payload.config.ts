// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Header } from './collections/Header'
import { Footer } from './collections/Footer'
import { Menus } from './collections/Menus'
import { Review } from './collections/Review'
import { LandingPages } from './collections/LandingPages'
import { Home } from './globals/Home'
import { Asthetik } from './globals/Asthetik'
import { Naturheilmedizin } from './globals/Naturheilmedizin'
import { Ubermich } from './globals/Ubermich'
import { Kontakt } from './globals/Kontakt'
import { Impressum } from './globals/Impressum'
import { Datenschutzerklarung } from './globals/Datenschutzerklarung'
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
export default buildConfig({
  serverURL: 'https://payload-backend-20uj.onrender.com',
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  globals: [Home, Asthetik, Naturheilmedizin, Ubermich, Kontakt, Impressum, Datenschutzerklarung],
  collections: [Users, Media, Header, Footer, Menus, Review, LandingPages],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
