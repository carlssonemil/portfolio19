<template>
  <div class="home">
    <h1>Hi, I'm a front-end developer currently working in e-health with the awesome people at <a href="https://www.evry.com/en/">Evry</a>.</h1>
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
  font-size: 24px;
  font-weight: 700;
  margin: 25px 0 25px;

  @include tablet {
    font-size: 28px;
    margin: 25px 0 50px;
    max-width: 880px;
  }

  @include desktop {
    font-size: 36px;
    margin: 50px 0 100px;
    max-width: 880px;

    a:not([class]) {
      border-width: 3px;
    }
  }
}
</style>
