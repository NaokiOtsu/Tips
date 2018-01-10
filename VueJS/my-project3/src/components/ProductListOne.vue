<template>
  <div id="product-list-one">
    one
    <ul>
      <li v-for="product in saleProducts">
        <span class="name">{{ product.name }}</span>
        <span class="price">{{ product.price }}</span>
      </li>
    </ul>
    <button @click="reducePrice(4)">reducePrice</button>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  computed: {
    products () {
      return this.$store.state.products
    },
    ...mapGetters([
      'saleProducts'
    ])
  },
  methods: {
    ...mapActions([
      'reducePrice'
    ])
    // reducePrice: function (amount) {
    //   const payload = {
    //     amount
    //   }
    //   this.$store.dispatch('reducePrice', payload)
    // }
  }
}
</script>

<style>

</style>
