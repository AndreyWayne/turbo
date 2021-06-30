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
            Title(typed='regular-16') {{ main.contact_time1 }}
            Title(typed='regular-16') {{ main.contacts_time2 }}
        .form
          .data.form-el
            .data-el
              H4(typed='footer') Адрес
              Title(typed='footer') {{ main.address }}
            .data-el
              H4(typed='footer') Телефон
              Link(
                :href='`tel:${main.phone}`'
                typed='footer'
              ) {{ main.phone }}
            .data-el
              H4(typed='footer') E-mail
              Link(
                :href='`mailto: ${ main.email }`'
                typed='footer'
              ) {{ main.email }}
            .data-el
              H4(typed='footer') Вконтакте
              Link(
                :href='main.vk'
                target='_blank'
                typed='footer'
              ) avtoturbo74
            .data-el
              H4(typed='footer') Instagram
              Link(
                :href='main.inst'
                target='_blank'
                typed='footer'
              ) servis.turbo
          form(@submit.prevent="send").form-el
            Input(
              placeholder='Введите имя'
              name='name'
              typed='footer'
              v-model="name"
            ).input
            Input(
              placeholder='Введите E-mail'
              name='email'
              typed='footer'
              v-model="email"
            ).input
            Input(
              placeholder='Введите номер телефон'
              name='name'
              typed='footer'
              v-model="phone"
            ).input
            Input(
              placeholder='Сообщение'
              name='name'
              typed='footer'
              v-model="message"
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
  data() {
    return {
      name: '',
      phone: '',
      message: '',
      email: '',
    }
  },
  computed: {
    main() {
      return this.$store.state.main;
    }
  },
  methods: {
    async send() {
      if (!this.name.length) {
        alert('Заполните имя')

        return;
      }

      if (!this.phone) {
        alert('Заполните телефон')

        return;
      }

      if (!this.message.length) {
        alert('Введите сообщение')

        return;
      }

      await this.$axios.$post(`${process.env.baseUrl}mailto`, {
        name: this.name,
        email: this.email,
        phone: this.phone,
        message: this.message,
      });

      this.name = '';
      this.phone = '';
      this.message = '';
      this.email = '';

      alert('Сообщение отправлено, в ближайшее время с вами свяжутся');
    }
  },
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
