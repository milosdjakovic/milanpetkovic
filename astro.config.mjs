import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/integrations-guide/sitemap/#usage
  site: 'http://milanpetkovic.com',
  integrations: [tailwind(), image(), sitemap(), vue()]
});