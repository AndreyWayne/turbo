<template lang='pug'>
div
  Wrapper.ph-t(data-aos="about" data-aos-anchor-placement="center-center")
    Container
      Section
        .titles
          .t
            H2(typed='big' data-aos="fade-up" data-aos-duration="700") {{ api.work_head }}
            .tit
              Title(typed='normal' data-aos="fade-up" data-aos-duration="700" data-aos-delay="350") {{ api.work_description }} 
              .flex(data-aos="fade-up" data-aos-duration="700" data-aos-delay="500")
                nuxt-link(to='/galereya').nuxt-link-normal Смотреть все работы
  Wrapper.ph-s
    Container
      Section
        .photos
          .photo-wr(
            v-for='(item, i) in photos.slice(0, 16)'
            :key='item.id'
            :class='`photo-wr-${ i }`'
            data-aos="fade-up"
            data-aos-duration="700"
          )
            .photo(:style='{ backgroundImage: `url(${item.image}` }')
            .photo-title
              Title(typed='semibold') {{ item.name }}
</template>

<script>
import Wrapper from '~/plugins/Wrapper'
import Container from '~/plugins/Container'
import Section from '~/plugins/Section'
import H2 from '~/plugins/H2'
import Title from '~/plugins/Title'
import ParallaxContainer from '~/components/elements/ParallaxContainer'
import ParallaxElement from '~/components/elements/ParallaxElement'

export default {
  props: ['api', 'works'],
  data() {
    return {
      photos: this.works,
    }
  },
  components: {
    Wrapper,
    Container,
    Section,
    H2,
    Title,
    ParallaxContainer,
    ParallaxElement
  }
}
</script>

<style scoped lang='less'>
.ph-t {
   color: #131313;

   @media (max-width: 1279px) {
     padding-top: 75px;
   }


   @media (max-width: 767px) {
     padding-top: 50px;

     background-color: #131313;
    padding-bottom: 50px;
    * {
      color: white !important;
    }
   }
}

.ph-s {
  background-color: white;
  transition: all .4s;

  * {
    color: black;
  }

   @media (max-width: 767px) {
    background-color: #131313;
    padding-bottom: 50px;
    * {
      color: white;
    }
   }
}
.photos {
  display: flex;
  justify-content: space-between;
  padding: 0 160px;
  flex-wrap: wrap;

  .photo {
    width: 403px;
    height: 465px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    opacity: 1;
    /* filter: grayscale(70%); */
    &-title {
      padding-left: 40px;
      p {
        color: white;
        margin-top: 20px;
      }
    }
    &-wr {
      opacity: 1;
      margin-bottom: 113px;
      transition: all .4s;
      &:nth-child(2n) {
        margin-top: 50px;
      }
    }
    &--active {
      opacity: 1;
    }
  }
}

.titles {
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
}

.t {
  display: flex;
  justify-content: space-between;
  h2 {
    color: black;
    max-width: 620px;
  }

  p {
    max-width: 414px;
    width: 100%;
    margin-top: 180px;
    color: black;
  }

  .tit {
    display: flex;
    flex-direction: column;
    a {
      margin-top: 25px;
    }
  }
}

#photos {
  padding-bottom: 100px;
  transition: all .5s;
  padding-top: 100px;

}

@media screen and (max-width: 1279px) {
  .titles {
    min-height: auto;
    padding: 0;
  }
  .t {
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 150px;
    p {
      margin-top: 50px;
      max-width: 70%;
    }
  }
  .photos  {
    padding: 0 30px;

    .photo {
      width: calc(50vw - 70px);
      height: 70vw;
    }
  }
}

@media screen and (max-width: 767px) {
  #photos {
    padding-top: 100px;
    padding-bottom: 50px;
  }
  .t {
    margin-bottom: 45px;
    p {
      margin-top: 20px;
      max-width: 90%;
    }
  }
  .photos  {
    padding: 0 0px;
    flex-direction: column;

    .photo {
      width: calc(100%);
      height: 60vh;
      &-title {
        padding-left: 20px;
      }
      &-wr {
        margin-bottom: 30px;
        transition: all .4s;
        &:nth-child(2n) {
          margin-top: 30px;
        }
      }
    }

  }
}
</style>
