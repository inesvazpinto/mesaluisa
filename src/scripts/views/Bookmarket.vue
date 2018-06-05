<template>
	<div class="page page--bookmarket">
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
						<div class="form__group form__group--number-of-people" v-apparate:fade-in-up="{delay:1000}">
							<label class="form__label" for="js-number-of-people">Number of people</label>
							<input class="form__input" id="js-number-of-people" type="number" name="number_of_people"  v-model="form.number_of_people" placeholder="1" min="1" max="10" step="1" value="1" data-error-message="js-error-message-number-of-people">
							<!--<p class="form__error-message is--hidden" id="js-error-message-number-of-people">* Please chosse a date between 1 and 10</p>-->
						</div>
						<!--<div class="form__group form__group--date" v-apparate:fade-in-up="{delay:1500}">
							<label class="form__label" for="js-date">Date:</label>
							<input class="form__input" id="js-date" type="text" name="date" placeholder="dd / mm / yy" inputmode="numeric" autocorrect="no" autocapitalize="no">
						</div>-->
						
						<div class="form__group form__group--date" v-apparate:fade-in-up="{delay:1500}">
							<p class="form__label" style="padding-bottom:5px;">Select Date</p>
							<div class="form__group form__group--date__day">
								<label class="form__label" for="js-day">Day</label>
								<select class="form__select" name="day" id="js-day" v-model="form.day">
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="6">6</option>
									<option value="7">7</option>
									<option value="8">8</option>
									<option value="9">9</option>
									<option value="10">10</option>
									<option value="11">11</option>
									<option value="12">12</option>
									<option value="13">13</option>
									<option value="14">14</option>
									<option value="15">15</option>
									<option value="16">16</option>
									<option value="17">17</option>
									<option value="18">18</option>
									<option value="19">19</option>
									<option value="20">20</option>
									<option value="21">21</option>
									<option value="22">22</option>
									<option value="23">23</option>
									<option value="24">24</option>
									<option value="25">25</option>
									<option value="26">26</option>
									<option value="27">27</option>
									<option value="28">28</option>
									<option value="29">29</option>
									<option value="30">30</option>
									<option value="31">31</option>
								</select>
							</div>
							<div class="form__group form__group--date__month">
								<label class="form__label" for="js-month">Month</label>
								<select class="form__select" name="month" id="js-month" v-model="form.month">
									<option value="January">January</option>
									<option value="February">February</option>
									<option value="March">March</option>
									<option value="April">April</option>
									<option value="May">May</option>
									<option value="June">June</option>
									<option value="July">July</option>
									<option value="August">August</option>
									<option value="September">September</option>
									<option value="October">October</option>
									<option value="November">November</option>
									<option value="December">December</option>
								</select>
							</div>
							<div class="form__group form__group--date__year">
								<label class="form__label" for="js-date">Year</label>
								<select class="form__select" name="year" id="js-year" v-model="form.year">
									<option selected value="2018">2018</option>
									<option value="2019">2019</option>
									<option value="2020">2020</option>
									<option value="2021">2021</option>
								</select>
							</div>
						</div>

						<div class="form__group form__group--submit" v-apparate:fade-in-up="{delay:2000}">
						 	<button class="button">Make a Reservation</button>
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
				<p class="modal__subtitle">SCHEDULE</p>
				<p class="modal__text">10:30am - We will meet at the iconic Mercada da Riberia for a tour of the market.  Here, we will select the freshest products available to create our delicious, Portuguese lunch.</p>
				<p class="modal__text">11:30am - We will arrive at Mesaluisa where I will teach you the secrets of our kitchen.</p>
				<p class="modal__text">1:00pm - We will gather around the table and enjoy the result of our hard work.</p>
				<p class="modal__text">2:30pm - You are free to continue your exploration of the beautiful city of Lisbon.</p><br>
				<p class="modal__text">From Tuesday to Saturday</p>
				<p class="modal__text">The Mercado da Ribeira is closed on Sundays and Mondays. On Sundays, the fisherman take a day of rest and as a result on Monday, there is no fresh fish. We take the opportunity to also give ourselves a break.</p><br>
				
				<p class="modal__subtitle">PRICE</p>
				<p class="modal__text">80&euro; /guest</p>

				<p class="modal__subtitle">INCLUDES</p>
				<p class="modal__text">Tour around the Market Ribeira<br> Hands-on cookery class <br>Lunch</p>

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
	        title: 'MESALUISA - Book Market',
	        bodyAttrs: {
	          class: 'bookmarket'
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
					number_of_people: 1,
					day: '1',
					month: 'January',
					year: '2018'
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