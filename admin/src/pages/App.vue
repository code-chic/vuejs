<template>
  <context default-mode="light">
    <!-- 应用全局路由组件 -->
    <router-view />
  </context>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Context from '@/components/context/context'

@Component({
  components: {
    context: Context
  }
})
export default class App extends Vue {}
</script>
