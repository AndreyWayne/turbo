<template lang='pug'>
.page
  Header
  Service(
    :title='service.title'
    :price='service.price'
    :image='service.image'
    :text='service.text'
  )
  Footer
</template>

<script>
import Header from '~/components/blocks/Header'
import Service from '~/components/blocks/Service'
import Footer from '~/components/blocks/Footer'
import { mapState } from 'vuex'

export default {
  asyncData({ store, route }) {
    let { services } = store.state.services

    let service = services.find(item => {
      return item.url === route.path
    })

    return {
      service
    }
  },
  head() {
    return {
      title: this.service.seo.title,
      meta: [
        { name: 'description', content: this.service.seo.description },
        { name: 'keywords', content: this.service.seo.keywords },
        { name: 'og:title', content: this.service.seo.title },
        { name: 'og:description', content: this.service.seo.description },
      ],
      link: [
        { rel: 'canonical', href: this.$route.fullPath }
      ]
    }
  },
  components: {
    Header,
    Service,
    Footer
  }
}
</script>

<style lang='less'>
</style>
