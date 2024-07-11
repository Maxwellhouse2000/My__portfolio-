<template>
	<div class="wrapper">
		<NavBar />

		<router-view></router-view>
	</div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Header from './components/Header.vue'
import ContactsPageView from './views/ContactsPageView.vue'
import PortfolioViewPage from './views/ProjectViewPage.vue'
import SkillsPageView from './views/SkillsPageView.vue'
export default {
	components: {
		NavBar,
		Header,
		ContactsPageView,
		PortfolioViewPage,
		SkillsPageView,
	},
}
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Montserrat';
}
body {
	background: #000000;
}
a {
	text-decoration: none;
}
li {
	list-style: none;
}
input,
button {
	background: none;
	outline: none;
	border: none;
	transition: 0.5s;
}

.container {
	width: 100%;
	max-width: 1140px;
	padding: 0 15px;
	margin: 0 auto;
}
</style>
