import { Vue, Component, Prop, Provide, Watch } from 'vue-property-decorator'

@Component
export default class Context extends Vue {
  @Prop({ type: String, default: 'light' }) defaultMode?: string

  @Watch('theme')
  public themeValueChange(newVal: any, oldValue: any): void {
    if (newVal !== oldValue) {
      if (newVal === 'dark') {
        document.documentElement.classList.add('piggy-theme-dark')
      } else {
        document.documentElement.classList.remove('piggy-theme-dark')
      }
    }
  }

  // 网站主题模式 light：高亮模式  drak：暗黑模式
  theme = this.defaultMode

  @Provide('getThemeValue')
  // 提供给子组件获取当前主题模式的方法
  public getThemeValue(): string {
    return this.theme || 'light'
  }

  @Provide('setThemeValue')
  // 提供给子组件设置当前主题模式的方法，并通过使用事件发射器，将值传递给父组件
  public setThemeValue(mode: 'dark' | 'light'): void {
    this.theme = mode
  }

  public created () {
    if (this.theme === 'dark') {
      document.documentElement.classList.add('piggy-theme-dark')
    }
  }

  public render(): any {
    return this.$slots.default
  }
}
