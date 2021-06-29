import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import services from '~/store/modules/services'
import photos from '~/store/modules/photos'
import fullPhotos from '~/store/modules/fullPhotos'

const store = () => new Vuex.Store({
  modules: {
    services,
    photos,
    fullPhotos
  }
})

export default store
