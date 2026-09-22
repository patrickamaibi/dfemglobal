export const heroSlideSchema = {
  name: 'heroSlide',
  title: 'Homepage Hero Slides',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Headline',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle / Description',
      type: 'text',
      rows: 2,
    },
    {
      name: 'tagline',
      title: 'Small Tagline',
      type: 'string',
    },
    {
      name: 'badge',
      title: 'Category / Trust Badge',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Background Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'primaryCtaText',
      title: 'Primary CTA Button Label',
      type: 'string',
    },
    {
      name: 'primaryCtaLink',
      title: 'Primary CTA URL',
      type: 'string',
    },
    {
      name: 'secondaryCtaText',
      title: 'Secondary CTA Button Label',
      type: 'string',
    },
    {
      name: 'secondaryCtaLink',
      title: 'Secondary CTA URL',
      type: 'string',
    },
    {
      name: 'order',
      title: 'Slide Order',
      type: 'number',
    },
  ],
};
