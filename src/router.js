import NotFound from './components/NotFound.vue'
import PressReleases from './components/PressReleases.vue'

export const routes = [
    {
        path: '/',
        component: NotFound,
        meta: {
            title: 'Главная'
        },
        children: [{
            path: 'news',
            component: NotFound,
            meta: {
                title: 'Новости и медиа'
            },
            children: [{
                path: 'press-releases',
                component: PressReleases,
                meta: {
                    title: 'Пресс-релизы и новости'
                },
            }]
        }]
    }
]