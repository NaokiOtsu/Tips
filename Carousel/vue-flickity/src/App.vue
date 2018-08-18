<template>
  <div id="app" ref="app">
    <flickity ref="flickity" :options="flickityOptions">
      <div class="carousel-cell" v-for="(item, index) in list" :key="index">
        {{index}}
      </div>
      {{text}}
    </flickity>

    <!-- if you don't want to use the buttons Flickity provides -->
    <button @click="previous()">Custom Previous Button</button>
    <button @click="next()">Custom Next Button</button>

    <ul>
      <li v-for="(item, index) in list" :key="index" @click="select(index)" :class="{ active: index === currentIndex}">
        {{index}}
      </li>
    </ul>
  </div>
</template>

<script>
import Flickity from 'vue-flickity';
// import Hammer from 'hammerjs';

export default {
  name: 'app',

  components: {
    Flickity
  },

  data() {
    return {
      text: 'first',
      isSwiping: false,
      list: [],
      currentIndex: 0,
      p: {
        x: 0,
        y: 0,
      },
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true
      }
    }
  },

  created() {
    setTimeout(() => {
      // console.log(this.$refs.flickity, 111, Hammer)
      // const hammer = new Hammer(this.$refs.flickity.$el);
      // console.log(444, hammer)
      // hammer.on('swipeleft', (event) => {
      //   console.log(99999, event)
      // })
      // hammer.on('swipeleft', () => {
      //   console.log(99999)
      // })
      this.list = [1,2,3,4,5];
      this.$nextTick(() => {
        this.$refs.flickity.rerender()
        this.$refs.flickity.on('change', this.change)
        this.$refs.flickity.on('dragStart', this.dragStart)
        this.$refs.flickity.on('dragMove', this.dragMove)
        this.$refs.flickity.on('dragEnd', this.dragEnd)
        this.$refs.flickity.$el.addEventListener('touchmove', this.move)
      });
    }, 1000)
  },

  mounted() {
    // console.log(this.$refs.app)
  },

  methods: {
    next() {
      this.$refs.flickity.next();
    },

    previous() {
      this.$refs.flickity.previous();
    },

    select(index) {
      this.$refs.flickity.select(index);
    },

    change() {
      this.currentIndex = this.$refs.flickity.selectedIndex();
    },

    dragStart() {
      this.isSwiping = true;
    },

    dragMove() {
      this.isSwiping = true;
    },

    dragEnd() {
      this.isSwiping = false;
    },

    move(event) {
      if (this.isSwiping) event.preventDefault();
      // return;
      // event.preventDefault();
      const x = event.touches[0].clientX;
      const y = event.touches[0].clientY;
      const deltaX = x - this.p.x;
      const deltaY = y - this.p.y;
      // if (deltaX > 0) console.log('右へ')
      // if (deltaX < 0) console.log('左へ')
      // if (deltaY > 0) console.log('下へ')
      // if (deltaY < 0) console.log('上へ')

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // console.log('左右が大きい')
        this.text = '左右が大きい'
        event.preventDefault();
      }
      if (Math.abs(deltaX) < Math.abs(deltaY)) {
        // console.log('上下が大きい')
        this.text = '上下が大きい'
      }

      this.p.x = x;
      this.p.y = y;
    }
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
.flickity-enabled {
  /* margin-bottom: 3000px; */
}
.carousel-cell {
  width: 100%;
  height: 2000px;
  background: #efefef;
}
.active {
  color: red;
}
</style>
