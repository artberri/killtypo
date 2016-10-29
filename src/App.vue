<template>
  <div id="app">
    <header class="header">
      <div class="container">
        <h1><router-link :to="{ name: 'home' }">KillTypo</router-link></h1>
      </div>
    </header>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style src="./styles/global.css"></style>
