<template>
  <transition name="fade">
    <div id="app" v-show="show">
      <header>
        <router-link to="/" id="logo">
          <img v-if="logotypeSrc" :src="logotypeSrc" alt="Logotype">
        </router-link>
        <nav>
          <a href="mailto:hello@emilcarlsson.se" class="header-link">Contact<font-awesome-icon :icon="['far', 'envelope']" /></a>
        </nav>
      </header>

      <main>
        <router-view/>
      </main>

      <footer>
        <nav>
          <a href="https://github.com/carlssonemil" class="social-media-link">
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
          <a href="https://dribbble.com/emilcarlsson" class="social-media-link">
            <font-awesome-icon :icon="['fab', 'dribbble']" />
          </a>
          <a href="https://codepen.io/emilcarlsson" class="social-media-link">
            <font-awesome-icon :icon="['fab', 'codepen']" />
          </a>
          <a href="https://www.linkedin.com/in/carlssonemil/" class="social-media-link">
            <font-awesome-icon :icon="['fab', 'linkedin-in']" />
          </a>
        </nav>
      </footer>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      logotypeSrc: null
    }
  },
  methods: {
    setColor() {
      const colorsArray = this.$store.state.colors;
      const color = colorsArray[Math.floor(Math.random() * colorsArray.length)];
      
      // Set CSS variable.
      document.documentElement.style.setProperty('--color', color);

      // Change to correct favicon.
      document.getElementById('favicon').href = `/favicons/${ color.replace("#", "") }.ico`;

      // Set logotype source.
      this.logotypeSrc = `/logotypes/${ color.replace("#", "") }.svg`;
    }
  },
  beforeMount() {
    this.setColor();
  },
  mounted() {
    this.show = true;
  }
}
</script>


<style lang="scss">
@import '@/scss/reset.scss';
@import '@/scss/variables.scss';

* {
  box-sizing: border-box;

  &:focus {
    outline: none;
  }
}

body {
  color: $font-color;
  font-family: $font-stack;
  font-size: 16px;
  line-height: 1.4;
}

a {
  text-decoration: none;

  &:not([class]) {
    color: $font-color;
    border-bottom: 2px solid rgba($font-color, 0.25);
    padding: 0 1px 2px;
    transition: border-color 0.25s ease;

    &:hover {
      border-color: $primary-color;
      border-color: var(--color);
    }
  }
}

#app {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: map-get($breakpoints, desktop);
  min-height: 100vh;
  width: 90%;
}

main {
  flex: 1;
}

header, footer {
  align-items: center;
  display: flex;
  height: 100px;

  @include tablet {
    height: 150px;
  }
}

header {
  justify-content: space-between;

  #logo {
    $logo-size: 38px;

    img {
      height: $logo-size;
      width: $logo-size;
    }
  }

  nav {
    .header-link {
      color: $font-color;
      font-size: 18px;
      font-weight: 600;
      transition: color 0.25s ease;

      @include desktop {
        color: rgba($font-color, 0.75);

        &:hover {
          color: $font-color;
        }
      }

      svg {
        margin-left: 10px;
        position: relative;
        top: 1px;
      }
    }
  }
}

footer {
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;

  @include tablet {
    margin-top: 80px;
  }

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    background: white;
    bottom: 0;
    border-top: 1px solid #ddd;
    left: 0;
    position: fixed;
    width: 100vw;
  }

  nav {
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    max-width: 500px;

    .social-media-link {
      color: $font-color;
      font-size: 26px;
      margin: 0 20px;
      padding: 15px;
      transition: color 0.25s ease;

      @include tablet {
        font-size: 30px;
        margin: 0 20px;
      }

      @include desktop {
        color: rgba($font-color, 0.75);
        margin: 0 30px;

        &:hover {
          color: $font-color;
        }
      }
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.fade-up-enter-active, .fade-up-leave-active {
  transition: .5s;
}
.fade-up-enter, .fade-up-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(15%);
}
</style>
