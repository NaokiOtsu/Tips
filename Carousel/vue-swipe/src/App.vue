<template>
  <div id="app">
    <swipe class="my-swipe" ref="mySwipe2" :auto="0" :continuous="true" :show-indicators="false" @change="changeSwipe">
      <swipe-item class="slide1">Slide1</swipe-item>
      <swipe-item class="slide2">Slide2</swipe-item>
      <swipe-item class="slide3">Slide3</swipe-item>
    </swipe>

    <button @click="goto(2)">goto page 3</button>
    <button @click="goto(0)">goto page 1</button>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vue-swipe';

export default {
  name: 'app',
  components: {
    Swipe,
    SwipeItem,
  },
  data() {
    return {
      index: 0,
    }
  },
  methods: {
    goto(index) {
        this.$refs.mySwipe2.goto(index);
      },
      changeSwipe(newIndex, oldIndex) {
        console.log(`swipe from ${oldIndex} to ${newIndex}`);
      }

  }
}
</script>

<style>
@import '~vue-swipe/dist/vue-swipe.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slide1 {
  background-color: #0089dc;
  color: #fff;
}

.slide2 {
  background-color: #ffd705;
  color: #000;
}

.slide3 {
  background-color: #ff2d4b;
  color: #fff;
}
</style>
