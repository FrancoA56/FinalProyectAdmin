import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import replace from '@rollup/plugin-replace';

// Carga variables de entorno desde el archivo .env
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
    plugins: [react()],
    define: {
        'process.env': {
            SERVER_URL: process.env.SERVER_URL,
            // Agrega aquí más variables de entorno si es necesario
        },
    },
    build: {
        sourcemap: true,
    },
    server: {
        host: true,
    },
    base: './',
    esbuild: {
        jsxInject: `import React from 'react'`,
    },
    // Resto de la configuración de Vite
});
