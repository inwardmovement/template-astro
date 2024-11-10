import { defineConfig } from "astro/config"

import tailwind from "@astrojs/tailwind"
import alpine from "@astrojs/alpinejs"

export default defineConfig({
  integrations: [tailwind(), alpine()],
  vite: {
    // en attendant le fix dans la nouvelle version de Bootstrap
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: [
            "mixed-decls",
            "color-functions",
            "global-builtin",
            "import",
          ],
        },
      },
    },
  },
})
