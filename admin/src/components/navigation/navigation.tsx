import { Vue, Component, Prop, Inject } from 'vue-property-decorator'
import { MenuConfig } from '@/config/menus'

const styled = {
  borderRight: 'none'
}

@Component
export default class Navigation extends Vue {
  @Prop({ default: () => [] }) model: MenuConfig[] | undefined

  @Prop({ default: '/' }) expand: string | undefined

  // 获取主题
  @Inject() getThemeValue: any

  public get isLightTheme(): boolean {
    return this.getThemeValue() === 'light'
  }

  public render (): JSX.Element | null {
    const data: MenuConfig[] = this.$props.model
    const normalizedScopedSlot: any = this.$scopedSlots ? this.$scopedSlots.default : null
    if (Array.isArray(data) && data.length) {
      return (
        <el-menu
          style={styled}
          background-color={this.isLightTheme ? '#fff' : '#2c3e50'}
          active-text-color={this.isLightTheme ? '#2c3e50' : '#f40'}
          text-color={this.isLightTheme ? '#333' : '#fff'}
          unique-opened={true}
          default-active={this.expand}
          router={true}>
          {
            data.map((m: MenuConfig) => {
              if (normalizedScopedSlot && typeof normalizedScopedSlot === 'function') {
                return normalizedScopedSlot({ row: m })
              }
              return null
            })
          }
        </el-menu>
      )
    }
    return null
  }
}
