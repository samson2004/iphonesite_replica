import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
    plugins: [react(), ],
    build: {
        target: 'ESNext',

        sourcemap: true
    }
})