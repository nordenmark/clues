<template>
  <div class="answer">
    <h1>Svara</h1>

    <router-link to="/" class="back">Tillbaka till ledtrådarna!</router-link>

    <form @submit.prevent="submit()">
      <p>
        <label>Namn 1</label>
        <input required v-model="names[0]" placeholder="Namn från ledtråd 1" />
      </p>
      <p>
        <label>Namn 2</label>
        <input required v-model="names[1]" placeholder="Namn från ledtråd 2" />
      </p>
      <p>
        <label>Namn 3</label>
        <input required v-model="names[2]" placeholder="Namn från ledtråd 3" />
      </p>
      <p>
        <label>Namn 4</label>
        <input required v-model="names[3]" placeholder="Namn från ledtråd 4" />
      </p>
      <p>
        <button type="submit">Gissa</button>
      </p>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Answer extends Vue {
  names: string[] = [];

  submit(): void {
    console.log(this.names);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.answer {
  .back {
    margin-bottom: 20px;
    display: block;
  }

  p {
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
      margin-top: 20px;
    }
  }
  label {
    font-weight: bold;
    display: block;
  }
  input {
    border: 1px solid #ccc;
    padding: 6px;
    width: 100%;
  }
  button {
    background-color: #42b983;
    color: white;
    border: none;
    font-size: 20px;
    padding: 8px 20px;
  }
}
</style>
