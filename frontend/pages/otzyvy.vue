<template lang='pug'>
.page
  Header
  H1(
    title='Отзывы'
    :link='title'
  )
  Comments(:api='commonApi')
  Footer
</template>

<script>
import Header from '~/components/blocks/Header'
import H1 from '~/components/blocks/H1'
import Comments from '~/components/blocks/Comments'
import Footer from '~/components/blocks/Footer'
import axios from 'axios'

export default {
  async asyncData({ $axios }) {
    let {
      data: {
        response: {
          items: comments
        }
      }
    } = await axios.get(`https://api.vk.com/api.php?oauth=1&method=board.getComments&group_id=144263937&topic_id=38336550&count=100&v=5.58&access_token=c52c626bc52c626bc52c626be0c540c0fccc52cc52c626b9846811daf3a43f46fb06192`)

    console.log(comments.length)

    let idComments = comments.map((item, i) => {
      return item.from_id
    })

    let {
      data: {
        response: full
      }
    } = await axios.get(`https://api.vk.com/api.php?oauth=1&method=users.get&user_ids=${ idComments.join(',') }&fields=photo_400_orig,city,verified&v=5.101&access_token=c52c626bc52c626bc52c626be0c540c0fccc52cc52c626b9846811daf3a43f46fb06192&lang=ru`)



    let commonApi = []

    comments.forEach(item => {
      full.forEach(_item => {
        if (item.from_id === _item.id && item.from_id != '12341491') {
          commonApi.push({
            name: `${ _item.first_name } ${ _item.last_name }`,
            date: item.date,
            text: item.text,
            photo: _item.photo_400_orig,
            link: _item.id
          })
        }
      })
    })

    commonApi = commonApi.reverse()

    let ax = $axios

    return {
      commonApi,
      title: {
        href: 'https://vk.com/topic-144263937_38336550',
        title: 'Смотреть все отзывы'
      },
    }
  },
  head() {
    return {
      title: 'TURBO | отзывы наших клиентов',
      meta: [
        { name: 'description', content: 'Отзывы клиентов turbo о нашей выполненной работе' },
        { name: 'og:title', content: 'TURBO | отзывы наших клиентов' },
        { name: 'keywords', content: 'отзывы, автопокраска, челябинск, автосервис' },
        { name: 'og:description', content: 'Отзывы клиентов turbo о нашей выполненной работе' },
      ],
      link: [
        { rel: 'canonical', href: this.$route.fullPath }
      ]
    }
  },
  components: {
    Header,
    H1,
    Comments,
    Footer
  }
}
</script>

<style lang='less'>
</style>
