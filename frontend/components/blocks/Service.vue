<template lang='pug'>
Wrapper.service
  Container
    Section
      nuxt-link(to='/uslugi/').back
        img(src='/image/back.svg')
        Title(typed='min-14') Назад к услугам
      .content
        .content__left
          H1(typed='service') {{ title }}
          Title(typed='semibold') Цена: от {{ price }} ₽
          .image(:style='{ backgroundImage: `url(/image/services/${ image }.jpg)` }')
        .content__right
          .content__right--title
            H2(typed='main') О услуге
            Title(typed='normal' v-html='text')
</template>

<script>
import Wrapper from '~/plugins/Wrapper'
import Container from '~/plugins/Container'
import Section from '~/plugins/Section'
import { mapState } from 'vuex'
import Title from '~/plugins/Title'
import H1 from '~/plugins/H1'
import H2 from '~/plugins/H2'

export default {
  props: [
    'title',
    'price',
    'image',
    'text'
  ],
  computed: {
    ...mapState('photos', {
      api: state => state.photos
    })
  },
  components: {
    Wrapper,
    Container,
    Section,
    Title,
    H1,
    H2
  }
}
</script>

<style scoped lang='less'>
.service {
  background: #131313;
  padding-top: 160px;
  padding-bottom: 100px;
  min-height: 100vh;
  @media screen and (max-width: 1279px) {
    padding-top: 125px;
    padding-bottom: 75px;
  }
  @media screen and (max-width: 767px) {
    padding-top: 75px;
    padding-bottom: 50px;
  }
}

.back {
  display: flex;
  align-items: center;
  img {
    transform: rotate(180deg);
    margin-right: 20px;
  }
  p {
    color: white;
    text-transform: uppercase;
  }
}

.content {
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  &__left {
    max-width: 45%;
    width: 100%;
    h1 {
      margin-bottom: 15px;
    }
    .image {
      width: 100%;
      height: 400px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      margin-top: 75px;
    }
  }
  &__right {
    padding-top: 160px;
    max-width: 45%;
    width: 100%;
    h2 {
      color: white;
      text-transform: uppercase;
      margin-bottom: 25px;
    }
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    margin-top: 30px;
    &__left {
      max-width: 100%;
      h1 {
        margin-bottom: 5px;
      }
      .image {
        height: 165px;
        margin-top: 30px;
      }
    }
    &__right {
      padding-top: 40px;
      max-width: 100%;
      h2 {
        margin-bottom: 10px;
      }
    }
  }
}

</style>
