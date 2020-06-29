import { Vue, Component, Prop } from 'vue-property-decorator'
import { MenuConfig } from '@/config/menus'

const styled = {
  borderRight: 'none'
}

@Component
export default class Navigation extends Vue {
  @Prop({ default: () => [] }) model: MenuConfig[] | undefined

  @Prop({ default: '/' }) expand: string | undefined

  public render (): JSX.Element | null {
    const data: MenuConfig[] = this.$props.model
    const normalizedScopedSlot: any = this.$scopedSlots ? this.$scopedSlots.default : null
    if (Array.isArray(data) && data.length) {
      return (
        <el-menu
          style={styled}
          background-color="#2c3e50"
          active-text-color="#f40"
          unique-opened={true}
          default-active={this.expand}
          router={true}
          text-color="#fff">
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
