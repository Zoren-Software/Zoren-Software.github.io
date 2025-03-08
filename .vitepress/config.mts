import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "VolleyTrack Docs",
    description: "A VolleyTrack Docs site",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Examples', link: '/markdown-examples' }
        ],
        sidebar: [
            {
                text: 'Guia de Utilização',
                items: [
                    { text: 'Registro Inicial', link: '/registro' },
                    { text: 'Runtime API Examples', link: '/api-examples' }
                ]
            }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ]
    },
    locales: {
        root: {
            label: 'English',
            lang: 'en',
            link: '/'
        },
        br: {
            label: 'Português (Brasil)',
            lang: 'br', 
            link: '/br/'
        },
        es: {
            label: 'Español',
            lang: 'es',
            link: '/es/'
        },
        fr: {
            label: 'Français',
            lang: 'fr',
            link: '/fr/'
        },
        it: {
            label: 'Italiano',
            lang: 'it',
            link: '/it/'
        },
        pl: {
            label: 'Polski',
            lang: 'pl',
            link: '/pl/'
        },
        ru: {
            label: 'Русский',
            lang: 'ru',
            link: '/ru/'
        }
    },
})
