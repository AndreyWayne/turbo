<template lang='pug'>
Wrapper.events
  Container
    Section
      Event(
        v-for='(item, i) in api'
        :key='i'
        :title='item.text'
        :date='item.date'
        :image='item.attachments'
        :id='item.id'
      ).el
</template>

<script>
import Wrapper from '~/plugins/Wrapper'
import Section from '~/plugins/Section'
import Container from '~/plugins/Container'
import Event from '~/components/elements/Event'

export default {
  props: [
    'api'
  ],
  components: {
    Wrapper,
    Container,
    Section,
    Event
  }
}
</script>

<style scoped lang='less'>
section {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.events {
  background: #131313;
}

.el {
  margin-bottom: 50px;
  @media screen and (max-width: 767px) {
    margin-bottom: 25px;
  }
}
</style>
