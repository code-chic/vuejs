import { Vue, Component, Prop } from 'vue-property-decorator'
import { MenuConfig } from '@/config/menus'

@Component
export default class NavigationItem extends Vue {
  @Prop({ default: () => ({}) }) data: MenuConfig | undefined

  public render (): JSX.Element {
    const data: MenuConfig = this.$props.data
    if (Array.isArray(data.children) && data.children.length) {
      return (
        <el-submenu index={data.path}>
          <template slot="title">
            { data.icon ? <i class={data.icon}/> : null }
            { data.name }
          </template>
          {
            data.children.map(
              (m: MenuConfig) => <NavigationItem data={m} />
            )
          }
        </el-submenu>
      )
    }
    return (
      <el-menu-item index={data.path}>
        { data.icon ? <i class={data.icon}/> : null }
        { data.name }
      </el-menu-item>
    )
  }
}
