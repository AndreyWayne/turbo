<template lang='pug'>
.page
  Header
  Service(
    :title='result.name'
    :price='result.price'
    :image='result.image'
    :text='result.description'
  )
  Footer
</template>

<script>
import Header from '~/components/blocks/Header'
import Service from '~/components/blocks/Service'
import Footer from '~/components/blocks/Footer'

export default {
  async asyncData({$axios, params}) {
    const result = await $axios.$get(`${process.env.baseUrl}uslugi/${params.id}`);

    return {
      result,
    }
  },
  head() {
    return {
      title: this.result.title,
      meta: [
        { name: 'description', content: this.result.description.slice(0, 80) },
        { name: 'og:title', content: this.result.title },
        { name: 'og:description', content: this.result.description.slice(0, 80) },
      ],
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
