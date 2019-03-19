<template>
  <div id="app">
    <p>
      Go to <router-link to="/user/foo">/user/foo</router-link>
    </p>
    <p>
      Go to <router-link to="/user/bar">/user/bar</router-link>
    </p>
    <p>
      Go to <router-link to="/user/about">/user/about (Note what happens because of the order of the routes in router.js)</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
