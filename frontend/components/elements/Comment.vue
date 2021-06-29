<template lang='pug'>
.comment
  .user__im
    img(src='/image/comment.svg')
    .user
      div
        Title(typed='semibold') {{ name }}
        Title(typed='min-14').date {{ transformDate }}
      a(
        :href='`https://vk.com/id${ link }`'
        target='_blank'
        :style='{ backgroundImage: `url(${ photo })` }'
      ).user__image
  Title(typed='normal' v-html='text').comment__text
</template>

<script>
import Title from '~/plugins/Title'
import moment from 'moment'

export default {
  props: [
    'text',
    'name',
    'date',
    'photo',
    'link'
  ],
  computed: {
    transformDate() {
      moment.locale('ru')

      let parseToDate = moment(new Date(this.date * 1000), 'DD-MMM-YYYY').toDate()
      return moment(parseToDate).format('LL').replace('г.', '')
    }
  },
  components: {
    Title
  }
}
</script>

<style scoped lang='less'>
.comment {
  display: flex;
  align-items: flex-start;
  .user {
    margin-left: 44px;
    margin-right: 40px;
    max-width: 250px;
    min-width: 250px;
    width: 100%;
    padding-top: 25px;
    display: flex;
    flex-direction: column;
    &__im {
      display: flex;
      align-items: flex-start;
    }
    .date {
      position: relative;
      margin-top: 15px;
      margin-bottom: 90px;
      text-transform: lowercase;
      &:before {
        position: absolute;
        width: 55px;
        height: 3px;
        content: '';
        bottom: -20px;
        background: #A5864B;
      }
    }
    p {
      text-transform: uppercase;
      margin-bottom: 0px;
      color: white;
    }
    &__image {
      width: 160px;
      height: 160px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
  &__text {
    max-width: 550px;
    padding-top: 25px;
  }
  @media screen and (max-width: 1279px) {
    .user {
      margin-left: 0;
      min-width: 200px;
      max-width: 200px;
      &__im {
        flex-direction: column;
      }
    }
    .comment__text {
      max-width: 70%;
    }
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    .user {
      max-width: 100%;
      min-width: 100%;
      p {
        max-width: 120px;
        min-width: 120px;
      }
      &__im {
        img {
          width: 60px;
        }
      }
      flex-direction: row;
      &__image {
        width: 100px;
        height: 100px;
        margin-top: -27px;
        margin-left: 25px;
      }
      .date {
        margin-bottom: 20px;
      }
    }
    .comment__text {
      max-width: 100%;
    }
  }
}
</style>
