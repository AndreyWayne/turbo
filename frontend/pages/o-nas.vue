<template lang='pug'>
.page
  Header
  About
  Footer
</template>

<script>
import Header from '~/components/blocks/Header'
import About from '~/components/blocks/About'
import Footer from '~/components/blocks/Footer'

export default {
  components: {
    Header,
    About,
    Footer
  },
  head() {
    return {
      title: 'TURBO | о нас',
      meta: [
        { name: 'description', content: 'Подробное описание автосервиса Turbo в Челябинске' },
        { name: 'og:title', content: 'TURBO | о нас' },
        { name: 'keywords', content: 'о нас, челябинск, автосервис' },
        { name: 'og:description', content: 'Подробное описание автосервиса Turbo в Челябинске' },
      ],
      link: [
        { rel: 'canonical', href: this.$route.fullPath }
      ]
    }
  },
}
</script>

<style lang='less'>
</style>
