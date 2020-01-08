<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<style lang="scss">
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}

html, body {
  height: 100%;
}
</style>

<script>
/**
 * Make sure we are loading the icon font
 */
import '@mdi/font/css/materialdesignicons.css'

export default {
  
}
</script>