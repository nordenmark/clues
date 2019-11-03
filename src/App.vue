<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 500px;
  width: 90%;
  margin: 0 auto;
  padding-top: 30px;
}

h1 {
  margin-bottom: 0.7em;
}

a {
  color: #42b983;
  font-weight: bold;
}
p {
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
}
</style>
