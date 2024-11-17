// vite.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['src/test/**/*.{test,spec}.{js}'],
    reporters: ['verbose'],
    maxThreads: 5,
    minThreads: 1,
    coverage: {
      provider: 'istanbul',
      include: ['src/main/**/*.js'],
      reporter: ['text', 'lcov'],
    },
  },
});
