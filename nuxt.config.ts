export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxtjs/seo',
  ],
  css: ['@fortawesome/fontawesome-free/css/all.css'],
  app: {
    head: {
      title: 'Bzzix - الحلول البرمجية وتقنية المعلومات',
      htmlAttrs: {
        lang: 'ar',
        dir: 'rtl',
      },
      meta: [
        { name: 'description', content: 'شركة Bzzix المتخصصة في الحلول البرمجية وتقنية المعلومات، تطوير مواقع، تطبيقات، أمن سيبراني، سحابة، ذكاء اصطناعي.' },
        { name: 'keywords', content: 'Bzzix, حلول برمجية, تطوير مواقع, تطبيقات, أمن سيبراني, ذكاء اصطناعي, سحابة, برمجة, تقنية, Egypt, Software Solutions' },
        { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
        { name: 'author', content: 'Bzzix Team' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'ar_AR' },
        { property: 'og:site_name', content: 'Bzzix' },
        { property: 'og:title', content: 'Bzzix - الحلول البرمجية وتقنية المعلومات' },
        { property: 'og:description', content: 'شركة Bzzix المتخصصة في الحلول البرمجية وتقنية المعلومات، تطوير مواقع، تطبيقات، أمن سيبراني، سحابة، ذكاء اصطناعي.' },
        { property: 'og:url', content: 'https://bzzix.com' },
        { property: 'og:image', content: '/favicon.ico' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Bzzix - الحلول البرمجية وتقنية المعلومات' },
        { name: 'twitter:description', content: 'شركة Bzzix المتخصصة في الحلول البرمجية وتقنية المعلومات، تطوير مواقع، تطبيقات، أمن سيبراني، سحابة، ذكاء اصطناعي.' },
        { name: 'twitter:image', content: '/favicon.ico' },
        { name: 'theme-color', content: '#1e293b' },
      ],
      link: [
        { rel: 'canonical', href: 'https://bzzix.com' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'alternate', href: 'https://bzzix.com', hreflang: 'ar' },
        { rel: 'alternate', href: 'https://bzzix.com/en', hreflang: 'en' },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: `{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Bzzix",
            "url": "https://bzzix.com",
            "logo": "https://bzzix.com/favicon.ico",
            "sameAs": [
              "https://twitter.com/bzzix",
              "https://facebook.com/bzzix"
            ],
            "description": "شركة Bzzix المتخصصة في الحلول البرمجية وتقنية المعلومات"
          }`
        }
      ]
    }
  }
})