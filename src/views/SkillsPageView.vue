<template>
	<section class="skills">
		<h1>Мои Навыки</h1>
		<div class="container skills__content">
			<div class="skills__content-item">
				<ul class="skills__content-item-list">
					<li v-for="(link, i) in links" :key="i">
						<p>
							{{ link.name }}
						</p>
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			links: [
				{ name: '"HTML5"' },
				{ name: '"CSS3"' },
				{ name: '"JavaScript"' },
				{ name: '"Git"' },
				{ name: '"GitHub"' },
				{ name: '"Vue.js"' },
				{ name: '"Препроцессор SASS"' },
				{ name: '"Адаптивная вёрстка"' },
			],
		}
	},
}
</script>

<style>
.skills {
	background-image: url(../assets/images/Skills.jpg);

	min-height: 1080px;
	background-repeat: no-repeat;
	background-size: cover;
}
.skills h1 {
	font-size: 50px;
	color: #ffffff;
	text-align: center;
	transition: 0.5s;
}
.skills h1:hover {
	color: rgb(179, 0, 228);
	text-align: center;
}
.skills__content {
	display: flex;
	justify-content: center;
	align-items: center;
}
.skills__content-item p {
	font-size: 16px;
	color: #ffffff;
    transition: 1s;
}
.skills__content-item:hover {
	transform: scale(1.1) translateY(-5px);
}
.skills__content-item {
	margin-top: 200px;
	box-sizing: border-box;
	border-top: 3px solid rgb(255, 4, 226);
	border-bottom: 3px solid rgb(255, 4, 226);
	border-left: 3px solid rgb(255, 4, 226);
	border-right: 3px solid rgb(255, 4, 226);
	display: flex;
	padding: 20px;
	margin-bottom: 50px;
	transition: 1s;
}
.skills__content-item-list {
	display: flex;
	flex-direction: column;
}
.skills__content-item p:hover {
	color: rgb(255, 255, 255);
	background: rgb(127, 14, 158);
    transform: scale(1.1) translateY(-5px);
}
</style>
