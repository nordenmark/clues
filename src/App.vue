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
  font-size: 16px;
}

input {
  font-size: 16px;
}

h1 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin-bottom: 0.7em;
}

a {
  color: #42b983;
  font-weight: bold;
  &:hover {
    color: darken(#42b983, 20%);
  }
}

p {
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
}

ol {
  margin: 0;
  padding-left: 30px;
  text-align: left;
  li {
    margin-bottom: 8px;
    padding-left: 12px;
  }
}
</style>
