<template>
  <div id="projects" v-if="projects">
    <a v-for="project in projects" :href="project.url" :key="project.title" class="project">
      <p class="type">{{ project.type }}</p>
      <h3 class="title">{{ project.title }}</h3>
      <p class="description">{{ project.description }}</p>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  computed: {
    projects() {
      return this.$store.state.projects;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

$margin: 20px;

#projects {
  display: flex;
  flex-wrap: wrap;
  margin: $margin 0;
  text-align: left;

  @include tablet {
    margin: $margin #{ -$margin };
  }

  .project {
    color: $font-color;
    display: block;
    margin: $margin 0 0;
    padding: 10px 0;
    width: 100%;

    @include tablet {
      margin: $margin $margin 0;
      width: calc(50% - #{ $margin * 2 });
    }

    @include desktop {
      &:nth-of-type(n+3) {
        margin-top: 75px;
      }
    }

    &:hover {
      .title {
        color: $primary-color;
        color: var(--color);
      }
    }

    .type {
      font-size: 12px;
      font-weight: 700;
      opacity: 0.3;
      text-transform: uppercase;

      @include tablet {
        font-size: 13px;
      }

      @include desktop {
        font-size: 14px;
      }
    }

    .title {
      font-size: 24px;
      font-weight: 600;
      margin: 0 0 5px;
      transition: color 0.25s ease;

      @include tablet {
        font-size: 28px;
      }

      @include desktop {
        font-size: 32px;
      }
    }

    .description {
      font-size: 16px;
      font-weight: 600;
      opacity: 0.85;

      @include tablet {
        font-size: 18px;
      }

      @include desktop {
        font-size: 22px;
      }
    }
  }
}
</style>
