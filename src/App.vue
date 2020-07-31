<!--
Date: 2020-07-30 11:25:44
LastEditors: Future Meng
LastEditTime: 2020-07-31 17:07:12
-->
<!--
Date: 2020-07-30 11:25:44
LastEditors: Future Meng
LastEditTime: 2020-07-31 15:22:36
-->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <button @click="printPaper">Print Paper!</button>
    <router-view />
  </div>
</template>
<script>
const { ipcRenderer } = window.require("electron");
export default {
  name: "app",
  methods: {
    printPaper() {
      console.log("printPaper! start");
      ipcRenderer.send("print", "your usbs go here");
      console.log("printPaper! end");
    }
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
