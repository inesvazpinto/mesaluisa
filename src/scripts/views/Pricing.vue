<template>
	<div class="page page--pricing">
			<!-- Title -->
			<section class="section-image">
			<!-- Insert image as background -->
			</section>

			<section class="pricing-wrap">
				<div class="address"  v-apparate:fade-in-up="{delay:1000}">
					<h2 class="subtitle">From the market to the table</h2>
					<p class="text-2">80&euro;</p>
				</div>
				<div class="address"  v-apparate:fade-in-up="{delay:1000}">
					<h3 class="subtitle">PRICE PER GUEST</h3>
					<p class="text-2">80&euro;</p>
				</div>
				<div class="address"  v-apparate:fade-in-up="{delay:1500}">
					<h4 class="subtitle">INCLUDES</h4>
					<p class="text-2">Tour around the Market Ribeira<br> Hands-on cookery class <br>Lunch</p>
				</div>

				<router-link class="button" exact :to="'/reservations'"  v-apparate:fade-in-up="{delay:2000}">Reservations</router-link>
				
			</section>

	</div>
</template>
<script>
	export default {
		metaInfo () {
	      return {
	        title: 'MESALUISA - Pricing',
	        bodyAttrs: {
	          class: 'pricing'
	        }
	      }
	    }
	}
</script>