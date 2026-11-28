import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One collection holds every page in every language.
// Pages that are translations of each other share the same `key`.

const owner = z.enum(['code', 'ai', 'team', 'user']);

const flowStep = z.object({
  name: z.string(),
  owner,
  who: z.string().optional(), // custom owner label, e.g. "Customer manager"
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    lang: z.enum(['en', 'de', 'bg']),
    key: z.string(),
    type: z.enum(['home', 'hub', 'service', 'role', 'industry', 'case', 'page', 'legal']),
    path: z.string().regex(/^\/(.+\/)?$/, 'path must start and end with "/"'),
    parent: z.string().optional(),
    order: z.number().default(100),

    // SEO
    title: z.string().max(70),
    description: z.string().min(70).max(170),
    noindex: z.boolean().default(false),

    // Labels and cards
    nav: z.string(),
    summary: z.string().optional(),

    // Page head
    eyebrow: z.string().optional(),
    h1: z.string(),
    lead: z.string().optional(),
    badge: z.string().optional(),
    status: z.enum(['live', 'progress', 'own']).optional(),
    results: z.array(z.object({ value: z.string(), label: z.string() })).optional(),
    facts: z.array(z.object({ label: z.string(), value: z.string() })).optional(),

    // Structured blocks
    steps: z.object({ title: z.string(), items: z.array(z.string()) }).optional(),
    owners: z.object({ code: z.string(), ai: z.string(), team: z.string() }).optional(),
    flow: z
      .object({
        title: z.string(),
        caption: z.string(),
        before: z.object({ label: z.string(), metric: z.string(), who: z.string() }),
        after: z.object({ label: z.string(), metric: z.string() }),
        steps: z.array(flowStep).min(3).max(6),
        exception: z.object({ title: z.string(), text: z.string() }),
      })
      .optional(),
    pipeline: z
      .object({
        title: z.string(),
        caption: z.string(),
        lanes: z.array(z.object({ label: z.string(), steps: z.array(flowStep) })),
      })
      .optional(),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
    children: z.array(z.string()).optional(),
    related: z.array(z.string()).optional(),
    caseKey: z.string().optional(),

    published: z.coerce.date().optional(),
    updated: z.coerce.date().optional(),

    // Homepage-only structured content
    home: z.any().optional(),
  }),
});

export const collections = { pages };
