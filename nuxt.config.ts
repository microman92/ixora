// https://nuxt.com/docs/api/configuration/nuxt-config

const getDefaultLocale = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('locale') || 'ru'
  }
  return 'ru'
}




export default defineNuxtConfig({
  modules: [
    "@nuxt/image",
    '@pinia/nuxt',
    'nuxt-swiper',
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'nuxt-booster',
    "@nuxtjs/google-fonts",
    '@nuxtjs/fontaine'
  ],
  pinia: {
    storesDirs: ['./stores/**']
  },
  plugins: ['~/plugins/uuid.client.ts', '~/plugins/v-mask.js', '~/plugins/vuejs-paginate-next.js'],
  css: ['~/assets/styles/style.scss', 'leaflet/dist/leaflet.css'],
  alias: {
    assets: '<rootDir>/assets'
  },
  devtools: { enabled: false },
  i18n: {
    locales: [{ code: 'en', file: 'en.json' }, { code: 'ru', file: 'ru.json' }],
    defaultLocale: getDefaultLocale(),
    lazy: true,
    langDir: 'locales/',
    vueI18n: './i18n.config.ts',
    strategy: 'no_prefix',
    dynamicRouteParams: true
  },
  components: {
    dirs: [
      {
        path: '~/components',
        extensions: ['vue'],
        prefix: 'Lazy',
        chunkNamePrefix: 'component-'
      }
    ]
  },
  sitemap: {
    hostname: 'https://ixora-consalt.com',
    routes: [
      '/',
      '/catalog',
      '/services',
      '/hoteliers'
    ]
  } as unknown as Partial<import('@nuxtjs/sitemap').ModuleOptions>,
  robots: {
    UserAgent: '*',
    Allow: '/',
    Disallow: '/admin',
    Sitemap: 'https://ixora-consalt.com/sitemap.xml',
    CrawlDelay: 10
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'IXORA Consalt - Ведущие консультанты по недвижимости',
      meta: [
        { name: 'description', content: 'IXORA Consalt предлагает лучшие услуги по недвижимости. Узнайте больше о наших проектах и услугах.' },
        { name: 'keywords', content: 'IXORA, недвижимость, консалтинг, покупка, продажа, аренда, услуги под ключ' },
        { name: 'author', content: 'IXORA Consalt' },
        { property: 'og:title', content: 'IXORA Consalt - Ведущие консультанты по недвижимости' },
        { property: 'og:description', content: 'IXORA Consalt предлагает лучшие услуги по недвижимости. Узнайте больше о наших проектах и услугах.' },
        { property: 'og:image', content: 'https://ixora-consalt.com/img/hoteliers-main.webp' },
        { property: 'og:url', content: 'https://ixora-consalt.com' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/img/logo.svg' },
      ]
    },
    baseURL: process.env.NODE_ENV === 'production' ? '/ixora/' : '/',
  },
  site: {
    url: 'https://ixora-consalt.com'
  },
  generate: {
    routes: ['/catalog', '/services', '/hoteliers'],
    fallback: '404.html',
    nojekyll: true,
  },
  image: {
    domains: ['ixora-consalt.com'],
  },
  booster: {
    criticalCSS: true,
    lazyLoading: {
      images: true,
      videos: true,
      iframes: true
    },
    caching: {
      longCache: true,
      maxAge: 31536000
    },
    gzip: true,
    brotli: true,
    prefetchLinks: true,
    preloadLinks: true
  },
  router: {
    middleware: ['lazy-loading'],
    base: '/ixora/'
  },
  build: {
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }
  },
  modern: true,
  googleFonts: {
    families: {
      'Manrope': [300, 400, 500, 600, 700, 800],
      'Open+Sans': [600],
      'Satoshi': [700],
    },
    display: 'swap',
    prefetch: true,
    preconnect: true,
    preload: true,
    useStylesheet: true
  },
  fontaine: {
    fontMetrics: {
      fonts: [
        {
          family: 'Manrope',
          src: 'https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap',
        },
        {
          family: 'Open Sans',
          src: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap',
        },
        {
          family: 'Satoshi',
          src: 'https://fonts.googleapis.com/css2?family=Satoshi:wght@700&display=swap',
        }
      ]
    }
  }
})