import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "VolleyTrack Docs",
  description: "A VolleyTrack Docs site",
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Zoren-Software/VolleyTrack-Docs' }
    ]
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        nav: [
            { text: 'Registration', link: '/en/registration' },
            { text: 'Features', link: '/en/features' }
        ],
        sidebar: [
          {
            text: 'User Guide',
            items: [
                { text: 'Initial Registration', link: '/en/registration' },
            ]
          }
        ]
      }
    },
    br: {
      label: 'Português (Brasil)',
      lang: 'pt-BR',
      link: '/br/',
      themeConfig: {
        nav: [
            { text: 'Registro', link: '/br/registration' },
            { text: 'Funcionalidades', link: '/br/features' }
        ],
        sidebar: [
          {
            text: 'Guia de Utilização',
            items: [
                { text: 'Registro Inicial', link: '/br/registration' },
            ]
          }
        ]
      }
    },
    es: {
      label: 'Español',
      lang: 'es',
      link: '/es/',
      themeConfig: {
        nav: [
            { text: 'Registro', link: '/es/registration' },
            { text: 'Características', link: '/es/features' }
        ],
        sidebar: [
          {
            text: 'Guía de Usuario',
            items: [
              { text: 'Registro Inicial', link: '/es/registration' },
            ]
          }
        ]
      }
    },
    fr: {
      label: 'Français',
      lang: 'fr',
      link: '/fr/',
      themeConfig: {
        nav: [
            { text: 'Inscription', link: '/fr/registration' },
            { text: 'Fonctionnalités', link: '/fr/features' }
        ],
        sidebar: [
          {
            text: 'Guide d\'Utilisation',
            items: [
              { text: 'Inscription Initiale', link: '/fr/registration' },
            ]
          }
        ]
      }
    },
    it: {
      label: 'Italiano',
      lang: 'it',
      link: '/it/',
      themeConfig: {
        nav: [
            { text: 'Registrazione', link: '/it/registration' },
            { text: 'Funzionalità', link: '/it/features' }
        ],
        sidebar: [
          {
            text: 'Guida Utente',
            items: [
              { text: 'Registrazione Iniziale', link: '/it/registration' },
            ]
          }
        ]
      }
    },
    pl: {
      label: 'Polski',
      lang: 'pl',
      link: '/pl/',
      themeConfig: {
        nav: [
            { text: 'Rejestracja', link: '/pl/registration' },
            { text: 'Funkcje', link: '/pl/features' }
        ],
        sidebar: [
          {
            text: 'Przewodnik Użytkownika',
            items: [
              { text: 'Początkowa Rejestracja', link: '/pl/registration' },
            ]
          }
        ]
      }
    },
    ru: {
      label: 'Русский',
      lang: 'ru',
      link: '/ru/',
      themeConfig: {
        nav: [
            { text: 'Регистрация', link: '/ru/registration' },
            { text: 'Функции', link: '/ru/features' }
        ],
        sidebar: [
          {
            text: 'Руководство Пользователя',
            items: [
              { text: 'Первоначальная Регистрация', link: '/ru/registration' },
            ]
          }
        ]
      }
    }
  }
})
