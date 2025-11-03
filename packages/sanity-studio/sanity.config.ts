import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'The Word Alchemists',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'placeholder',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',

  plugins: [
    structureTool(),
    visionTool(), // برای تست کردن GROQ queries
  ],

  schema: {
    types: schemaTypes,
  },
})