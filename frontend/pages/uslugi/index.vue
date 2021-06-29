<template lang='pug'>
.page
  Header
  H1(
    title='Услуги'
  )
  Services
  Footer
</template>

<script>
import Header from '~/components/blocks/Header'
import H1 from '~/components/blocks/H1'
import Services from '~/components/blocks/Services_v2'
import Footer from '~/components/blocks/Footer'

export default {
  components: {
    Header,
    H1,
    Services,
    Footer
  },
  head() {
    return {
      title: 'TURBO | услуги',
      meta: [
        { name: 'description', content: 'В нашем сервесе более 16 услуг, где основной акцент на кузовной ремонт и автопокраску' },
        { name: 'og:title', content: 'TURBO | услуги' },
        { name: 'keywords', content: 'услуги, челябинск, автосервис' },
        { name: 'og:description', content: 'В нашем сервесе более 16 услуг, где основной акцент на кузовной ремонт и автопокраску' },
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
