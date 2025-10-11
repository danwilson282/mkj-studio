import {defineConfig} from 'sanity'
import { presentationTool } from 'sanity/presentation'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schema} from './schema'
import { media } from 'sanity-plugin-media'
export default defineConfig({
  name: 'default',
  title: 'mkj-test',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID || "",
  dataset: 'production',

  plugins: [
    structureTool(), 
    visionTool(),
    presentationTool({
      previewUrl: {
        initial: process.env.SANITY_STUDIO_BASE_URL,
        preview: "/",
        previewMode: {
          enable: '/api/draft-mode/enable',
          disable: '/api/draft-mode/disable',
        },
      },
      allowOrigins: ['http://localhost:*'],
    }),
    media()
  ],

  schema: {
    types: schema,
  },
})
