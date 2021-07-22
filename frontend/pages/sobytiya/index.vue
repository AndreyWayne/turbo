<template lang='pug'>
.page
  Header
  H1(
    title='События'
    :link='title'
  )
  Events(:api='items')
  Footer
</template>

<script>
import Header from '~/components/blocks/Header'
import H1 from '~/components/blocks/H1'
import Events from '~/components/blocks/Events'
import Footer from '~/components/blocks/Footer'
import axios from 'axios'

export default {
  async asyncData() {
    let {
      data: {
        response: {
          items
        }
      }
    } = await axios.get(`https://api.vk.com/api.php?oauth=1&method=wall.get&domain=avtoturbo74&count=100&v=5.101&access_token=c52c626bc52c626bc52c626be0c540c0fccc52cc52c626b9846811daf3a43f46fb06192`)

    return {
      title: {
        href: 'https://vk.com/avtoturbo74',
        title: 'Подписаться на оф. источник'
      },
      items
    }
  },
  head() {
    return {
      title: 'TURBO | события и новости',
      meta: [
        { name: 'description', content: 'Новости в лучшем автосервисе Челябинска' },
        { name: 'og:title', content: 'TURBO | события и новости' },
        { name: 'keywords', content: 'события и новости, автопокраска, челябинск, автосервис' },
        { name: 'og:description', content: 'Новости в лучшем автосервисе Челябинска' },
      ],
      link: [
        { rel: 'canonical', href: this.$route.fullPath }
      ]
    }
  },
  components: {
    Header,
    H1,
    Events,
    Footer
  }
}
</script>

<style lang='less'>
</style>
