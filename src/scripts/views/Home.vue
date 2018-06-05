<template>
  <div class="page page--home">
    <section class="section-1" id="js-section-1">
      <div class="home">
        <h1 class="home-title" v-apparate:fade-in-up="{delay:1000}">TAKE A SEAT AT LUÍSA’S TABLE</h1>
        <router-link class="button" exact :to="'/reservations'"  v-apparate:fade-in-up="{delay:1500}">reservations</router-link>
      </div>
    </section>
  </div>
</template>
<script>
  import Swiper from 'swiper';
  import {offsetTop} from './../utils';
  
  export default {
    data() {
      return {}
    },

    metaInfo () {
      return {
        title: 'MESALUISA - Food and Stories',
        bodyAttrs: {
          class: 'home'
        }
      }
    },

    mounted() {
      const section = document.getElementById('js-section-1');
      this.loadSlider();
      offsetTop(section);
    },

    methods: {
      loadSlider() {
        let _this = this;
        let slider = new Swiper('#js-slider', {
          speed: 800,
          loop: true,
          autoplay: {
            delay: 3000,
          },
        })
      }
    }
  }
</script>