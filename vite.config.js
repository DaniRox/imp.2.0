import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'


// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
        // Crea un alias @ que apunta a la carpeta src
        '@': path.resolve(__dirname, './src'),
        // Crea un alias @styles que apunta a la carpeta src/styles
        '@styles': path.resolve(__dirname, './src/styles'),
        },
    },
    // --- AÑADE ESTA LÍNEA ---
    // Reemplaza 'imp-v2' con el nombre exacto de tu repositorio en GitHub
    base: process.env.NODE_ENV === 'production' ? '/imp.2.0/' : '/',
    // ---------------------------
})
