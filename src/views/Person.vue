<template>
  <div class="person">
    <h1>Ledtråd {{ number }}</h1>
    <router-link to="/" class="back">Tillbaka till ledtrådarna!</router-link>
    {{ clue }}
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