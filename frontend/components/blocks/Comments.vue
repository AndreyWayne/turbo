<template lang='pug'>
Wrapper.comments
  Container
    Section
      Comment(
        v-for='(item, i) in api'
        :key='i'
        :text='item.text'
        :name='item.name'
        :date='item.date'
        :photo='item.photo'
        :link='item.link'
      ).el
</template>

<script>
import Wrapper from '~/plugins/Wrapper'
import Container from '~/plugins/Container'
import Section from '~/plugins/Section'
import Comment from '~/components/elements/Comment'

export default {
  props: [
    'api'
  ],
  components: {
    Wrapper,
    Container,
    Section,
    Comment
  }
}
</script>

<style scoped lang='less'>
.comments {
  background: #131313;
  padding-bottom: 150px;
  @media screen and (max-width: 767px) {
    padding-bottom: 50px;
  }
}

.el {
  position: relative;
  padding-bottom: 75px;
  margin-bottom: 75px;
  &:before {
    bottom: 0;
    position: absolute;
    left: 0px;
    width: 100%;
    height: 1px;
    background: white;
    opacity: 0.1;
    content: '';
  }
  &:last-child {
    &:before {
      display: none;
    }
  }
  @media screen and (max-width: 767px) {
    padding-bottom: 40px;
    margin-bottom: 40px;
  }
}
</style>
