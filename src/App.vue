<template>
  <div id="nav">
    <router-link to="/">gallery</router-link> |
    <router-link to="/about">about</router-link> 
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #1a4639;

    &.router-link-exact-active {
      color: #18a174;
    }
  }
}
</style>
