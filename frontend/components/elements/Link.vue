<template lang='pug'>
nuxt-link(to='/')
  .circle
  p Услуги
</template>

<script>
export default {
}
</script>

<style scoped lang='less'>
a {
  display: flex;
  align-items: center;
  &:hover {
    p {
      letter-spacing: 6px;
    }
  }
}

.circle {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #A5864B;
}

p {
  margin-left: -20px;
  font-size: 16px;
  color: #000000;
  letter-spacing: 4px;
  font-family: Semibold;
  color: white;
  transition: all .4s;
}
</style>
