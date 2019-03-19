<template>
  <div id="app">
    <p>
      Width: <input v-model="width" type="text">
    </p>
    <p>
      Height: <input v-model="height" type="text">
    </p>

    <button @click="getKitten" type="button">
        Get a new kitten
    </button>

    <br/>

    <img :src="placeKitten"/>

  </div>
</template>

<script>
export default {
  name: 'app',
  data: function() {
    return {
      width: 200,
      height: 300,
      placeKitten: ""
    }
  },

  methods: {
    getKitten: function() {
      this.placeKitten = 'https://placekitten.com/' + this.width + '/' + this.height;
    }
  },

  created: function() {
    // this.placeKitten = 'https://placekitten.com/' + this.width + '/' + this.height;
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
