<template lang="pug">
    .main
        Container.container
            .flex
                .cp-50
                    .loader
                        h1(v-if="init") 
                            span(data-aos="fade-up" data-aos-duration="700") {{ api.head1 }}
                            span(data-aos="fade-up" data-aos-duration="700" data-aos-delay="250") {{ api.head2 }}
                        .loader-progress
                    p(data-aos="fade-up" data-aos-duration="700" data-aos-delay="650") {{ api.description }}
                    button(data-aos="fade-up" data-aos-duration="700" data-aos-delay="950" v-scroll-to="{el: 'footer', duration: '750'}") Связаться с нами
            .show-more(v-scroll-to="'.services__block'")
                span подробнее
                    span.line
</template>

<script>
import H1 from '~/plugins/H1'
import Container from '~/plugins/Container'
export default {
    props: ['api'],
    data() {
        return {
            init: false,
        }
    },
    components: {
        H1,
        Container,
    },
    mounted() {
        this.init = true;
    }
    
}
</script>

<style lang="less" scoped>
.cp-50 {
    width: 50%;
    max-width: 50%;
    flex-grow: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 175px;
    padding-bottom: 175px;

    @media (max-width: 767px) {
        max-width: 100%;
        width: 100%;
        padding-top: 100px;
        padding-bottom: 135px;
    }

    &__image {
        // background-image: url('/image/index-4.jpg');
        // background-size: cover;
        // background-position: center center;
        // background-repeat: no-repeat;
    }
}
.flex {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-grow: 2;
}

.container {
    position: relative;
}

.show-more {
    font-size: 14px;
    color: white;
    font-family: Regular;
    position: absolute;
    bottom: 10px;
    left: 0;
    text-transform: uppercase;
    padding-bottom: 50px;
    cursor: pointer;

    @media (max-width: 1279px) {
        left: auto;
    }

    .line {
        position: absolute;
        top: 25px;
        width: 2px;
        height: 50px;
        left: 0;
        content: '';
        background: rgba(255,255,255,0.25);;
        overflow: hidden;

        &:after {
        position: absolute;
        top: -10px;
        width: 2px;
        height: 15px;
        left: 0;
        content: '';
        background: white;
        animation: more 3s infinite linear;
        animation-delay: 1s;
    }
    }
}

@keyframes more {
    0% {
        top: -15px;
    }
    100% {
        top: 65px;
    }
}

button {
    border: 1px solid white;
    color: white;
    height: 55px;
    width: 280px;
    font-family: Regular;
    font-size: 18px;
    background-color: transparent;
    margin-top: 50px;
    cursor: pointer;
    transition: color .3s, background .3s;
    cursor: pointer;
    outline: none;
    border-radius: 0;

    @media (max-width: 767px) {
       width: 100%;
       height: 50px;
   }
    &:hover {
        background-color: white;
        color: black;
    }
}

.main {
    position: relative;
    background-color: black;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-image: url('/image/index-4.jpg');
    background-size: 50% auto;
    background-position: center right;
    background-repeat: no-repeat;

    @media (max-width: 767px) {
        // min-height: 0;
        // background-size: auto 120px;
        background-image: url('/image/index-mob.jpg');
        background-position: bottom right;
    }
}

.cDCESt {
    flex-grow: 2;
    display: flex;
    flex-direction: column;
}

h1 {
   color: transparent!important;
   -webkit-text-stroke: 1px #fff;
   font-family: Extra;
   font-size: 86px;
   background-image: url(/image/loader.png);
   background-repeat: no-repeat;
   background-size: contain;
   background-size: 0% 100%;
   background-clip: text;
   margin-bottom: 14px;
   text-transform: uppercase;
   display: flex;
   flex-direction: column;

   @media (max-width: 767px) {
       font-size: 42px;
       margin-bottom: 20px;
   }
}

p {
  font-family: Regular;
  font-size: 20px;
  line-height: 32px;
  max-width: 500px;
  color: white;
  position: relative;
  @media screen and (max-width: 767px) {
    font-size: 16px;
    line-height: 26px;
  }
}

h2 {
      animation: loader 5s infinite alternate;
      animation-delay: 3s;
    }

// @keyframes loader {
//   0% {
//     background-size: 0% 100%;
//   }

//   100% {
//       background-size: 100% 100%;
//   }
// }
</style>