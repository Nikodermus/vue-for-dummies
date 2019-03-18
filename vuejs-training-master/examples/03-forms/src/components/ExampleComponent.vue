<template>
  <!-- A template always has to have exactly 1 root element -->
  <div>
    Price: <input v-model="price" type="number" id="price-input" name="price-input">
    <br/>

    <button @click="hello" type="button">
        Hello world
    </button>

  </div>
</template>

<script>
export default {
  name: 'ExampleComponent',

  data: function() {
    return {
      price: "17"
    };
  },

  methods: {
      hello: function(event) {
        // event is the browser event
        console.log(event);
        // this is set to the instance of the component.
        console.log(this);
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
