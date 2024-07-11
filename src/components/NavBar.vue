<template>
	<div>
		<header class="header">
			<nav class="nav">
				<div class="container nav__content">
					<div class="nav__menu">
						
						<div class="nav__menu-btn">
							
							<div class="nav__menu-btn-line"></div>
						</div>
					</div>
				</div>
			</nav>
			<ul class="nav__list">
							<li v-for="(link, i) in links" :key="i">
								<router-link :to="link.to" class="nav__list-link">
									{{ link.name }}
								</router-link>
							</li>
						</ul>
		</header>
	</div>
</template>

<script>
export default {
	data() {
		return {
			links: [
				{ name: 'Главная', to: '/' },
				{ name: 'Проекты', to: '/portfolio' },
				{ name: 'Навыки', to: '/skills' },
				{ name: 'Контакты', to: '/contact' },
			],
		}
	},
	methods: {
		hideNavigation() {
			this.$el.querySelector('.navigation').style.opacity = 0
		},
	},
}
</script>

<style>
.nav__menu-btn {
	width: 25px;
	height: 25px;
	display: none;
	align-items: center;
	justify-content: center;
}

.nav__menu-btn-line {
	width: 100%;
	height: 2px;
	background-color: rgb(255, 255, 255);
	position: relative;
}
.nav__menu-btn:hover .nav__menu-btn-line {
	background-color: transparent;
}

.nav__menu-btn-line::before {
	content: '';
	width: 100%;
	height: 2px;
	background-color: rgb(255, 255, 255);
	position: absolute;
	top: -7px;
	transition: 0.5s;
}

.nav__menu-btn:hover .nav__menu-btn-line::before {
	top: 0;
	transform: rotate(45deg);
}

.nav__menu-btn:hover .nav__menu-btn-line::after {
	top: 0;
	transform: rotate(-45deg);
}

.nav__menu-btn-line::after {
	content: '';
	width: 100%;
	height: 2px;
	background-color: rgb(255, 255, 255);
	position: absolute;
	top: 7px;
	transition: 0.5s;
}

.nav__menu {
	display: flex;
	align-items: center;
}
.nav {
	padding: 15px 0;
	background: transparent;
	transition: opacity 0.3s ease;
	opacity: 0;
	transition: 0.5s;
}

.nav__content {
	display: flex;
	justify-content: end;
	align-items: end;
}
.nav:hover {
	opacity: 1;
}

.nav__list {
	display: flex;
	align-items: center;
	gap: 30px;
}

.nav__list-link {
	font-size: 18px;
	color: white;
}
.nav__list-link:hover {
	color: #12a1da;
}
@media (max-width: 991.99px) {
	.nav {
		border-bottom: transparent;
	}
	.nav__list-link {
		font-size: 20px;
		margin-left: 54px;
	}

	.header__content {
		min-height: 650px;
		flex-direction: column;
	}
}

@media (max-width: 767.99px) {
	.nav {
		position: relative;
	}

	.header__content-title {
		font-size: 32px;
		text-align: center;
	}
	.nav__list {
		position: absolute;
		flex-direction: column;

		top: -300px;
		padding: 15px;
		gap: 10px;
		right: 0;
		transition: 0.5s;
	}

	.nav__menu:hover .nav__list {
		top: 100%;
	}

	.nav__list-link {
		margin-left: 0;
	}

	.nav__menu-btn {
		display: flex;
	}
}
</style>
