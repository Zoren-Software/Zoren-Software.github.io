import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "VolleyTrack Docs",
  description: "A VolleyTrack Docs site",
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Registration', link: '/en/registration' }
        ],
        sidebar: [
          {
            text: 'User Guide',
            items: [
              { text: 'Initial Registration', link: '/en/registration' },
              { text: 'Runtime API Examples', link: '/en/api-examples' }
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
          { text: 'Registro', link: '/br/registration' }
        ],
        sidebar: [
          {
            text: 'Guia de Utilização',
            items: [
              { text: 'Registro Inicial', link: '/br/registration' },
              { text: 'Exemplos de API em Tempo de Execução', link: '/br/exemplos-api' }
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
          { text: 'Registro', link: '/es/registration' }
        ],
        sidebar: [
          {
            text: 'Guía de Usuario',
            items: [
              { text: 'Registro Inicial', link: '/es/registration' },
              { text: 'Ejemplos de API en Tiempo de Ejecución', link: '/es/ejemplos-api' }
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
          { text: 'Inscription', link: '/fr/registration' }
        ],
        sidebar: [
          {
            text: 'Guide d\'Utilisation',
            items: [
              { text: 'Inscription Initiale', link: '/fr/registration' },
              { text: 'Exemples d\'API en Exécution', link: '/fr/exemples-api' }
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
          { text: 'Registrazione', link: '/it/registration' }
        ],
        sidebar: [
          {
            text: 'Guida Utente',
            items: [
              { text: 'Registrazione Iniziale', link: '/it/registration' },
              { text: 'Esempi di API Runtime', link: '/it/esempi-api' }
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
          { text: 'Rejestracja', link: '/pl/registration' }
        ],
        sidebar: [
          {
            text: 'Przewodnik Użytkownika',
            items: [
              { text: 'Początkowa Rejestracja', link: '/pl/registration' },
              { text: 'Przykłady API w Czasie Wykonania', link: '/pl/przyklady-api' }
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
          { text: 'Регистрация', link: '/ru/registration' }
        ],
        sidebar: [
          {
            text: 'Руководство Пользователя',
            items: [
              { text: 'Первоначальная Регистрация', link: '/ru/registration' },
              { text: 'Примеры API во Время Выполнения', link: '/ru/primery-api' }
            ]
          }
        ]
      }
    }
  }
})
