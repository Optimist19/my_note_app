import {createRouter, createWebHistory} from "vue-router"

import FullCard from "../components/FullCard.vue"
import TextCard from "../components/TextCard.vue"

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes:[
		{
			path: "/",
			name: "TextCard",
			component: TextCard
		},
		{
			path: "/fullcard/:id",
			name: "FullCard",
			component: FullCard
		}
	]

})

export default router