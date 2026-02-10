import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
export default defineConfig({
    build: {
        lib: {
            entry: './src/index.ts',
            name: 'CountDown',
            formats: ['es', 'umd', 'cjs'],
            fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
            external: [],
        },
        target: 'es2018',
        minify: false,
    },
    plugins: [
        dts({
            insertTypesEntry: true, // ⭐ 很重要
        }),
    ],
})
