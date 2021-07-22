<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <Nuxt />
          <v-btn
              icon
              class="bar"
              dark
              @click.stop="drawer = !drawer"
          >
              <v-icon dark>mdi-menu</v-icon>
          </v-btn>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
    data () {
        return {
            clipped: false,
            drawer: false,
            fixed: false,
            items: [
                {
                    icon: 'mdi-briefcase',
                    title: 'Примеры работ',
                    to: '/'
                },
                {
                    icon: 'mdi-cog',
                    title: 'Услуги',
                    to: '/uslugi'
                },
                {
                    icon: 'mdi-home',
                    title: 'Главная и контакты',
                    to: '/main'
                },
                {
                    icon: 'mdi-information',
                    title: 'О нас',
                    to: '/about'
                },
            ],
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: 'Vuetify.js'
        }
    },
}
</script>

<style>
.bar {
  position: fixed;
  bottom: 25px;
  background: black;;
  right: 25px;
}

.v-navigation-drawer--fixed {
  min-height: 200vh;
}
</style>
