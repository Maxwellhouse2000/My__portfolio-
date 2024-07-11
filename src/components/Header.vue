<template>
	<section class="home__page">
		<div class="container home__page-content">
			<h1>Максуд Улугходжаев</h1>
			<p>Веб-разработчик, Верстка сайтов</p>
			<div class="home__page-btns">
				<router-link to="/portfolio" class="home__page-btn"
					>Портфолио</router-link
				>
				<router-link to="/contact" class="home__page-btn-outline"
					>Контакты</router-link
				>
			</div>
		</div>
		<video class="home__page-video" autoplay muted loop>
			<source type="video/mp4" src="@/assets/video/video.mp4" />
		</video>
	</section>
</template>

<script>
export default {}
</script>

<style>
.home__page-content {
	min-height: 640px;
	position: relative;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
}
.home__page-content .container {
	position: relative;
}
.home__page-video {
	z-index: -1;
	opacity: 0.3;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
	border-radius: 0px 0px 100px 0px;
	background: rgb(0, 0, 0);
}
.home__page-content h1 {
	color: rgb(255, 255, 255);
	font-size: 60px;
	font-weight: 700;
	line-height: 73px;
}
.home__page-content p {
	margin-top: 10px;
	color: rgb(255, 255, 255);
	font-size: 26px;
	font-weight: 300;
	line-height: 32px;
}
.home__page-btns {
	margin-top: 20px;
	display: flex;
	gap: 20px;
}
.home__page-btn {
	border-radius: 8px;
	background: rgb(0, 0, 0);
	padding: 15px 25px;
	color: rgb(255, 255, 255);
	font-size: 16px;
	font-weight: 400;
	line-height: 100%;
	transition: 1s;
}
.home__page-btn:hover {
	background: rgb(16, 132, 215);
}
.home__page-btn-outline {
	box-sizing: border-box;
	border: 1px solid rgb(59, 59, 59);
	border-radius: 8px;
	padding: 15px 25px;
	color: rgb(255, 255, 255);
	font-size: 16px;
	font-weight: 400;
	line-height: 100%;
	transition: 1s;
}
.home__page-btn-outline:hover {
	border-color: rgb(16, 132, 215);
}
@media (max-width: 991.99px) {
	.home__page-content {
		min-height: 650px;
	}

	.home__page-content h1 {
		font-size: 50px;

		text-align: center;
	}
	.home__page-content p {
		justify-content: center;
		text-align: center;
	}
}

@media (max-width: 767.99px) {
	.home__page-content p {
		font-size: 40px;
		text-align: center;
	}
	.home__page-content h1 {
		font-size: 40px;
		text-align: center;
	}
}
</style>
