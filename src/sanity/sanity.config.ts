import { serviceSchema } from './schemas/service';
import { heroSlideSchema } from './schemas/heroSlide';
import { testimonialSchema } from './schemas/testimonial';
import { siteSettingsSchema } from './schemas/siteSettings';
import { pageSchema } from './schemas/page';

export const sanityConfig = {
  name: 'dkingsfems-studio',
  title: "D'Kingsfems Global Studio",
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'your-project-id',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  schema: {
    types: [
      serviceSchema,
      heroSlideSchema,
      testimonialSchema,
      siteSettingsSchema,
      pageSchema,
    ],
  },
};

export default sanityConfig;
