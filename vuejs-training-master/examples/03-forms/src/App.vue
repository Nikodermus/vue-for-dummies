<template>
  <div id="app">
    <ExampleComponent/>
  </div>
</template>

<script>
// Use @ to reference the src folder
import ExampleComponent from '@/components/ExampleComponent';

export default {
  name: 'app',
  components: {
    ExampleComponent
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
