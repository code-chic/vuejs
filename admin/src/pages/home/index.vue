<template>
  <div class="home--wrap">
    <el-row :gutter="20">
      <el-col :lg="6" :md="6" :sm="12">
        <x-curve-chart
          :value="447"
          :data="[0, 20, 75, 30, 22, 6, 11]"
          title="用户总数"
          unit-text="万人"
          color="#3d45c0" />
      </el-col>
      <el-col :lg="6" :md="6" :sm="12">
        <x-curve-chart
          :value="4703"
          :data="[100, 20, 75, 30, 22, 6, 11]"
          title="当前访问人数"
          unit-text="人"
          color="#45c720" />
      </el-col>
      <el-col :lg="6" :md="6" :sm="12">
        <x-curve-chart
          :value="56.7"
          :data="[20, 10, 0, 15, 52, 70, 100]"
          title="内存已使用"
          unit-text="MB"
          color="#d0282f" />
      </el-col>
      <el-col :lg="6" :md="6" :sm="12">
        <x-curve-chart
          :value="13"
          :data="[5, 7, 5, 0, 12, 10, 30]"
          title="服务器告警日志数量"
          unit-text="个"
          color="#ce882d" />
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :lg="12" :md="12" :sm="24" style="margin-bottom: 20px">
        <el-card>
          <h3 slot="header">设备信息采集</h3>
          <el-row :gutter="20" style="min-height: 370px">
            <el-col :lg="12" :md="12" :sm="24">
              <x-equipment-chart title="PC端" :data="pcData" />
            </el-col>
            <el-col :lg="12" :md="12" :sm="24">
              <x-equipment-chart title="移动端" :data="mobileData" />
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :lg="12" :md="12" :sm="24" style="margin-bottom: 20px">
        <el-card>
          <h3 slot="header">用户列表</h3>
          <el-row :gutter="20" style="min-height: 370px">
            <el-col :span="24">
              <el-table :data="userTableData" :border="true">
                <el-table-column label="序号" prop="id" />
                <el-table-column label="用户名" prop="username" />
                <el-table-column label="昵称" prop="nickName" />
                <el-table-column label="角色">
                  <template slot-scope="data">
                    <el-tag>{{ data.row.role }}</el-tag>
                  </template>
                </el-table-column>
                <el-table-column label="最近一次登录IP" prop="lastIpAddress" />
              </el-table>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-card>
          <h3 slot="header">服务器运行实时监控</h3>
          <x-chart class="monitor" :option="monitorOption" />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { EChartOption } from 'echarts'
import Chart from '@/components/chart/index.vue'
import CurveChart from '@/pages/home/components/curve-chart/index.vue'
import EquipmentChart from '@/pages/home/components/equipment-chart/index.vue'

@Component({
  components: {
    'x-curve-chart': CurveChart,
    'x-equipment-chart': EquipmentChart,
    'x-chart': Chart
  }
})
export default class Home extends Vue {
  // Pc 端数据
  pcData = [
    { name: 'Google Chrome', value: 35 },
    { name: 'Firefox', value: 15 },
    { name: 'Opean', value: 5 },
    { name: 'IE', value: 1 },
    { name: '搜狗浏览器', value: 7 },
    { name: '360安全浏览器', value: 20 }
  ]

  // Mobile 端数据
  mobileData = [
    { name: 'IOS', value: 400 },
    { name: 'Android', value: 300 },
    { name: '塞班', value: 15 },
    { name: 'WP', value: 10 },
    { name: '火狐', value: 5 },
    { name: '其它', value: 30 }
  ]

  // 用户数据
  userTableData = [
    { id: '01', username: 'zXj1083', nickName: '张三', role: 'web前端', lastIpAddress: '127.0.0.1' },
    { id: '01', username: 'zXj1083', nickName: '李四', role: 'web前端', lastIpAddress: '127.0.0.1' },
    { id: '01', username: 'zXj1083', nickName: '王五', role: 'web前端', lastIpAddress: '127.0.0.1' },
    { id: '01', username: 'zXj1083', nickName: '小明', role: 'web前端', lastIpAddress: '127.0.0.1' },
    { id: '01', username: 'zXj1083', nickName: '小芳', role: 'web前端', lastIpAddress: '127.0.0.1' }
  ]

  // 实时监控数据
  monitorOption: EChartOption = {
    grid: {
      top: 40,
      right: 20,
      bottom: 20,
      left: 40
    },
    legend: {
      data: ['CPU占用率', '内存占用率']
    },
    xAxis: {
      type: 'time',
      data: ['00:00:00', '00:01:00']
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 100
    },
    series: [{
      type: 'line',
      name: 'CPU占用率',
      symbol: 'none',
      data: [0],
      lineStyle: {
        color: '#45c720'
      },
      areaStyle: {
        color: '#45c720',
        opacity: 0.2
      },
      smooth: true
    }, {
      type: 'line',
      name: '内存占用率',
      symbol: 'none',
      data: [0],
      lineStyle: {
        color: '#45c720'
      },
      areaStyle: {
        color: '#45c720',
        opacity: 0.2
      },
      smooth: true
    }]
  }
}
</script>

<style lang="less">
  .monitor {
    height: 430px;
  }
</style>
