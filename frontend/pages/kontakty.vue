<template lang='pug'>
.page
  Header
  Contacts
  Footer
</template>

<script>
import Header from '~/components/blocks/Header'
import Contacts from '~/components/blocks/Contacts'
import Footer from '~/components/blocks/Footer'

export default {
  head() {
    return {
      title: 'TURBO | контакты',
      meta: [
        { name: 'description', content: 'Приходите отремонтировать ваш автомобиль по адресу: Россия, Челябинск, Маслобазовая улица, 5Д, 454045' },
        { name: 'og:title', content: 'TURBO | контакты' },
        { name: 'keywords', content: 'контакты, челябинск, автосервис' },
        { name: 'og:description', content: 'Приходите отремонтировать ваш автомобиль по адресу: Россия, Челябинск, Маслобазовая улица, 5Д, 454045' },
      ],
      link: [
        { rel: 'canonical', href: this.$route.fullPath }
      ]
    }
  },
  components: {
    Header,
    Contacts,
    Footer
  }
}
</script>

<style lang='less'>
</style>
