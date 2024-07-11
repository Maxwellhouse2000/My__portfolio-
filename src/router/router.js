import { createRouter, createWebHashHistory } from 'vue-router'

import HomePageView from '@/components/Header.vue'
import ContactsPageView from '@/views/ContactsPageView.vue'
import ProjectViewPage from '@/views/ProjectViewPage.vue'
import SkillsPageView from '@/views/SkillsPageView.vue'

const routes = [
	{ path: '/', name: 'home', component: HomePageView },
	{ path: '/contact', name: 'contact', component: ContactsPageView },
	{ path: '/portfolio', name: 'portfolio', component: ProjectViewPage },
	{ path: '/skills', name: 'skills', component: SkillsPageView },
]

const router = createRouter({
	history: createWebHashHistory(),
	routes: routes,
})

export default router
