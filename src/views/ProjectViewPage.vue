<template>
	<div class="portfolio">
		<h1>Мои Проекты</h1>
		<div class="container portfolio__content">
			<div class="portfolio__item" v-for="(card, index) in card" :key="index">
				<img :src="card.img" alt="" />
				<div class="portfolio__content-info">
					<h3>{{ card.title }}</h3>
					<p>{{ card.descr }}</p>
					<button class="portfolio__content-btn">
						<a
							target="_blank"
							:href="card.link"
							class="portfolio__content-btn-link"
							>{{ card.button }}</a
						>
					</button>
				</div>
			</div>
		</div>
	</div>
	<div class="portfolio">
		<h1>Мои Проекты Без Ссылок</h1>
		<div class="container portfolio__content">
			<div class="portfolio__item" v-for="(card2, index) in card2" :key="index">
				<img :src="card2.img" alt="" />
				<div class="portfolio__content-info">
					<h3>{{ card2.title }}</h3>
					<p>{{ card2.descr }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			card: [
				{
					img: require('@/assets/images/aboutme.png'),
					title: 'About me',
					descr: 'Мой первый проект',
					button: 'Перейти на веб-сайт',
					link: 'https://maxwellhouse2000.github.io/Vue-js/',
				},
				{
					img: require('@/assets/images/silverhouse.png'),
					title: 'Silver House',
					descr: 'Мой второй проект',
					button: 'Перейти на веб-сайт',
					link: 'https://maxwellhouse2000.github.io/Silver-House/',
				},

				{
					img: require('@/assets/images/nike.png'),
					title: 'Nike',
					descr: 'Мой пятый проект',
					button: 'Перейти на веб-сайт',
					link: 'https://maxwellhouse2000.github.io/nike/',
				},
				{
					img: require('@/assets/images/grayson.png'),
					title: 'Grayson',
					descr: 'Мой шестой проект',
					button: 'Перейти на веб-сайт',
					link: 'https://maxwellhouse2000.github.io/grayson/',
				},

				{
					img: require('@/assets/images/expo.png'),
					title: 'ExpoForum',
					descr: 'Мой девятый проект',
					button: 'Перейти на веб-сайт',
					link: 'https://maxwellhouse2000.github.io/ExpoForum/',
				},
				{
					img: require('@/assets/images/film.png'),
					title: 'Сinephile',
					descr: 'Мой десятый проект',
					button: 'Перейти на веб-сайт',
					link: 'https://maxwellhouse2000.github.io/-cinephile/',
				},
				{
					img: require('@/assets/images/faxira.png'),
					title: 'Faxira-Travel',
					descr: 'Мой одиннадцатый проект',
					button: 'Перейти на веб-сайт',
					link: 'https://maxwellhouse2000.github.io/travel/',
				},
			],
			card2: [
				{
					img: require('@/assets/images/gotrip.png'),
					title: 'GoTrip',
					descr: 'Мой третий проект',
				},
				{
					img: require('@/assets/images/news.png'),
					title: 'The News Web',
					descr: 'Мой четвертый проект',
				},

				{
					img: require('@/assets/images/totembo.png'),
					title: 'Totembo',
					descr: 'Мой седьмой проект',
				},
				{
					img: require('@/assets/images/burger.png'),
					title: 'Burger',
					descr: 'Мой одиннадцатый проект',
				},
				{
					img: require('@/assets/images/market.png'),
					title: 'BuhOne',
					descr: 'Мой двенадцатый проект',
				},
				{
					img: require('@/assets/images/cyberpunk.png'),
					title: 'Cyberpunk 2077',
					descr: 'Мой тринадцатый проект',
				},
				{
					img: require('@/assets/images/lock.png'),
					title: 'Golden Soft',
					descr: 'Мой четырнадцатый проект',
				},
				{
					img: require('@/assets/images/language.png'),
					title: 'ШКОЛА ИСПАНСКОГО ЯЗЫКА «ЛАВИТА» В ПЕТЕРБУРГЕ',
					descr: 'Мой пятнадцатый проект',
				},
			],
		}
	},
}
</script>

<style>
.portfolio {
	background-image: url(../assets/images/portfolio.jpg);

	min-height: 1080px;
	background-repeat: no-repeat;
	background-size: cover;
}
.portfolio__content-btn {
	transition: 0.5s;
}

.portfolio__content-btn-link {
	color: white;
	transition: 0.5s;
	text-align: center;
	padding: 10px;
}
.portfolio__content-btn:hover {
	transform: scale(1.1) translateY(-5px);
	background: #07a7e7;
}
.portfolio h1 {
	text-align: center;
	padding-top: 100px;
	margin-bottom: 100px;
	color: white;
}

.portfolio__content {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	align-items: center;
	gap: 50px;
}
.portfolio__content .portfolio__item {
	position: relative;
	border-radius: 12px;
	overflow: hidden;
	display: flex;
}
.portfolio__item img {
	width: 100%;
	transition: 0.5s;
	opacity: 0.7;
}
.portfolio__item:hover img {
	transform: scale(1.1);
}

.portfolio__item .portfolio__content-info {
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 100%;
	background: linear-gradient(rgba(0, 0, 0, 0.1), #00101b);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;
	padding: 0 4rem;
	transform: translateY(100%);
	transition: 0.5s;
}
.portfolio__item:hover .portfolio__content-info {
	transform: translateY(0);
}

.portfolio__content-info p {
	font-size: 1.6rem;
	margin: 0.3rem 0 1rem;
	color: white;
}
.portfolio__content-info h3 {
	color: white;
}

.portfolio__content-info button {
	padding: 7px;
	background: #07a7e7;
	border-radius: 8px;
}
.portfolio__content-info a {
	letter-spacing: 1px;
	color: aliceblue;
}
@media (max-width: 991.99px) {
	.portfolio__content {
		display: flex;
		flex-direction: column;
	}
}

@media (max-width: 767.99px) {
	.portfolio h1 {
		font-size: 32px;
		text-align: center;
	}
	.portfolio__content-info {
		text-align: center;
		align-items: center;
		flex-direction: column;
	}
	.portfolio__content-btn {
		text-align: center;
		align-items: center;
		flex-direction: column;
	}
}
</style>
