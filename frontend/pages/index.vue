<template lang='pug'>
.page
  Header
  Main(:api="main")
  WhoAre(:api="main")
  Services
  Photos(:api="main" :works="works")
  Footer
</template>

<script>
import Header from '~/components/blocks/Header'
import Main from '~/components/blocks/Main'
import Services from '~/components/blocks/Services'
import Photos from '~/components/blocks/Photos'
import Footer from '~/components/blocks/Footer'
import WhoAre from '~/components/blocks/WhoAre'

export default {
  async asyncData({$axios}) {
      const main = await $axios.$get(`${process.env.baseUrl}main`);
      const works = await $axios.$get(`${process.env.baseUrl}works`);

      return {
          main,
          works,
      }
  },
  head() {
    return {
      title: 'TURBO | кузовной ремонт и автопокраска в Челябинске',
      meta: [
        { name: 'description', content: 'Лучший автосервис в Челябинске по кузовному ремонту и автопокраске' },
        { name: 'og:title', content: 'TURBO | кузовной ремонт и автопокраска в Челябинске' },
        { name: 'keywords', content: 'turbo, кузовной ремонт, автопокраска, челябинск, автосервис' },
        { name: 'og:description', content: 'Лучший автосервис в Челябинске по кузовному ремонту и автопокраске' },
      ],
      link: [
        { rel: 'canonical', href: this.$route.fullPath }
      ]
    }
  },
  components: {
    Header,
    Main,
    Services,
    Photos,
    Footer,
    WhoAre,
  }
}
</script>
