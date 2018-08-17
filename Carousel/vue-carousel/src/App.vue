<template>
  <div id="app">
    hoge
    <carousel :per-page="1" :loop="true" :navigation-enabled="true">
      <slide>
        Slide 1 Content
      </slide>
      <slide>
        Slide 2 Content
      </slide>
      <slide>
        Slide 2 Content
      </slide>
      <slide>
        Slide 2 Content
      </slide>
      <slide>
        Slide 2 Content
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'app',
  components: {
    Carousel,
    Slide
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
