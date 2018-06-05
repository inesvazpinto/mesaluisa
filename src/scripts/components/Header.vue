<template>
	<header class="main-header" id="js-main-header">
		<router-link class="logo" exact :to="'/'">
			<img src="/client/images/mesaluisa-horizontal.jpg" id="js-logo" class="logo-h">
			<img src="/client/images/mesaluisa-vertical.jpg" id="js-logo" class="logo-v">
		</router-link>
		<div class="menu-btn-wrap" id="js-menu-btn-wrap" v-on:click="toggleMenu">
			<div class="menu-btn" id="js-menu-btn"></div>
		</div>
		<div class="menu is--hidden" id="js-menu">
			<nav class="nav">
				<ul class="menu-items">
					<li class="display-menu-items margin--bottom-menu">
						<router-link class="main-navigation__link menu-item" exact :to="'/chapters/the-mesa'"><span class="chapter-text">CHAPTER 1</span><br>THE MESA</router-link>
					</li>
					<li class="display-menu-items margin--bottom-menu">
						<router-link class="main-navigation__link menu-item" exact :to="'/chapters/meet-luisa'"><span class="chapter-text">CHAPTER 2</span><br>MEET LUÍSA</router-link>
					</li>
					<li class="display-menu-items margin--bottom-menu">
						<router-link class="main-navigation__link menu-item" exact :to="'/chapters/life-by-the-food'"><span class="chapter-text">CHAPTER 3</span><br>LIFE "BY THE FOOD"</router-link>
					</li>
					<li class="display-menu-items margin--bottom-menu">
						<router-link class="main-navigation__link menu-item" exact :to="'/chapters/your-story'"><span class="chapter-text">CHAPTER 4</span><br>YOUR STORY</router-link>
					</li>
					<li class="display-menu-items" style="display:none;">
						<router-link class="main-navigation__link menu-item" exact :to="'/gallery'">GALLERY</router-link>
					</li>
					<li class="display-menu-items">
						<router-link class="main-navigation__link menu-item" exact :to="'/reservations'">RESERVATIONS</router-link>
					</li>
					<li class="display-menu-items">
						<router-link class="main-navigation__link menu-item" exact :to="'/princing'">PRICING</router-link>
					</li>
					<li class="display-menu-items margin--bottom-menu">
						<router-link class="main-navigation__link menu-item" exact :to="'/contacts'">CONTACTS</router-link>
					</li>
				</ul>
				<ul class="menu-items">
					<li class="display-lang-items">
						<router-link class="lang-navigation__link lang-item" exact :to="'/'">PT</router-link>
					</li>
					<li class="display-lang-items">
						<router-link class="lang-navigation__link lang-item" exact :to="'/'">EN</router-link>
					</li>
					<li class="display-lang-items">
						<router-link class="lang-navigation__link lang-item" exact :to="'/'">FR</router-link>
					</li>	
				</ul>
			</nav>
			<!-- <div class="note-box">
				<p class="text-pink-bold">NOTE</p>
				<p class="text-pink">Mesa means table and Luisa means... well, you’re about to know Her.</p>
			</div> -->
		</div>
	</header>
</template>
<script>
  export default {
    name: 'app-header',
    mounted() {
    	Event.$on('show-loader', this.closeMenu);
    },
    methods: {
    	toggleMenu() {
    		const menu =  document.getElementById('js-menu');
			const menuBtn = document.getElementById('js-menu-btn');
			const logo = document.getElementById('js-logo');

			menu.classList.toggle('active');
			menuBtn.classList.toggle('active');
			if (menu.classList.contains('is--hidden')) {
				menu.classList.remove('is--hidden');
				menu.classList.add('is--visible');
				logo.classList.add('is--active');
			} else {
				menu.classList.add('is--hidden');
				menu.classList.remove('is--visible');
				logo.classList.remove('is--active');
			}
    	},
    	closeMenu() {
    		const menu =  document.getElementById('js-menu');
			const menuBtn = document.getElementById('js-menu-btn');
			const logo = document.getElementById('js-logo');

			menu.classList.remove('active');
			menuBtn.classList.remove('active');
			menu.classList.add('is--hidden');
			menu.classList.remove('is--visible');
			logo.classList.remove('is--active')
    	}
    }
  }
</script>