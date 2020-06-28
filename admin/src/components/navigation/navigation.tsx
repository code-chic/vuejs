import { Component, Vue, Prop } from 'vue-property-decorator'
import menus from '@/config/menus'

@Component
class NavigationItem extends Vue {
  @Prop({ default: {} }) data: any

  render (): JSX.Element {
    const { data } = this.$props
    if (data.children && data.children.length) {
      return (
        <el-submenu index={data.id}>
          <template slot="title"><i class={data.icon} />{ data.name }</template>
          {
            data.children.map(
              (c: any) => <NavigationItem data={c} />
            )
          }
        </el-submenu>
      )
    }
    return (
      <el-menu-item index={data.id}>
        <i class={data.icon} />{ data.name }
      </el-menu-item>
    )
  }
}

@Component
export default class Navigation extends Vue {
  render (): JSX.Element {
    return (
      <el-menu style="border-right: none" text-color="#fff" background-color="#2c3e50">
        {
          menus.map(
            menu => <NavigationItem data={menu} />
          )
        }
      </el-menu>
    )
  }
}
