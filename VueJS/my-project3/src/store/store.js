import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    products: [
      { name: 'Naoki', price: 100 },
      { name: 'Naoki', price: 100 },
      { name: 'Naoki', price: 100 }
    ]
  },
  getters: {
    saleProducts: state => {
      const saleProducts = state.products.map(product => {
        return {
          name: `** ${product.name} **`,
          price: product.price / 2
        }
      })
      return saleProducts
    }
  },
  mutations: {
    reducePrice: (state, payload) => {
      state.products.forEach(product => {
        product.price -= payload
      })
    }
  },
  actions: {
    reducePrice: (context, payload) => {
      setTimeout(() => {
        context.commit('reducePrice', payload)
      }, 2000)
    }
  }
})
