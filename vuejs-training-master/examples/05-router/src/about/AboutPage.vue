<template>
  <div class="about">
    <h1>This is an about page</h1>

    <button @click="gohome">
        Press me to go to the home page
    </button>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  methods: {
    gohome: function() {
      // This will navigate to the route on "/" (the home page)
      // this.$router.push('/');

      // This works too-- use the route name instead of the URL
      this.$router.push({ name: 'home' });
    }
  }
}
</script>
