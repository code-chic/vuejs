<template>
  <div id="container">
    <router-view />
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class App extends Vue {}
</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #container {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
</style>
