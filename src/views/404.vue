<template>
  <transition name="fade">
    <div id="404" class="page" v-show="show">
      <div class="error">
        <h1>Uh-oh... 🤔</h1>
        <p>Looks like you took a wrong turn<br/>and ended up on a missing page. </p>
        <router-link to="/"><font-awesome-icon :icon="['fas', 'angle-left']" />Go back to home</router-link>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'notfound',
  data() {
    return {
      show: false
    }
  },
  mounted() {
    this.show = true;
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.error {
  padding-top: 5vh;
  text-align: center;

  h1 {
    font-size: 50px;
    font-weight: 600;
  }

  p {
    font-size: 28px;
    margin: 25px 0 50px;
  }

  a {
    color: $primary-color;
    color: var(--color);
    font-size: 22px;

    &:hover {
      text-decoration: none;
      
      svg {
        left: -5px;
      }
    }

    svg {
      left: 0;
      margin-right: 10px;
      position: relative;
      top: 1px;
      transition: left 0.25s ease;
    }
  }
}
</style>
