<template>
  <el-container class="layout--wrap">
    <el-aside class="layout--aside" :width="getAsideWidth">
      <x-navigation :model="menus" :expand="$route.path">
        <template slot-scope="data">
          <x-navigation-item :data="data.row" />
        </template>
      </x-navigation>
    </el-aside>
    <el-container class="layout--container">
      <el-header height="50px">
        <span class="is-collapse" @click="toggleNavigationStatusHandle()">
          <i :class="{'el-icon-s-fold': !collapse, 'el-icon-s-unfold': collapse}"></i>
        </span>
        <div class="user">
          <el-avatar
            class="avatar"
            :size="25"
            :src="userInfo.avatarPicUrl">
            <img
              :alt="userInfo.name"
              src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
          </el-avatar>
          <span class="username">{{ userInfo.name }}</span>
        </div>
      </el-header>
      <el-main>
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive" />
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive" />
      </el-main>
      <el-footer>
        <p>&copy;2020 Piggy Tribe.</p>
        <p>北京市《小猪部落》文化有限公司</p>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Navigation from '@/components/navigation/navigation'
import NavigationItem from '@/components/navigation/navigationItem'
import menus from '@/config/menus'

@Component({
  components: {
    'x-navigation': Navigation,
    'x-navigation-item': NavigationItem
  }
})
export default class Layout extends Vue {
  private menus = menus

  // 是否收起左侧导航
  private collapse = false

  private userInfo = {
    name: '张大炮',
    avatarPicUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    username: 'admin'
  }

  public notifyChartUpdateSize(): void {
    const resizes = (this.$root as any).resizes
    if (Array.isArray(resizes)) {
      const handles = resizes.slice()
      while (handles.length) {
        handles.pop().resize()
      }
    }
  }

  public mounted (): void {
    const node: HTMLDivElement | null = document.querySelector('.layout--aside')
    if (node) {
      node.addEventListener('transitionend', (e: TransitionEvent) => {
        if ((e.target as HTMLDivElement).contains(node) && e.propertyName === 'width') {
          this.notifyChartUpdateSize()
        }
      })
    }
    window.addEventListener('resize', () => this.notifyChartUpdateSize())
  }

  // 处理导航（展开/收起）状态
  public toggleNavigationStatusHandle (): void {
    this.collapse = !this.collapse
  }

  // 动态获取侧边栏的宽度
  public get getAsideWidth(): string {
    return this.collapse ? '0' : '230px'
  }
}
</script>
