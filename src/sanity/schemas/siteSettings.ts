export const siteSettingsSchema = {
  name: 'siteSettings',
  title: 'Site Settings & Brand Info',
  type: 'document',
  fields: [
    {
      name: 'siteName',
      title: 'Company / Site Name',
      type: 'string',
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    },
    {
      name: 'primaryPhone',
      title: 'Primary Contact Phone',
      type: 'string',
    },
    {
      name: 'whatsappNumber',
      title: 'WhatsApp Contact Number (digits only, e.g. 2348030000000)',
      type: 'string',
    },
    {
      name: 'generalEmail',
      title: 'General Enquiry Email',
      type: 'string',
    },
    {
      name: 'officeAddress',
      title: 'Office Physical Address',
      type: 'text',
      rows: 2,
    },
    {
      name: 'businessHours',
      title: 'Business Hours',
      type: 'string',
    },
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        { name: 'instagram', title: 'Instagram URL', type: 'url' },
        { name: 'facebook', title: 'Facebook URL', type: 'url' },
        { name: 'linkedin', title: 'LinkedIn URL', type: 'url' },
        { name: 'twitter', title: 'Twitter/X URL', type: 'url' },
      ],
    },
  ],
};
