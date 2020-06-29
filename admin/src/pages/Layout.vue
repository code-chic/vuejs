<template>
  <el-container class="wrap">
    <el-aside class="aside" :style="{ width: collapse ? 0 : '230px' }">
      <x-navigation :model="menus" :expand="$route.path">
        <template slot-scope="data">
          <x-navigation-item :data="data.row" />
        </template>
      </x-navigation>
    </el-aside>
    <el-container>
      <el-header class="header" height="55px">
        <el-button type="text" @click="toggleCollapseMenuHandle()">
          <i
            style="font-size: 24px; color: #333"
            :class="{'el-icon-s-unfold': collapse, 'el-icon-s-fold': !collapse}"
          />
        </el-button>
        <el-button class="user" type="text">
          <img class="avatar" src="../assets/logo.jpg" alt="" :width="25" :height="25">
          <span style="margin-bottom: -10px">管理员</span>
        </el-button>
      </el-header>
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
  // 左侧导航数据
  public menus: MenuConfig[] = menus

  // 是否收起左侧导航
  public collapse = false

  public toggleCollapseMenuHandle () {
    this.collapse = !this.collapse
  }
}
</script>

<style lang="less" scoped>
  .wrap {
    height: 100%;
    background-color: #f1f1f1;
  }

  .aside {
    background-color: #2c3e50;
    transition: width 500ms;
  }

  .header, .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
  }

  .header {
    .user {
      color: #2c3e50;
      .avatar {
        vertical-align: middle;
        margin: -5px 5px 0;
        background-color: #f1f1f1;
        border-radius: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
