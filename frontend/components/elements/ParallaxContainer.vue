<template lang='pug'>
.ParallaxContainer
  slot
</template>

<script>
export default {
  name: 'ParallaxContainer',
  provide() {
    return {
      parallaxContainer: this.data,
    };
  },
  data() {
    return {
      data: {
        height: 0,
        scrollFactor: 0,
        width: 0,
      },
    };
  },
  mounted() {
    this.calcParallax()

    const eventHandler = () => requestAnimationFrame(this.calcParallax)
    window.addEventListener('resize', eventHandler)
    window.addEventListener('scroll', eventHandler)

    this.$on(`hook:destroyed`, () => {
      window.removeEventListener('resize', eventHandler)
      window.removeEventListener('scroll', eventHandler)
    });
  },
  methods: {
    calcParallax() {
      const containerRect = this.$el.getBoundingClientRect()

      this.data.height = containerRect.height
      this.data.width = containerRect.width

      const viewportOffsetTop = containerRect.top;
      const viewportOffsetBottom = window.innerHeight - viewportOffsetTop

      this.data.scrollFactor = viewportOffsetBottom / (window.innerHeight + this.data.height)
    }
  }
}
</script>

<style scoped lang='less'>
</style>
