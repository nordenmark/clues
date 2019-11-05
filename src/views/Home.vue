<template>
  <div class="home">
    <h1>Hitta personerna</h1>

    <p>Det här är en liten klurighet där målet är att hitta förnamnen på fyra personer.</p>

    <p>Varje utmaning leder till ett förnamn. När du hittat de fyra förnamnen kan du gå vidare och gissa. Gissar du rätt så får du reda på vad det här handlar om.</p>

    <p>Tryck på en utmaning för att börja.</p>

    <div class="clues">
      <div v-for="index in clues" :key="index" class="clue">
        <router-link
          :to="{ name: 'person', params: { id: index }}"
        >Utmaning {{ parseInt(index, 10) + 1 }}</router-link>
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
    &:hover {
      background-color: darken(#42b983, 20%);
    }
    a {
      text-decoration: none;
      color: white;
      padding: 10px;
      display: block;
    }
  }
}
</style>
