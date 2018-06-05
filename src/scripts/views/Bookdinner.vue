<template>
	<div class="page page--bookdinner">
		<section class="section-image"></section>
		<section class="content-wrap">
			<div class="event-description">
				<p class="event-description__text" @click="showModal">Event Description &rarr;</p>
			</div>
			<div class="content__form" v-if="!isLoading">
				<div v-if="successMessage">
					<h2 class="success-message">Thank you for your reservation. <br>Luisa will get back to you as soon as possible.</h2>
				</div>
				<div v-else>
					<div class="form__group form__group--submit" v-if="errorMessage">
						<h2 class="error-message" v-apparate:fade-in-up="{delay:100}">There was an error in the submit process, <br>please check all form fields and try again.</h2>
					</div>
					<form class="form-booking" action="" method="POST"  accept-charset="utf-8" @submit.stop.prevent="submitForm">
						<div class="form__group form__group--first-name" v-apparate:fade-in-up="{delay:500}">
							<label class="form__label" for="js-first-name">First name</label>
							<input class="form__input" id="js-first-name" type="text" name="client_first_name" v-model="form.client_first_name" placeholder="">
							<!-- placeholder="Marty" -->
						</div>
						<div class="form__group form__group--last-name" v-apparate:fade-in-up="{delay:500}">
							<label class="form__label" for="js-last-name">Last name</label>
							<input class="form__input" id="js-last-name" type="text" name="client_last_name" v-model="form.client_last_name" placeholder="">
							<!-- placeholder="Mcfly" -->
						</div>
						<div class="form__group form__group--email" v-apparate:fade-in-up="{delay:1000}">
							<label class="form__label"  for="js-email">Email</label>
							<input class="form__input" id="js-email" type="email" name="client_email" v-model="form.client_email" placeholder="">
							<!-- placeholder="marty@gmail.com" -->
						</div>
						<div class="form__group form__group--usr-tel" v-apparate:fade-in-up="{delay:1000}">
							<label class="form__label" for="js-usr-tel">Phone</label>
							<input class="form__input" id="js-usr-tel" type="tel" name="usrtel"  v-model="form.usr_tel" placeholder="">
						</div>

						<div class="form__group form__group--message" v-apparate:fade-in-up="{delay:1000}">
							<label class="form__label" for="js-message">Message</label>
							<textarea class="form__input" id="js-message" rows="10" cols="30" name="message"  v-model="form.usr_tel" placeholder=""></textarea>
						</div>

						<div class="form__group form__group--submit" v-apparate:fade-in-up="{delay:2000}">
						 	<button class="button">Make an inquiry</button>
						</div>
						<div class="form__group form__group--disclaimer" v-apparate:fade-in-up="{delay:2500}">
							<p class="disclaimer">* This is a Booking request only, and it will be reviewed by Mesaluisa. <br>You will be notified via email when we check the availability.</p>
						</div>
					</form>
				</div>
			</div>
			<div v-else>
				<div class="loading-spinner"></div>
			</div>
		</section>
		<aside class="modal is--hidden" id="js-modal">
			<div class="close-modal" @click="hideModal">
				<p class="close-modal__text">&#9747; close</p>
			</div>
			<div class="modal__content">
				<p class="modal__subtitle">OPENING HOURS</p>
				<p class="modal__text">From 8:30pm until 12:00am</p>
				<p class="modal__text">From Tuesday to Saturday</p>
				<p class="modal__text">The Mercado da Ribeira is closed on Sundays and Mondays. On Sundays, the fisherman take a day of rest and as a result on Monday, there is no fresh fish. We take the opportunity to also give ourselves a break.</p><br>
				
				<p class="modal__subtitle">PRICE</p>
				<p class="modal__text">On demand.</p>
			</div>
		</aside>
	</div>
</template>
<script>
	const __TOKEN__ = document.head.querySelector("[name=csrf-token]").content;
	import Form from './../core/Form';
	export default {
		metaInfo () {
	      return {
	        title: 'MESALUISA - Book Dinning Room',
	        bodyAttrs: {
	          class: 'bookdinner'
	        }
	      }
	    },
	    data() {
	    	return {
	    		form: new Form({
	    			_token: __TOKEN__,
					client_first_name: '',
					client_last_name: '',
					client_email: '',
					usr_tel: '',
					message: ''
				}),
				errorMessage: false,
				successMessage: false,
				isLoading: false,
	    	}
	    },
	    mounted() {
	    },
	    methods: {
	    	submitForm() {
	    		this.isLoading = true;
	    		console.log(this.form.data());

	    		axios.post('/api/bookings', this.form.data())
					.then(response => {
						if (response.data['message'] === 'success') {
							this.form.reset();
                    		this.successMessage = true;
						} else {
							this.errorMessage = true;
						}
                    	setTimeout(() => {
                    		this.isLoading = false;
                		}, 1000);
                })
                .catch(error => {
                	this.errorMessage = true;
			       	setTimeout(() => {
                		this.isLoading = false;
            		}, 1000);
                });
	    	},
	    	showModal() {
	    		const modal = document.getElementById('js-modal');
	    		modal.classList.remove('is--hidden');
	    		modal.classList.add('is--visible');
	    	},
	    	hideModal() {
	    		const modal = document.getElementById('js-modal');
	    		modal.classList.remove('is--visible');
	    		modal.classList.add('is--hidden');
	    	}
	    }
	}
</script>