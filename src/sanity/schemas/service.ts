export const serviceSchema = {
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Service Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug (URL Path)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    },
    {
      name: 'iconName',
      title: 'Icon Identifier (Lucide Icon Name)',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Service Category',
      type: 'string',
      options: {
        list: [
          { title: 'Flights', value: 'Flights' },
          { title: 'Corporate', value: 'Corporate' },
          { title: 'Education', value: 'Education' },
          { title: 'Leisure', value: 'Leisure' },
          { title: 'Security & Logistics', value: 'Security & Logistics' },
        ],
      },
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'shortSummary',
      title: 'Short Summary (Card Preview)',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.max(220),
    },
    {
      name: 'fullDescription',
      title: 'Full Description (150-250 words)',
      type: 'text',
      rows: 8,
    },
    {
      name: 'keyBenefits',
      title: 'Key Benefits (Bullet points)',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'whatsIncluded',
      title: "What's Included Breakdown",
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Feature Title', type: 'string' },
            { name: 'description', title: 'Feature Description', type: 'text', rows: 2 },
          ],
        },
      ],
    },
    {
      name: 'process',
      title: 'Booking / Advisory Process (3 Steps)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'step', title: 'Step Number', type: 'string' },
            { name: 'title', title: 'Step Title', type: 'string' },
            { name: 'description', title: 'Step Description', type: 'text', rows: 2 },
          ],
        },
      ],
    },
    {
      name: 'faqs',
      title: 'Frequently Asked Questions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'question', title: 'Question', type: 'string' },
            { name: 'answer', title: 'Answer', type: 'text', rows: 3 },
          ],
        },
      ],
    },
    {
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
    },
    {
      name: 'seoDescription',
      title: 'SEO Meta Description',
      type: 'text',
      rows: 2,
    },
    {
      name: 'ctaText',
      title: 'Call To Action Text',
      type: 'string',
    },
    {
      name: 'order',
      title: 'Sort Order',
      type: 'number',
    },
  ],
};
