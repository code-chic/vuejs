<template>
  <div>
    <h3>这里是Layout组件</h3>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Layout extends Vue {}
</script>
