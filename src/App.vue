<script setup>
// No need to import individual components here because we'll use <router-view> to load routes dynamically
</script>

<template>
  <div id="app">
    <!-- This renders the component based on the current route -->
    <router-view />
  </div>
</template>

<style scoped>
/* You can add global styles or keep the scoped styles */
#app {
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
