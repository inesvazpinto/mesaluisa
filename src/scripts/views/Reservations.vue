<template>
	<div class="page page--reservations">
			<!-- Title -->
			<section class="section-image">
			<!-- Insert image as background -->
			</section>

			<section class="products-wrap">

				<div class="product border-bottom"  v-apparate:fade-in-up="{delay:1000}"><!-- Product 1 -->
					<h1 class="subtitle">From the market to the table</h1>
					<router-link class="button" exact :to="'/bookmarket'"  v-apparate:fade-in-up="{delay:2000}">Reservations</router-link>
				</div>

				<div class="product border-bottom"  v-apparate:fade-in-up="{delay:1000}"><!-- Product 2 -->
					<h2 class="subtitle">Dinning Room</h2>
					<router-link class="button" exact :to="'/bookdinner'"  v-apparate:fade-in-up="{delay:2000}">Reservations</router-link>
				</div>

				<div class="product"  v-apparate:fade-in-up="{delay:1000}"><!-- Product 3 -->
					<h3 class="subtitle">Workshop</h3>
					<router-link class="button" exact :to="'/bookworkshop'"  v-apparate:fade-in-up="{delay:2000}">Reservations</router-link>
				</div>

			</section>

	</div>
</template>
<script>
	export default {
		metaInfo () {
	      return {
	        title: 'MESALUISA - Reservations',
	        bodyAttrs: {
	          class: 'reservations'
	        }
	      }
	    }
	}
</script>