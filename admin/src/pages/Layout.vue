<template>
  <el-container class="layout--wrap">
    <el-aside class="aside" :style="{ width: collapse ? 0 : '230px' }">
      <x-navigation :model="menus" :expand="$route.path">
        <template slot-scope="data">
          <x-navigation-item :data="data.row" />
        </template>
      </x-navigation>
    </el-aside>
    <el-container>
      <el-header class="header" height="55px">
        <el-button class="collapse" type="text" @click="toggleCollapseMenuHandle()">
          <i :class="{'el-icon-s-unfold': collapse, 'el-icon-s-fold': !collapse}" />
        </el-button>
        <el-button class="user" type="text">
          <img class="avatar" src="../assets/logo.jpg" alt="" :width="25" :height="25">
          <span style="margin-bottom: -10px">管理员</span>
        </el-button>
      </el-header>
      <el-main>
<!--        <h3>-->
<!--          这里是Layout组件 <br />-->
<!--          是否开启缓存：{{!!$route.meta.keepAlive}}<br />-->
<!--          当前访问路径：{{$route.path}}-->
<!--        </h3>-->
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive" />
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive" />
      </el-main>
      <el-footer class="footer">这里是脚部</el-footer>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Vue, Component, Provide, Watch } from 'vue-property-decorator'
import menus, { MenuConfig } from '@/config/menus'
import Navigation from '@/components/navigation/navigation'
import NavigationItem from '@/components/navigation/navigationItem'

const cbs: Function[] = []

@Component({
  components: {
    'x-navigation': Navigation,
    'x-navigation-item': NavigationItem
  }
})
export default class Layout extends Vue {
  // 左侧导航数据
  public menus: MenuConfig[] = menus

  // 是否收起左侧导航
  public collapse = false

  // 向所有子组件提供一个注册 `resize` 回调函数的方法
  // 当页面的侧边导航栏 打开/关闭 时通知所有的 echarts 重新计算大小
  @Provide('registerResizeCallback')
  public registerResizeCallback (cb: Function) {
    cbs.push(cb)
  }

  @Watch('collapse')
  getCollapse (newVal: boolean, oldVal: boolean) {
    if (oldVal !== newVal) {
      cbs.forEach((fn: Function) => fn())
    }
  }

  public toggleCollapseMenuHandle () {
    this.collapse = !this.collapse
  }
}
</script>
