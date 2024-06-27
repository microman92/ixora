declare module '@nuxt/schema' {
    interface NuxtConfig {
      booster?: {
        imageOptimizer?: {
          provider?: string;
          baseURL?: string;
        };
        criticalCSS?: boolean;
        lazyLoading?: {
          images?: boolean;
          videos?: boolean;
          iframes?: boolean;
        };
        caching?: {
          longCache?: boolean;
          maxAge?: number;
        };
        gzip?: boolean;
        brotli?: boolean;
        prefetchLinks?: boolean;
        preloadLinks?: boolean;
      };
    }
  }
  