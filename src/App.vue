<template>
  <div id="app">
    <div id="logo">
      <router-link :to="{ name: 'home' }"><img src="./assets/logo.png" height="150" width="150"></router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  font-family: 'PT Sans', sans-serif;
}

p,
ul,
li,
div,
input,
textarea {
  font-family: 'PT Sans', sans-serif;
}

#app {
  font-family: 'PT Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#logo {
  margin: 40px auto 40px;
  text-align: center;
}
.logo {
  width: 40px;
  height: 45px;
  margin: 2px auto;
  border-width: 1px 2px 3px;
  border-style: solid;
  border-radius: 5px;
  background: #d3cfcc;
  border-color: #efefef #efefef #efefef;
  display: inline-block;
}

.logokey {
  width: 33px;
  height: 40px;
  padding: 5px 0 0 7px;
  font-size: 18px;
  line-height: 1;
  background: #fdfdfd;
  border-radius: 4px;
  position: relative;
}
</style>
