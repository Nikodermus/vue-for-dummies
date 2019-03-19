<template>
  <div class="box">
    <p>
      This is the Home page
    </p>
    <p>
      User: {{ $route.params.id }}
    </p>
  </div>
</template>

<style>
.box {
  border: 3px solid black;
}
</style>
