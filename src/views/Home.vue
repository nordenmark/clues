<template>
  <div class="home">
    <h1>Hitta personerna</h1>

    <p>Nedan finner du fyra ledtrådar. Varje ledtråd leder till förnamnet på en person. När du hittat de fyra förnamnen kan du gå vidare.</p>

    <p>Tryck på en ledtråd för att börja.</p>

    <div class="clues">
      <div v-for="index in clues" :key="index" class="clue">
        <router-link
          :to="{ name: 'person', params: { id: index }}"
        >Ledtråd {{ parseInt(index, 10) + 1 }}</router-link>
      </div>
    </div>

    <router-link to="/answer">Jag vet svaren, låt mig gissa!</router-link>
  </div>
</template>

<script>
import { clues } from '@/clues';

export default {
  name: 'home',
  data: () => {
    return {
      clues: Object.keys(clues),
    };
  },
};
</script>

<style scoped lang="scss">
.clues {
  margin: 30px 0 40px 0;
  .clue {
    margin-bottom: 10px;
    background-color: #42b983;
    a {
      color: white;
      padding: 10px;
      display: block;
    }
  }
}
</style>
