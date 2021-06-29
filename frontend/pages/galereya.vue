<template lang='pug'>
.page
  Header
  H1(
    title='Галерея'
    :link='title'
  )
  Passage
  Footer
</template>

<script>
import Header from '~/components/blocks/Header'
import H1 from '~/components/blocks/H1'
import Passage from '~/components/blocks/Passage'
import Footer from '~/components/blocks/Footer'

export default {
  data() {
    return {
      title: {
        href: 'https://vk.com/album-144263937_242905323',
        title: 'Смотреть все работы'
      }
    }
  },
  head() {
    return {
      title: 'TURBO | примеры выполненных работ',
      meta: [
        { name: 'description', content: 'Примеры работ, галерия в автосервисе TURBO, где можно увидеть, что мы способны качественно отремонтировать автомобиль любой сложности.' },
        { name: 'og:title', content: 'TURBO | примеры выполненных работ' },
        { name: 'keywords', content: 'примеры работ, галереия, челябинск, автосервис' },
        { name: 'og:description', content: 'Примеры работ, галерия в автосервисе TURBO, где можно увидеть, что мы способны качественно отремонтировать автомобиль любой сложности.' },
      ],
      link: [
        { rel: 'canonical', href: this.$route.fullPath }
      ]
    }
  },
  components: {
    Header,
    H1,
    Passage,
    Footer
  }
}
</script>

<style lang='less'>
</style>
