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
      <el-form
        :model="loginForm"
        :rules="rules"
        class="login-form"
        ref="loginFormRef"
        label-width="130px">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="loginForm.username" />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="loginForm.password" />
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="isRememberPassword">记住密码</el-checkbox>
            <el-checkbox v-model="isAutoLogin">自动登录</el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submit">登录系统</el-button>
          </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Inject } from 'vue-property-decorator'
import { loginApi } from '@/api/login'

@Component
export default class Login extends Vue {
  @Inject() getThemeValue: any
  @Inject() setThemeValue: any

  loginForm = {
    username: '',
    password: ''
  }

  // 是否记住密码
  isRememberPassword?: boolean = false

  // 是否自动登录
  isAutoLogin?: boolean = false

  // 登录表单校验规则
  rules = Object.freeze({
    username: [
      { required: true, message: '用户名不能为空！', trigger: 'blur' }
    ],
    password: [
      { required: true, message: '密码不能为空！', trigger: 'blur' }
    ]
  })

  // 提交登录表单
  public submit(): void {
    const loginFormRef = (this.$refs.loginFormRef as any)
    loginFormRef.validate(async (vaild: boolean) => {
      if (vaild) {
        const result:any = await loginApi(this.loginForm)
        if (result.status === 200 && result.data) {
          sessionStorage.setItem('user', this.loginForm.username)
          this.$router.replace('/') // 跳转到首页
        } else {
          this.$alert(result.errMsg)
        }
      }
    })
  }

  // 是否高亮主题
  public get isLightTheme(): boolean {
    return this.getThemeValue() === 'light'
  }
}
</script>
