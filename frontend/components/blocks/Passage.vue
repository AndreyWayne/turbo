<template lang='pug'>
Wrapper.wr
  Container
    Section
      .photos
        .photo-wr(
          v-for='(item, i) in api'
          :key='item.id'
          :class='`photo-wr-${ i }`'
          data-aos="fade-up"
          data-aos-duration="700"
        )
          .photo(:style='{ backgroundImage: `url(${item.image}` }')
          .photo-title
            Title(typed='semibold') {{ item.name }}
            Title(typed='min-14' class="min") {{ item.description }}
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
  props: ['api'],
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
.wr {
  background-color: #131313;
}

.min {
  max-width: 340px;
  line-height: 22px;
  opacity: 0.8;
}

section {
  padding-bottom: 100px;
  @media screen and (max-width: 767px) {
    padding-bottom: 75px;
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
    filter: grayscale(70%);
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

@media screen and (max-width: 1279px) {
  .titles {
    min-height: auto;
    padding: 0 30px;
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
    margin-bottom: 75px;
    p {
      margin-top: 20px;
      max-width: 90%;
    }
  }
  .photos  {
    padding: 0 20px;
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
