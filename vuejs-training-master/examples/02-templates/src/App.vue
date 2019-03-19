<template>
  <div id="app">
    <h1>{{name}}</h1>
    <ul>
      <li
        v-for="member in familyMembers"
        :key="member.name"
      >{{`${emojiType[member.type]} ${member.name}`}}</li>
    </ul>
    <h2>
      {{
      favoriteColor === 'blue' ? 'Blue? Really? Mine too!': "Darn, mine's blue..."
      }}
    </h2>
  </div>
</template>

<script>
export default {
  name: "app",
  data: function() {
    return {
      name: "Nico",
      favoriteColor: "red",
      familyMembers: [
        { name: "Laura", type: "human" },
        { name: "Brandy", type: "dog" },
        { name: "Chewy", type: "dog" },
        { name: "Alfred", type: "robot" }
      ],
      emojiType: {
        dog: "🐶",
        robot: "🤖",
        human: "👨‍"
      }
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
