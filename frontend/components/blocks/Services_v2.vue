<template lang='pug'>
Wrapper.serv
  Container.container
    Section
      .services
        .services__items
          .services-image(
            v-for='(item, i) in api'
            :key='100 + i'
            :class='{ "services-image--active": item.active }'
            :style='{ backgroundImage: `url(${item.image})` }'
          )
          nuxt-link.services__item(
            v-for='(item, i) in api'
            :key='i'
            :to='`/uslugi/${item.id}`'
            @mouseover.native='item.active = true; hover = true'
            @mouseout.native='item.active = false; hover = false'
            :class='{ "services__item--color": hover }'
          )
            .services__item-head
              p {{ item.index }}
              <svg width="16px" height="18px" viewBox="0 0 16 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs></defs>
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.49609375">
                      <g id="Главная" transform="translate(-812.000000, -1732.000000)" fill="#000000" fill-rule="nonzero">
                          <g id="Услуги-Copy" transform="translate(-2.000000, 1719.000000)">
                              <g id="card-copy-2" transform="translate(603.000000, 0.000000)">
                                  <path id="Line" d="M226.829252,13.1237117 L217.516116,16.9336312 L224.289306,22.8601726 L226.829252,13.1237117 Z M212.876288,29.8292523 L221.642494,19.8107317 L221.971746,19.4344434 L221.219169,18.7759388 L220.889917,19.1522271 L212.123712,29.1707477 L211.794459,29.547036 L212.547036,30.2055407 L212.876288,29.8292523 Z"></path>
                              </g>
                          </g>
                      </g>
                  </g>
              </svg>
            .services__item-title
              H3(typed='sale') {{ item.name }}
              H4(typed='sale') от {{ item.price }} ₽
</template>

<script>
import Wrapper from '~/plugins/Wrapper'
import Container from '~/plugins/Container'
import Section from '~/plugins/Section'
import H3 from '~/plugins/H3'
import H4 from '~/plugins/H4'
import { mapState } from 'vuex'

export default {
  props: ['api'],
  data() {
    return {
      services: [],
      hover: false
    }
  },
  components: {
    Wrapper,
    Container,
    Section,
    H3,
    H4
  }
}
</script>

<style scoped lang='less'>
.serv {
  background: #131313;
}

section {
  position: relative;
  padding-bottom: 150px;
  @media screen and (max-width: 767px) {
    padding-bottom: 75px;
  }
}

.services {
  display: flex;
  &__items {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    position: relative;
    top: 0;
    left: 0;
    overflow: hidden;
  }
  &-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all .6s;
    transform: scale(1.1);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    filter: grayscale(100%) brightness(40%);
    opacity: 0;
    &--active {
      transform: scale(1);
      opacity: 1;
    }
  }
  &__item {
    width: 25%;
    height: 33vw;
    max-height: 240px;
    margin: 0;
    min-width: 240px;
    border: 1px solid rgba(255,255,255,0.15);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 15px;
    padding-left: 30px;
    padding-top: 17px;
    padding-bottom: 40px;
    transition: all .4s;
    position: relative;
    @media screen and (max-width: 1279px) {
      width: 25vw;
      height: 25vw;
      max-width: 25vw;
      max-height: 25vw;
      min-width: 25vw;
    }
    &:before {
      content: '';
      width: 0;
      height: 100%;
      left: 0;
      top: 0;
      position: absolute;
      transition: all .3s;
      background: rgba(165, 133, 75, .6);
    }
    &-title {
      transform: translate(0);
      z-index: 2;
    }
    &:hover {
      border: 1px solid rgba(165, 133, 75, .6);
      &:before {
        width: 100%;
      }
      * {
        color: white;
        opacity: 1;
        fill: white;
      }
    }
    &-head {
      transform: translate(0);
      z-index: 2;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-right: 12px;
      p {
        opacity: 0.5;
        font-family: SemiBold;
        font-size: 12px;
        color: #000000;
        letter-spacing: 0.38px;
      }
    }
    h3 {
      color: #131313;
    }
    h4 {
      color: rgba(0,0,0,0.50);
      margin-top: 10px;
    }
    h4, h4, p {
      transition: all .3s;
    }
    &--color {
      h3, h4, p, g {
        color: white;
        opacity: 1;
        fill: white;
      }
    }
    p, h4, h3, svg, g {
      color: white;
      fill: white;
    }
    &--head {
      border: none;
      background: #A5864B;
      padding: 0;
      width: 240px;
      height: 240px;
      max-height: 240px;
      margin: 0;
      min-width: 240px;
      display: flex;
      &-title {
        display: flex;
        align-items: flex-end;
        min-height: 240px;
        padding-top: 15px;
        padding-left: 30px;
        padding-top: 17px;
        padding-bottom: 40px;
        * {
          color: white;
        }
      }
      &-description {
        display: flex;
        align-items: center;
        img {
          margin-left: 25px;
        }
      }
    }
  }
}

@media screen and (max-width: 1279px) {
  .container {
    padding: 0;
  }
}

@media screen and (max-width: 767px) {
  .services {
    flex-direction: column;
    &__items {
      min-height: 0;
      height: auto;
      padding: 0 10px;
    }
    &__item {
      width: 100vw;
      height: 60px;
      max-width: 100%;
      max-height: 60px;
      min-width: 100%;
      padding: 0;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      border: none;
      border-bottom: 1px solid rgba(255,255,255,0.3);
      position: relative;
      &:last-child {
        border-bottom: 0;
      }
      svg {
        position: absolute;
        left: calc(100vw - 44px);
        top: 50%;
        transform: translateY(-50%);
      }
      h4 {
        margin-top: 7px;
      }
      &-head {
        p {
          margin-bottom: 22px;
        }
      }
    }
  }
  .head {
    order: 2;
    #services-head,
    #services-head a,
    .services__item--head-title {
      width: 100vw;
      height: 60px;
      max-width: 100%;
      max-height: 60px;
      min-width: 100%;
      align-items: center;
      padding: 0;
    }
    .services__item--head-title {
      padding: 0 10px;
    }
  }
}
</style>
