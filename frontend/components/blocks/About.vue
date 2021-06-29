<template lang='pug'>
Wrapper.about
  Container
    Section
      .about-content.about-content--left
        .about-content__head
          H1(
            typed='about'
          ) Лучший автосервис Челябинска
          Title(
            typed='semibold'
          ) c 2007 – 2019г.
        span Turbo
      .about-content.about-content--right
        img(src='/image/about.svg')
        .about-content__title
          Title(typed='regular-16') Занимаемся молярно-кузовным ремонтом автомобилей уже с 2007 года. За это время покрасили и восстановили более 2500 машин.
          Title(typed='regular-16') В работе используем современное оборудование. В арсенале: стапель, профессиональная покрасочная камера, немецкие пистолеты SATA, шлифмашинки MIRKA.
          Title(typed='regular-16').about-content__title--line Мы официальные дилеры микс системы TURBO (HYMAX). На каждом этапе работы используем только заводские материалы: шпаклёвка, грунтовка, автоэмаль и лак. Поэтому отвечаем за качество покраски вашего автомобиля.
          Title(typed='regular-16') Самостоятельно подбираем автоэмаль. Анализируем цвет при помощи современного многолучевого спектрофотометра и подбираем нужный при помощи программного обеспечения. Регулярно, 2–3 раза в год, к нам приезжают специалисты HYMAX и обучают последним технологиям покраски.
          Title(typed='regular-16') Продаём лакокрасочные материалы оптом и в розницу. Предлагаем краску Hymax, расходные материалы Nuovo Corso и Hymax, абразив MIRKA. Ответственно подходим к каждому заказу и даём гарантию качества 1 год.
</template>

<script>
import Wrapper from '~/plugins/Wrapper'
import Section from '~/plugins/Section'
import Container from '~/plugins/Container'
import H1 from '~/plugins/H1'
import Title from '~/plugins/Title'

export default {
  data() {
    return {
      init: false
    }
  },
  mounted() {
    this.init = true
  },
  components: {
    Wrapper,
    Section,
    Container,
    Title,
    H1
  }
}
</script>

<style scoped lang='less'>
.about {
  background-color: #131313;
}

section {
  display: flex;
  justify-content: space-between;
  padding-top: 160px;
  padding-bottom: 150px;
  min-height: 100vh;
  @media screen and (max-width: 1279px) {
    flex-direction: column;
    padding-top: 125px;
    justify-content: flex-start;
    min-height: 0;
  }
  @media screen and (max-width: 767px) {
    padding-top: 100px;
    padding-bottom: 75px;
  }
}

.about-content {
  border-top: 3px solid white;
  max-width: calc(50% - 25px);
  width: 100%;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  &--left {
    justify-content: space-between;
    flex-grow: 2;
    overflow: hidden;
    span {
      font-family: Bold;
      font-size: 72px;
      -webkit-text-stroke: 1px white;
      color: transparent!important;
      letter-spacing: 3px;
      line-height: 50px;
      text-transform: uppercase;
    }
  }
  &__head {
    h1 {
      margin-bottom: 20px;
    }
  }
  &--right {
    padding-top: 315px;
    position: relative;
    img {
      position: absolute;
      top: 30px;
      right: 0;
      width: 160px;
      height: auto;
    }
    p {
      color: white;
      line-height: 29px;
      margin-bottom: 30px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .about-content__title {
      &--line {
        color: #C8C9B9;
        padding-left: 30px;
        position: relative;
        &:before {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 2px;
          background: #C8C9B9;
          content: ''
        }
      }
    }
  }
  @media screen and (max-width: 1279px) {
    max-width: 100%;
    &__head {
      max-width: 767px;
    }
    &--left {
      span {
        display: none;
      }
    }
    &--right {
      border: 0;
      padding-top: 100px;
      img {
        top: -290px;
      }
      p {
        max-width: 80%;
      }
    }
  }
  @media screen and (max-width: 767px) {
    &__head {
      h1 {
        max-width: 320px;
        margin-bottom: 15px;
      }
    }
    &--right {
      padding-top: 50px;
      p {
        max-width: 100%;
        line-height: 24px;
        margin-bottom: 30px;
      }
      img {
        top: -171px;
        width: 50px;
      }
    }
    .about-content__title {
      &--line {
        padding-left: 15px;
      }
    }
  }
}

.cassa {
  position: absolute;
  left: -9999999px;
}

</style>
