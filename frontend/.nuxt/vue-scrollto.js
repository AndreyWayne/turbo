import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo, {"duration":500})

export default function (ctx, inject) {
    inject('scrollTo', VueScrollTo.scrollTo)
}
