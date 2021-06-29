<template lang='pug'>
.page
  Header
  EventId(:api='responseId')
  Footer
</template>

<script>
import Header from '~/components/blocks/Header'
import EventId from '~/components/blocks/EventId'
import Footer from '~/components/blocks/Footer'
import axios from 'axios'

export default {
  async asyncData({ params }) {
    let {
      data: {
        response
      }
    } = await axios.get(`https://api.vk.com/api.php?oauth=1&method=wall.getById&posts=${ params.id }&v=5.101&&access_token=c52c626bc52c626bc52c626be0c540c0fccc52cc52c626b9846811daf3a43f46fb06192`)

    let responseId = response[0]

    return {
      responseId
    }
  },
  head() {
    return {
      title: `TURBO | кузовной ремонт и автопокраска в Челябинске, статья ${ this.responseId.id }`,
      meta: [
        { name: 'description', content: `СТО, автосервис в Челябинске  ${ this.responseId.id }` },
        { name: 'og:title', content: `TURBO | кузовной ремонт и автопокраска в Челябинске, статья ${ this.responseId.id }` },
        { name: 'keywords', content: 'событие, автопокраска, челябинск, автосервис' },
        { name: 'og:description', content: `СТО, автосервис в Челябинске  ${ this.responseId.id }` },
      ],
      link: [
        { rel: 'canonical', href: this.$route.fullPath }
      ]
    }
  },
  components: {
    Header,
    EventId,
    Footer
  }
}
</script>

<style lang='less'>
</style>
