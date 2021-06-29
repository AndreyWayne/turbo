<template lang='pug'>
header(:class="{'header__black': headerBlack}")
  .desktop
    a(href="//showstreams.tv/" class='cassa')
      img(src="//www.free-kassa.ru/img/fk_btn/13.png" title="Бесплатный видеохостинг")
    ul.header__nav
      li
        nuxt-link(to='/').link-logo TURBO
      li
        nuxt-link(to='/o-nas') О нас
      li
        nuxt-link(to='/uslugi') Услуги
      li
        nuxt-link(to='/galereya') Галерея
      li
        a(href='/otzyvy') Отзывы
      li
        a(href='/sobytiya') События
      li
        a(href='/kontakty') Контакты
    ul.header__contacts
      li
        a(
          href='mailto:89087043800'
        ) +7 (908)-704-38-00
      li
        a(
          href='mailto:info@74autoturbo.ru'
        ) info@74autoturbo.ru
  .mobile
    transition(name='fade')
      .menu-gl(v-if='open')
        .menu-gl-scroll
          .menu-gl-content
            ul
              li
                nuxt-link(to='/o-nas') О нас
              li
                nuxt-link(to='/uslugi') Услуги
              li
                nuxt-link(to='/galereya') Галерея
              li
                a(href='/otzyvy') Отзывы
              li
                a(href='/sobytiya') События
              li
                a(href='/kontakty') Контакты
            ul
              li
                a(
                  href='mailto:89087043800'
                ) +7 (908)-704-38-00
              li
                a(
                  href='mailto:info@74autoturbo.ru'
                ) info@74autoturbo.ru
              li
                p Челябинск, Маслобазовая улица, 5Д, 454045
    nuxt-link(to='/').link-logo TURBO
    .menu-button(@click='openMenu')
      .menu-but(:class='{ closes: open }')
        span.espan
        span.espan
        span.espan
</template>

<script>
export default {
  data() {
    return {
      open: false,
      headerBlack: false,
    }
  },
  methods: {
    openMenu() {
      this.open = !this.open
    }
  },
  mounted() {
    if (this.$route.fullPath === '/') {
      this.headerBlack = true;
    }
    window.addEventListener('scroll', () => {
      if (this.$route.fullPath != '/') {
          return;
      }

      if (window.scrollY <= window.innerHeight) {
          this.headerBlack = true;

          return;
      }

        this.headerBlack = false;
    });
  }
}
</script>

<style scoped lang='less'>
.desktop {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
header {
  width: calc(100%);
  padding: 0 100px;
  left: 50%;
  transform: translateX(-50%);
  height: 60px;
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  background: #131313;
  height: 60px;
  @media screen and (max-width: 1279px) {
    padding: 0 20px;
  }
}

.header__nav {
  display: flex;
  align-items: center;
  li:first-child {
    margin-right: 50px;
  }
  li {
    margin-right: 30px;
    &:last-child {
      margin-right: 0;
    }
  }
  a {
    font-family: Light;
    font-size: 14px;
    color: #FFFFFF;
    letter-spacing: 0.5px;
  }
  .link-logo {
    font-family: Extra;
    font-size: 24px;
    color: #FFFFFF;
    letter-spacing: 1px;
  }
}

.header__contacts {
  display: flex;
  align-items: center;
  a {
    font-family: SemiBold;
    font-size: 16px;
    color: #FFFFFF;
    letter-spacing: 0.5px;
    margin-left: 40px;
  }
  li {
    position: relative;
    &:last-child {
      &:before {
        top: 50%;
        left: 19px;
        width: 1px;
        height: 20px;
        background: rgba(255,255,255,0.60);
        content: '';
        position: absolute;
        transform: translateY(-50%);
      }
    }
  }
}

.mobile {
  display: none;
}

@media screen and (max-width: 1279px) {
  .desktop {
    display: none;
  }
  header {
    height: 50px;
    padding: 0 10px;
  }
  .mobile {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    .link-logo {
      font-family: Extra;
      font-size: 18px;
      color: #FFFFFF;
      letter-spacing: 1px;
    }
  }
}

.menu-button {
  width: 45px;
  height: 32px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.menu-but{
  width: 25px;
  height: 12px;
  display: block;
  margin: auto;
  cursor:pointer;
  position: relative;
  @media screen and (max-height: 900px), screen and (max-width: 1439px) {
    height: 8px;
    width: 20px;
  }
  @media screen and (max-width: 767px) {
    width: 17px;
    height: 9px;
  }
}
.menu-but .espan{
  display:block;
  position:absolute;
  width:25px;
  height: 1px;
  background: white;
  transition: all .3s;
  opacity:1;
  @media screen and (max-height: 900px), screen and (max-width: 1439px) {
    width: 20px;
  }
  @media screen and (max-width: 767px) {
    width: 20px;
  }
}
.menu-but.prev {
  .espan {
    background: white;
  }
   span:nth-child(1){
  	transition: none;
  }

   span:nth-child(2){
    transition: none;
  }

   span:nth-child(3){
    transition: none;
  }
}
.menu-but span:nth-child(1){
  top:0px;
}
.menu-but span:nth-child(2){
  top:5.5px;
  width: 20px;
  left: 0px;
  @media screen and (max-width: 767px) {
    width: 20px;
    top: 4px;
  }
}
.menu-but span:nth-child(3){
  top:10px;
  @media screen and (max-height: 900px), screen and (max-width: 1439px) {
    top: 8px;
  }
}

.closes span:nth-child(1){
  transform:rotate(45deg);
	transition: all .5s;
  top: 5px;
}

.closes span:nth-child(2){
  /* transform:translateX(-45px); */
	transition: all .2s;
  opacity:0;
}

.closes span:nth-child(3){
  transform:rotate(-45deg);
	transition: all .5s;
  top:5px;
}

.menu-gl {
  position: fixed;
  top: 49px;
  left: 0;
  height: calc(100vh);
  width: 300px;
  background: #131313;
  overflow: hidden;
  -webkit-overflow-scrolling:touch;
  overflow: -moz-scrollbars-none;
  &-scroll {
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling:touch;
    overflow: -moz-scrollbars-none;
  }
  &-content {
    padding: 30px 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    li {
      a, p {
        font-family: Light;
        font-size: 14px;
        color: #FFFFFF;
        letter-spacing: 0.5px;
      }
      margin-bottom: 10px;
    }
    ul:last-child {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      margin-top: 15px;
      padding-top: 15px;
      display: flex;
      flex-direction: column;
      a, p {
        font-family: SemiBold;
        font-size: 12px;
      }
      p {
        height: 18px;
        display: flex;
        align-items: center;
      }
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: all .4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  transform: translateX(-100%);
  opacity: 0;
}

.cassa {
  position: absolute;
  left: -9999999px;
}
</style>
