import { defineConfig } from 'vite';// eslint-enable import/no-extraneous-dependencies
import react from '@vitejs/plugin-react';// eslint-enable import/no-extraneous-dependencies

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
