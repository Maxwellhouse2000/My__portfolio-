<template>
	<section class="contact_section">
		<div class="container contact__content">
			<h1 class="contact_section-title">Контакты</h1>
			<h2 class="contact_section-Location">Локация</h2>
			<p class="Location-info">Узбекистан,Ташкент.</p>
			<h2 class="contact_section-apps">Телефон</h2>
			<p class="apps-info">+998(90)912-93-70</p>
			<h2 class="contact_section-apps">Telegram</h2>
			<p class="apps-info">https://t.me/Maxwellhouse2000</p>
			<h2 class="contact_section-Email">Email</h2>
			<p class="Email-info">maxsudulugxojaev@gmail.com</p>
		</div>
	</section>
</template>

<script>
export default {}
</script>

<style>
.contact__content {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.contact_section {
	background-image: url(../assets/images/World-map.webp);
	min-height: 1080px;
	background-repeat: no-repeat;
	background-size: cover;
}
.contact_section-title {
	margin-top: 100px;
	text-align: center;
	color: #ffffff;
	font-size: 50px;
}
.contact_section-Location {
	color: #ffffff;
}
.Location-info {
	color: #ffffff;
}
.contact_section-apps {
	margin-top: 20px;
	color: #ffffff;
}
.apps-info {
	color: #ffffff;
}
.contact_section-Email {
	margin-top: 20px;
	color: #ffffff;
}
.Email-info {
	color: #ffffff;
	margin-bottom: 50px;
}
</style>
