<template>
  <div class="home">
    <!-- 统计信息开始 -->
    <el-row :gutter="10">
      <el-col :md="6" :sm="12" :xs="24">
        <x-curve-chart
          :value="447"
          :data="[0, 20, 75, 30, 22, 6, 11]"
          class="mb10"
          title="用户总数"
          unit-text="万人"
          color="#3d45c0" />
      </el-col>
      <el-col :md="6" :sm="12" :xs="24">
        <x-curve-chart
          :value="4703"
          :data="[100, 20, 75, 30, 22, 6, 11]"
          class="mb10"
          title="前访问人数"
          unit-text="人"
          color="#45c720" />
      </el-col>
      <el-col :md="6" :sm="12" :xs="24">
        <x-curve-chart
          :value="56.7"
          :data="[20, 10, 0, 15, 52, 70, 100]"
          class="mb10"
          title="内存已使用"
          unit-text="MB"
          color="#d0282f" />
      </el-col>
      <el-col :md="6" :sm="12" :xs="24">
        <x-curve-chart
          :value="13"
          :data="[5, 7, 5, 0, 12, 10, 30]"
          class="mb10"
          title="服务器告警日志数量"
          unit-text="个"
          color="#ce882d" />
      </el-col>
    </el-row>
    <!--  统计信息结束  -->
    <!--  客户端设备信息 & 服务器性能统计开始 -->
    <el-row :gutter="10">
      <el-col :md="12" :sm="24" :xs="24">
        <el-card class="equipment-statistics mb10" shadow="never">
          <h3 slot="header">客户端设备统计</h3>
          <el-row :gutter="10">
            <el-col :md="12" :sm="12" :xs="24">
              <x-equipment-chart height="300px" />
            </el-col>
            <el-col :md="12" :sm="12" :xs="24">
              <x-equipment-chart height="300px" />
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :md="12" :sm="24" :xs="24">
        <el-card class="performance-statistics mb10" shadow="never">
          <h3 slot="header">服务端性能统计</h3>
          <x-chart ref="barChartRef" height="300px" :option="barOption" />
        </el-card>
      </el-col>
    </el-row>
    <!--  客户端设备信息 & 服务器性能统计结束  -->
    <!-- 网站访问实时统计开始 -->
    <el-row>
      <el-col :span="24">
        <el-card shadow="never">
          <h3 slot="header">网站访问实时统计</h3>
          <x-chart ref="monitorChart" :option="lineOption" height="380px" />
        </el-card>
      </el-col>
    </el-row>
    <!-- 网站访问实时统计结束 -->
  </div>
</template>

<script lang="ts">
import { Vue, Component, Inject } from 'vue-property-decorator'
import { ECharts, EChartOption, TypedArray } from 'echarts'
import CurveChart from './components/curve-chart/index.vue'
import EquipmentChart from './components/equipment-chart/index.vue'
import Chart from '@/components/chart/chart'
import { barOption, lineOption } from './option'
import { generateHourData, random } from '@/util'

@Component({
  components: {
    'x-curve-chart': CurveChart,
    'x-equipment-chart': EquipmentChart,
    'x-chart': Chart
  }
})
export default class Home extends Vue {
  @Inject() getThemeValue: any

  get barOption(): EChartOption {
    const xAxis = (barOption.xAxis as any)
    const yAxis = (barOption.yAxis as any)
    yAxis.axisLabel = xAxis.axisLabel = {
      color: this.getThemeValue() === 'dark' ? '#fff' : '#2c3e50'
    }
    return barOption
  }

  lineOption = lineOption

  public mounted(): void {
    const monitorChart: ECharts = ((this.$refs.monitorChart as any).instance as ECharts)
    const onlines: any[] | TypedArray = [] // 在线用户数
    const averages: any[] | TypedArray = [] // 平均数
    if (this.lineOption && Array.isArray(this.lineOption.series)) {
      this.lineOption.series[0].data = onlines
      this.lineOption.series[1].data = averages
    }

    const data = generateHourData()
    let dataIndex = 0 // 数据索引
    const timer = setInterval(() => {
      const online: any[] | TypedArray = [data[dataIndex], random()]
      const average: any[] | TypedArray = [data[dataIndex], random()]
      onlines.push(online)
      averages.push(average)
      if (onlines.length >= 20) {
        onlines.splice(0, 1)
        averages.splice(0, 1)
      }
      monitorChart.setOption(this.lineOption, { lazyUpdate: true })
      if (dataIndex >= data.length) {
        clearInterval(timer) // 一个小时的数据循环完成！
        return
      }
      dataIndex++
    }, 1000)
  }

  // 更新 echarts 主题
  public updated(): void {
    const instance: ECharts = (this.$refs.barChartRef as any).instance
    instance.setOption(this.barOption)
  }
}
</script>
