export const testimonialSchema = {
  name: 'testimonial',
  title: 'Testimonials & Reviews',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Client Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Role / Designation',
      type: 'string',
    },
    {
      name: 'company',
      title: 'Organization / Company Name (Optional)',
      type: 'string',
    },
    {
      name: 'serviceCategory',
      title: 'Related Service Category',
      type: 'string',
      options: {
        list: [
          'Corporate Travel',
          'Study Abroad',
          'Tours & Cruises',
          'Escort Cars & Transfers',
          'Jobs Abroad',
          'School Excursions',
          'Flight Tickets',
          'Hotel Bookings',
        ],
      },
    },
    {
      name: 'rating',
      title: 'Star Rating (1-5)',
      type: 'number',
      initialValue: 5,
      validation: (Rule: any) => Rule.min(1).max(5),
    },
    {
      name: 'quote',
      title: 'Review / Testimonial Quote',
      type: 'text',
      rows: 4,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'destinationOrRoute',
      title: 'Destination or Route Highlight (Optional)',
      type: 'string',
    },
    {
      name: 'avatar',
      title: 'Client Photo (Optional)',
      type: 'image',
      options: { hotspot: true },
    },
  ],
};
