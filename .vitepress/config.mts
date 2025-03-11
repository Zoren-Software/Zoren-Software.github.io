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
          { text: 'Registration', link: '/en/registro' }
        ],
        sidebar: [
          {
            text: 'User Guide',
            items: [
              { text: 'Initial Registration', link: '/en/registro' },
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
          { text: 'Registro', link: '/br/registro' }
        ],
        sidebar: [
          {
            text: 'Guia de Utilização',
            items: [
              { text: 'Registro Inicial', link: '/br/registro' },
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
          { text: 'Registro', link: '/es/registro' }
        ],
        sidebar: [
          {
            text: 'Guía de Usuario',
            items: [
              { text: 'Registro Inicial', link: '/es/registro' },
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
          { text: 'Inscription', link: '/fr/inscription' }
        ],
        sidebar: [
          {
            text: 'Guide d\'Utilisation',
            items: [
              { text: 'Inscription Initiale', link: '/fr/inscription' },
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
          { text: 'Registrazione', link: '/it/registrazione' }
        ],
        sidebar: [
          {
            text: 'Guida Utente',
            items: [
              { text: 'Registrazione Iniziale', link: '/it/registrazione' },
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
          { text: 'Rejestracja', link: '/pl/rejestracja' }
        ],
        sidebar: [
          {
            text: 'Przewodnik Użytkownika',
            items: [
              { text: 'Początkowa Rejestracja', link: '/pl/rejestracja' },
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
          { text: 'Регистрация', link: '/ru/registratsiya' }
        ],
        sidebar: [
          {
            text: 'Руководство Пользователя',
            items: [
              { text: 'Первоначальная Регистрация', link: '/ru/registratsiya' },
              { text: 'Примеры API во Время Выполнения', link: '/ru/primery-api' }
            ]
          }
        ]
      }
    }
  }
})
