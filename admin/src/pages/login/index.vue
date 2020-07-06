<template>
  <div class="login">
    <div class="container">
      <header class="header">
        <h3 class="title">小猪部落管理系统平台</h3>
        <!-- 网站主题模式切换 -->
        <div class="theme-control">
          <span @click="setThemeValue(isLightTheme ? 'dark' : 'light')">
            <i :class="{'el-icon-moon': isLightTheme, 'el-icon-sunny': !isLightTheme }" />
          </span>
        </div>
      </header>
      <el-form class="login-form" label-width="130px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="usernmae" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="password" />
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="isRememberPassword">记住密码</el-checkbox>
          <el-checkbox v-model="isAutoLogin">自动登录</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">登录系统</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Inject } from 'vue-property-decorator'

@Component
export default class Login extends Vue {
  @Inject() getThemeValue: any
  @Inject() setThemeValue: any

  usernmae?: string = ''

  password?: string = ''

  // 是否记住密码
  isRememberPassword?: boolean = false

  // 是否自动登录
  isAutoLogin?: boolean = false

  // 是否高亮主题
  public get isLightTheme(): boolean {
    return this.getThemeValue() === 'light'
  }
}
</script>
