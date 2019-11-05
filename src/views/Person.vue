<template>
  <div class="person">
    <h1>Ledtråd {{ number }}</h1>

    <router-link to="/" class="back">Tillbaka till ledtrådarna!</router-link>

    <p class="intro" v-html="clue.introduction"></p>

    <ol>
      <li v-for="(step, index) in clue.steps" :key="index" v-html="step"></li>
    </ol>
  </div>
</template>

<script>
import { clues } from '@/clues';

export default {
  name: 'person',
  data() {
    return {
      clues: clues,
    };
  },
  computed: {
    index() {
      return parseInt(this.$route.params.id, 10);
    },
    number() {
      return this.index + 1;
    },
    clue() {
      return this.clues[this.index];
    },
  },
};
</script>

<style lang="scss">
.back {
  display: block;
  margin-bottom: 20px;
}

.intro {
  margin-bottom: 20px;
}

.large {
  font-size: 1.2em;
}
</style>