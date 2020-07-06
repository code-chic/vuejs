<template>
  <context :default-mode="mode">
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
export default class App extends Vue {
  mode?: 'dark' | 'light'
  public created(): void {
    // 根据当前系统时间决定使用哪种主题模式
    this.mode = new Date().getHours() > 17 ? 'dark' : 'light'
  }
}
</script>
