import { defineConfig } from "vite";

export default defineConfig({
  server: {
    open: true,
  },
});
// // vite.config.js
// import { defineConfig } from 'vite'
// export default defineConfig({
//   // Add options here as your needs grow
// })

// // vite.config.js
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react' // if using React; remove if not needed

// export default defineConfig({
//   plugins: [react()],
//   // add other config options here
// })

// import { defineConfig } from "vite";

// export default defineConfig({
//   base: "/",
// });

// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  root: 'client',               // folder that contains index.html
  build: {
    outDir: '../dist',          // place final build in repo/dist for Netlify
    emptyOutDir: true
  }
})