<template>
  <div class="home">
    <h1>Hey, I'm Emil — a front-end developer currently working at <a href="https://boardeaser.com/en/">Boardeaser</a>, where we simplify the everyday life for boards and executives.</h1>
    <Projects />
  </div>
</template>

<script>
import Projects from '@/components/Projects.vue'

export default {
  name: 'home',
  components: {
    Projects
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

h1 {
  font-size: 30px;
  font-weight: 600;
  margin: 25px 0 25px;

  @include tablet {
    font-size: 36px;
    margin: 25px 0 50px;
    max-width: 1200px;
  }

  @include desktop {
    font-size: 40px;
    margin: 50px 0 100px;
    max-width: 1200px;

    a:not([class]) {
      border-width: 3px;
    }
  }
}
</style>
