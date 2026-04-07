import process from 'node:process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub project page: https://<user>.github.io/<repo>/
// Set GITHUB_PAGES_BASE=/YourRepoName/ in CI (trailing slash required).
const base = process.env.GITHUB_PAGES_BASE || '/'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base,
})
