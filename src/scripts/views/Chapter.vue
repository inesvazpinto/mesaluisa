<template>
	<div :class="'page page--chapter page-chapter--' + item.id">
		<section class="section-image" :style="'background-image:url('+ item.image_url + ')'">
		</section>
		<section class="content-wrap">
			<header class="content__header">
				<p class="content__meta">{{item.id}}/4</p>
				<h2 class="content__title">{{item.title}}</h2>
			</header>
			<div class="content__desc" v-html="item.content">
			</div>
			<div v-if="isYourStory">
				<router-link class="button" exact :to="'/reservations'"  v-apparate:fade-in-up="{delay:1000}">Reservations</router-link>
			</div>
		</section>
		
	</div>
</template>
<script>
 	export default {
 		props: ['chapter'],
 		data() {
 			return {
 				item: {},
 				isYourStory: false
 			}
 		},
		metaInfo () {
	      return {
	        title: 'MESALUÍSA - Food and Stories',
	        bodyAttrs: {
	          class: 'chapter'
	        }
	      }
	    },
	    watch: {
			'$route': 'fetchData'
		},
		methods: {
			fetchData() {
				let _this = this;
				_this.item = {};
				axios.get('/api/chapters/' + _this.$route.params.chapter + '.json').then((response) => {
					_this.item = response.data;
				}).catch(function(error) {
					console.log(error);
			    });
			    (this.chapter === 'your-story') ? this.isYourStory = true : this.isYourStory = false;
			}
		},	
		mounted() {
			this.fetchData();
		}
	}
</script>