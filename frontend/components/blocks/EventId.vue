<template lang='pug'>
Wrapper.service
  Container
    Section
      a(href='/sobytiya/').back
        img(src='/image/back.svg')
        Title(typed='min-14') Назад к событиям
      .content
        .content__left
          H1(typed='service') {{ transformDate }}
          .image(:style='{ backgroundImage: `url(${ transformImage }` }')
        .content__right
          .content__right--title
            H2(typed='main') Описание
            Title(typed='normal') {{ transformTitle }}
</template>

<script>
import Wrapper from '~/plugins/Wrapper'
import Container from '~/plugins/Container'
import Section from '~/plugins/Section'
import Title from '~/plugins/Title'
import H1 from '~/plugins/H1'
import H2 from '~/plugins/H2'
import moment from 'moment'

export default {
  props: [
    'api'
  ],
  computed: {
    transformDate() {
      return this.api.text.substring(0, 15) + '...'
    },
    transformImage() {
      if (this.api.attachments[0].type === 'video') {
        return this.api.attachments[0].video.image[this.api.attachments[0].video.image.length - 1].url
      }
      if (this.api.attachments[0].type === 'photo') {
        return this.api.attachments[0].photo.sizes[this.api.attachments[0].photo.sizes.length - 1].url
      }
    },
    transformTitle() {
      return this.api.text.replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
    }
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
