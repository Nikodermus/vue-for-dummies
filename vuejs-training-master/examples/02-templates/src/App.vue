<template>
  <div id="app">
    <p>
      Item name: {{item}}
    </p>
    <p>
      Price: {{price}}
    </p>

    <p v-if="price > 15">
      Ball costs more than 15
    </p>
    <p v-else-if="price > 10">
      Ball costs between 10 and  15
    </p>
    <p v-else>
      Ball costs less than 10
    </p>

    <div v-show="showColors">
      <p>
        Available colors:
      </p>
      <p v-for="color in colors" :key="color.id">
        <span :title="'A ' + color.name + ' ball'">
          {{color.name}}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function() {
    return {
      item: 'Ball',
      price: 17,
      colors: [
        {
          name: 'red',
          id: 65
        },
        {
          name: 'blue',
          id: 99
        },
        {
          name: 'yellow',
          id: 26
        }
      ],
      showColors: true
    };
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
