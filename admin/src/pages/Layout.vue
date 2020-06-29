<template>
  <el-container class="wrap">
    <el-aside class="aside" width="230px">
      <x-navigation :model="menus" :expand="$route.path">
        <template slot-scope="data">
          <x-navigation-item :data="data.row" />
        </template>
      </x-navigation>
    </el-aside>
    <el-container>
      <el-header class="header" height="55px">这里是头部</el-header>
      <el-main>
        <h3>
          这里是Layout组件 <br />
          是否开启缓存：{{!!$route.meta.keepAlive}}<br />
          当前访问路径：{{$route.path}}
        </h3>
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
import { Vue, Component } from 'vue-property-decorator'
import menus, { MenuConfig } from '@/config/menus'
import Navigation from '@/components/navigation/navigation'
import NavigationItem from '@/components/navigation/navigationItem'

@Component({
  components: {
    'x-navigation': Navigation,
    'x-navigation-item': NavigationItem
  }
})
export default class Layout extends Vue {
  public menus: MenuConfig[] = menus
}
</script>

<style lang="less" scoped>
  .wrap {
    height: 100%;
    background-color: #f1f1f1;
  }

  .aside {
    background-color: #2c3e50;
  }

  .header, .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
  }
</style>
