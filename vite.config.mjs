import { defineConfig } from 'vite';
import { resolve } from 'node:path';
export default defineConfig({build:{outDir:'dist/client',rollupOptions:{input:{home:resolve(import.meta.dirname,'index.html'),maternite:resolve(import.meta.dirname,'maternite.html')}}},server:{host:'127.0.0.1',allowedHosts:['terminal.local']}});
