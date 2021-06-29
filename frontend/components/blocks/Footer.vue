<template lang='pug'>
.footer
  footer
    Container(typed='990')
      .content
        .head
          h2
            span Свяжитесь
            |  с нами
          .head-title
            Title(typed='regular-16') Будние дни: с 09:00 до 21:00
            Title(typed='regular-16') Выходные дни: с 10:00 до 21:00
        .form
          .data.form-el
            .data-el
              H4(typed='footer') Адрес
              Title(typed='footer') Россия, Челябинск, Маслобазовая улица, 5Д, 454045
            .data-el
              H4(typed='footer') Телефон
              Link(
                href='tel:89087043800'
                typed='footer'
              ) +7 (908)-704-38-00
            .data-el
              H4(typed='footer') E-mail
              Link(
                href='mailto: info@74autoturbo.ru'
                typed='footer'
              ) info@74autoturbo.ru
            .data-el
              H4(typed='footer') Вконтакте
              Link(
                href='https://vk.com/avtoturbo74'
                target='_blank'
                typed='footer'
              ) avtoturbo74
            .data-el
              H4(typed='footer') Instagram
              Link(
                href='https://www.instagram.com/servis.turbo/?hl=ru'
                target='_blank'
                typed='footer'
              ) servis.turbo
          form.form-el
            Input(
              placeholder='Введите имя'
              name='name'
              typed='footer'
            ).input
            Input(
              placeholder='Введите E-mail'
              name='email'
              typed='footer'
            ).input
            Input(
              placeholder='Введите номер телефон'
              name='name'
              typed='footer'
            ).input
            Button(typed='footer') Отправить
  .wayne
    Title(typed='min-14') Дизайн и разработка
    Link(
      typed='wayne'
      href='http://andreywayne.ru'
      target='_blank'
    ) andreywayne
</template>

<script>
import Container from '~/plugins/Container'
import Title from '~/plugins/Title'
import H4 from '~/plugins/H4'
import Link from '~/plugins/Link'
import Input from '~/plugins/Input'
import Button from '~/plugins/Button'

export default {
  components: {
    Container,
    Title,
    H4,
    Link,
    Input,
    Button
  }
}
</script>

<style scoped lang='less'>
.wayne {
  height: 70px;
  border-top: 1px solid rgba(0,0,0,0.10);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    position: relative;
    margin-bottom: 8px;
    &:before {
      content: '';
      width: 50px;
      height: 1px;
      background: #979797;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: -70px;
    }
    &:after {
      content: '';
      width: 50px;
      height: 1px;
      background: #979797;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: -70px;
    }
  }
}

footer {
  height: calc(100vh - 70px);
  min-height: 697px;
  padding-top: 100px;
  padding-bottom: 100px;
  display: flex;
  align-items: center;
  width: 100%;
}
h2 {
  font-family: Bold;
  font-size: 32px;
  color: #000000;
  letter-spacing: 0.43px;
  line-height: 38px;
  span {
    -webkit-text-stroke: 1px black;
    color: transparent!important;
  }
}

.head {
  &-title {
    margin-top: 10px;
    p:first-child {
      margin-bottom: 5px;
    }
  }
}

.form {
  margin-top: 70px;
}

.data {
  &-el {
    margin-bottom: 40px;
    h4 {
      margin-bottom: 8.5px;
    }
    a {
      color: black;
    }
  }
}

.form {
  display: flex;
  justify-content: space-between;
  form {
    max-width: 517px;
    width: 100%;
    .input {
      margin-bottom: 50px;
    }
  }
}

.footer {
  transform: translate(0);
  z-index: 2;
}

@media screen and (max-width: 1279px) {
  .form {
    .data {
      min-width: 351px;
    }
    form {
      margin-left: 25px;
    }
  }
}

@media screen and (max-width: 767px) {
  footer {
    height: auto;
    padding-top: 75px;
    padding-bottom: 75px;
  }
  h2 {
    font-size: 24px;
    line-height: 28px;
  }
  .form {
    flex-direction: column;
    margin-top: 40px;
    .data {
      min-width: 100%;
    }
    form {
      margin-left: 0;
      margin-top: 25px;
      .input {
        margin-bottom: 25px;
      }
    }
  }
  .data-el {
    margin-bottom: 25px;
  }
}
</style>
