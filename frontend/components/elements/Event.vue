<template lang='pug'>
a(
  :href='transformLink'
).event
  .image(:style='{ backgroundImage: `url(${ transformImage })` }')
  img(:src="transformImage").img
  .sub
    .title
      H2(typed='classic') {{ transformTitle }}
    .date
      Title(typed='min-14') {{ transformDate }}
</template>

<script>
import H2 from '~/plugins/H2'
import Title from '~/plugins/Title'
import moment from 'moment'

export default {
  props: [
    'title',
    'date',
    'image',
    'id'
  ],
  computed: {
    transformLink() {
      return `/sobytiya/-144263937_${ this.id }`
    },
    transformDate() {
      moment.locale('ru')

      let parseToDate = moment(new Date(this.date * 1000), 'DD-MMM-YYYY').toDate()
      return moment(parseToDate).format('LL').replace('г.', '')
    },
    transformImage() {
      if (this.image[0].type === 'video') {
        try {
            if (this.image[0].video.image[this.image[0].video.image.length - 1].url) {
            return this.image[0].video.image[this.image[0].video.image.length - 1].url
          }
        } catch(e) {
          console.log(e)
        }
      }
      if (this.image[0].type === 'photo') {
        try {
          if (this.image[0].photo.sizes[this.image[0].photo.sizes.length - 1].url) {
            return this.image[0].photo.sizes[this.image[0].photo.sizes.length - 1].url
          }
        } catch(e) {
          console.log(e)
        }
      }
    },
    transformTitle() {
      return this.title.replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
    }
  },
  components: {
    H2,
    Title
  }
}
</script>

<style scoped lang='less'>
.sub {
  display: flex;
}

.img {
  display: none;
  width: 100%;
  height: auto;
  @media (max-width: 767px) {
    display: flex;

  }
}

.image {
  height: 325px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (max-width: 767px) {
    display: none;
  }
}
.event {
  max-width: calc(50% - 25px);
  width: 100%;
  height: 475px;
  background: white;
  display: flex;
  flex-direction: column;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  * {
    color: white;
  }
  .title {
    width: 70%;
    padding: 42px 16px;
    min-height: 150px;
    background: #131313;
    overflow: hidden;
    max-height: 150px;
    padding-top: 36px;
  }
  .date {
    width: 30%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(165, 133, 75, 1)
  }
  @media screen and (max-width: 1279px) {
    max-width: calc(50% - 10px);
  }
  @media screen and (max-width: 767px) {
    max-width: 100%;
    height: auto;
    .date {
      p {
        font-size: 10px;
      }
    }
  }
}
</style>
