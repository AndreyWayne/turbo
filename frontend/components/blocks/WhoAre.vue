<template lang='pug'>
Wrapper.wr
  Container
    Section
      .who-are
        .title ЧТО МЫ ДЕЛАЕМ?
        .description Наш сервис предоставляет более 16 услуг по ремонту автомобиля с 2007 года, соблюдая идеальное качество работы и низкие цены.
</template>

<script>
import Wrapper from '~/plugins/Wrapper'
import Container from '~/plugins/Container'
import Section from '~/plugins/Section'
export default {
  components: {
    Wrapper,
    Container,
    Section,
  }
}
</script>

<style scoped lang='less'>
.who-are {
  display: flex;
  padding-top: 75px;
  padding-bottom: 75px;

  @media (max-width: 767px) {
    padding-top: 30px;
    padding-bottom: 30px;
    flex-direction: column;
  }
}

.title {
    font-family: SemiBold;
    font-size: 14px;
    color: #a5864b;
    -webkit-letter-spacing: 4.2px;
    -moz-letter-spacing: 4.2px;
    -ms-letter-spacing: 4.2px;
    letter-spacing: 4.2px;
    line-height: 18px;
    text-transform: uppercase;
    white-space: nowrap;
    margin-right: 35px;
    @media (max-width: 767px) {
      margin-right: 0;
      margin-bottom: 16px;
    }
}

.description {
      font-family: Regular;
    font-size: 28px;
    -webkit-letter-spacing: 1px;
    -moz-letter-spacing: 1px;
    -ms-letter-spacing: 1px;
    letter-spacing: 1px;
    line-height: 40px;
    margin-top: -10px;

    @media (max-width: 767px) {
     font-size: 16px;
     line-height: 24px;
    }
}
</style>
