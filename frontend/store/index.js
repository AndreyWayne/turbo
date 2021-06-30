import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import services from '~/store/modules/services'
import photos from '~/store/modules/photos'
import fullPhotos from '~/store/modules/fullPhotos'

const store = () => new Vuex.Store({
  state: {
    main: {}
  },
  mutations: {
    SET_NAME(state, value) {
      state.main = value;
    }
  },
  actions: {
    async setMain(context) {
      const main = await this.$axios.$get(`${process.env.baseUrl}main`);

      context.commit('SET_NAME', main);
    }
  },
  modules: {
    services,
    photos,
    fullPhotos
  }
})

export default store
