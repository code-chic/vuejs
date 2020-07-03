<template>
  <!-- 应用全局路由组件 -->
  <router-view id="container" />
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class App extends Vue {}
</script>
