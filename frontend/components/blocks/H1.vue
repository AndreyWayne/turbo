<template lang='pug'>
Wrapper.head-page
  Container
    Section
      H1(typed='page') {{ title }}
      a(
        v-if='link'
        :href='link.href'
        target='_blank'
      )
        i {{ link.title }}
</template>

<script>
import Wrapper from '~/plugins/Wrapper'
import Container from '~/plugins/Container'
import Section from '~/plugins/Section'
import H1 from '~/plugins/H1'

export default {
  props: [
    'title',
    'link'
  ],
  components: {
    Wrapper,
    Container,
    Section,
    H1
  }
}

</script>

<style scoped lang='less'>
.head-page {
  background: #131313;
  padding-top: 160px;
  padding-bottom: 100px;
  @media screen and (max-width: 1279px) {
    padding-top: 125px;
    padding-bottom: 75px;
  }
  @media screen and (max-width: 767px) {
    padding-top: 100px;
    padding-bottom: 50px;
    /* */
  }
}

section {
  border-bottom: 3px solid white;
  padding-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 15px;
  }
}

a {
  font-family: semibold;
  font-size: 14px;
  font-weight: 600;
  color: #C8C9B9;
  letter-spacing: 0.57px;
  margin-bottom: 15px;
  text-transform: uppercase;
  @media screen and (max-width: 767px) {
    font-size: 10px;
    margin-bottom: 0;
    margin-top: 10px;
  }
}
</style>
