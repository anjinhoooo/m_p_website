import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/m_p_website/',  // Replace 'repository-name' with your actual repo name
})