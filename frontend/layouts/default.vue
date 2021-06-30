<template>
  <div>
    <transition name="opacity">
      <loader v-if="isLoading" />
    </transition>
    <nuxt/>
  </div>
</template>

<script>
import Loader from '@/components/elements/Loader';
import AOS from 'aos';
export default {
  data() {
    return {
      isLoading: true,
    }
  },
  async mounted() {
    this.isLoading = false;
    AOS.init({disable: 'mobile'});

    await this.$store.dispatch('setMain');
    let vh = window.innerHeight * 0.01
		document.documentElement.style.setProperty('--vh', `${vh}px`)
  },
  components: {
    Loader,
  }
}
</script>

<style lang='less'>
* {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
}

[data-aos^=fade][data-aos^=fade] {
  @media (max-width: 767px) {
    opacity: 1;
    transform: none;
  }
} 
[data-aos="about"].aos-animate {
  background-color: #131313;

  * {
    color: white !important;
  }

  & + .ph-s {
    background-color: #131313;

  * {
    color: white !important;
  }
  }
}

.opacity-enter-active, .opacity-leave-active {
  transition: opacity .3s;
}
.opacity-enter, .opacity-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

.header__black {
    background-color: black !important;
}

html,
body {
  height: auto;
}

html {
  overflow-x: hidden;
}

body {
  padding: 0px;
  margin: 0px;
  overflow-x: hidden;
  height: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
span,
ul,
ol,
li,
a,
menu {
  margin: 0px;
  padding: 0px;
  text-decoration: none;
}

div.slider-nopadding > section {
  padding-top: 0px;
}

a:hover,
a:link,
a:visited {
  text-decoration: none;
  outline: 0px;
}

li {
  list-style: none;
}

@font-face {
  font-family: 'Extra';
  src: url('/fonts/MagistralCond-ExtraBold.eot');
  src: url('/fonts/MagistralCond-ExtraBold.eot?#iefix') format('embedded-opentype'),
       url('/fonts/MagistralCond-ExtraBold.svg#MagistralCond-ExtraBold') format('svg'),
       url('/fonts/MagistralCond-ExtraBold.ttf') format('truetype'),
       url('/fonts/MagistralCond-ExtraBold.woff') format('woff'),
       url('/fonts/MagistralCond-ExtraBold.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'SemiBold';
  src: url('/fonts/ProximaNova-SemiBoldCondensed.eot');
  src: url('/fonts/ProximaNova-SemiBoldCondensed.eot?#iefix') format('embedded-opentype'),
       url('/fonts/ProximaNova-SemiBoldCondensed.svg#ProximaNova-SemiBoldCondensed') format('svg'),
       url('/fonts/ProximaNova-SemiBoldCondensed.ttf') format('truetype'),
       url('/fonts/ProximaNova-SemiBoldCondensed.woff') format('woff'),
       url('/fonts/ProximaNova-SemiBoldCondensed.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Regular';
  src: url('/fonts/ProximaNova-RegularCondensed.eot');
  src: url('/fonts/ProximaNova-RegularCondensed.eot?#iefix') format('embedded-opentype'),
       url('/fonts/ProximaNova-RegularCondensed.svg#ProximaNova-RegularCondensed') format('svg'),
       url('/fonts/ProximaNova-RegularCondensed.ttf') format('truetype'),
       url('/fonts/ProximaNova-RegularCondensed.woff') format('woff'),
       url('/fonts/ProximaNova-RegularCondensed.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Bold';
  src: url('/fonts/ProximaNova-Bold.eot');
  src: url('/fonts/ProximaNova-Bold.eot?#iefix') format('embedded-opentype'),
       url('/fonts/ProximaNova-Bold.svg#ProximaNova-Bold') format('svg'),
       url('/fonts/ProximaNova-Bold.ttf') format('truetype'),
       url('/fonts/ProximaNova-Bold.woff') format('woff'),
       url('/fonts/ProximaNova-Bold.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Light';
  src: url('/fonts/ProximaNova-LightCondensed.eot');
  src: url('/fonts/ProximaNova-LightCondensed.eot?#iefix') format('embedded-opentype'),
       url('/fonts/ProximaNova-LightCondensed.svg#ProximaNova-LightCondensed') format('svg'),
       url('/fonts/ProximaNova-LightCondensed.ttf') format('truetype'),
       url('/fonts/ProximaNova-LightCondensed.woff') format('woff'),
       url('/fonts/ProximaNova-LightCondensed.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

.flex {
  display: flex;
}

[data-aos="example-anim1"] {
  filter: blur(15px);
  opacity: 0;
  transition-property: filter, opacity;
  &.aos-animate {
    filter: blur(0);
    opacity: 1;
  }
}

.nuxt-link {
  &-normal {
    font-family: SemiBold;
    font-size: 22px;
    color: black;
    letter-spacing: 0.5px;
    line-height: 29px;
    padding-bottom: 5px;
    position: relative;
    &:hover:after {
      width: 0;
    }
  }
}

.marker-map {
  width: 80px;
  height: 70px;
  background: url(/image/marker.svg) no-repeat center;
  background-size: contain;
}

</style>
