<template>
  <div class="answer">
    <h1>Svara</h1>

    <router-link to="/" class="back">Tillbaka till ledtrådarna!</router-link>

    <form @submit.prevent="submit()">
      <p :class="{ invalid: isInvalid(0), valid: isValid(0) }">
        <label>Namn 1</label>
        <input required v-model="names[0]" placeholder="Förnamn 1" />
      </p>
      <p :class="{ invalid: isInvalid(1), valid: isValid(1) }">
        <label>Namn 2</label>
        <input required v-model="names[1]" placeholder="Förnamn 2" />
      </p>
      <p :class="{ invalid: isInvalid(2), valid: isValid(2) }">
        <label>Namn 3</label>
        <input required v-model="names[2]" placeholder="Förnamn 3" />
      </p>
      <p :class="{ invalid: isInvalid(3), valid: isValid(3) }">
        <label>Namn 4</label>
        <input required v-model="names[3]" placeholder="Förnamn 4" />
      </p>
      <p class="button-container">
        <button type="submit">Gissa</button>
      </p>
    </form>

    <div class="results" v-if="isLoading">Laddar...</div>

    <div class="results" v-if="destination">
      Bravo, alla rätt,
      <a :href="destination">gå till slutmålet!</a>
    </div>

    <div class="results" v-if="!destination && results.length === 4">Ajdå, inte riktigt rätt.</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ApiService } from '@/api.service';

@Component
export default class Answer extends Vue {
  names: string[] = [];
  destination: string = '';
  results: boolean[] = [];
  isLoading: boolean = false;

  async submit() {
    this.isLoading = true;
    this.destination = '';
    this.results = [];

    try {
      const { destination, results } = await ApiService.guess(this.names);
      this.destination = destination;
      this.results = results;
    } catch (e) {
      console.error(e);
    } finally {
      this.isLoading = false;
    }
  }

  isInvalid(index: number) {
    return this.results.length === 4 && this.results[index] === false;
  }

  isValid(index: number) {
    return this.results.length === 4 && this.results[index] === true;
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
    text-align: left;
    margin-bottom: 10px;
    position: relative;
    &:last-child {
      margin-bottom: 0;
      margin-top: 20px;
    }

    &.valid {
      label {
        color: #42b983;
      }
      input {
        border: 1px solid #42b983;
      }
    }

    &.invalid {
      label {
        color: red;
      }
      input {
        border: 1px solid red;
      }
    }
  }
  label {
    font-weight: bold;
    display: flex;
    justify-content: space-between;
  }
  input {
    border: 1px solid #ccc;
    padding: 6px;
    width: 100%;
  }
  .button-container {
    text-align: center;
  }
  button {
    background-color: #42b983;
    color: white;
    border: none;
    font-size: 20px;
    padding: 8px 20px;
  }
  .results {
    margin-top: 20px;
  }
}
</style>
