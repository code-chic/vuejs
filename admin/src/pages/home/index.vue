<template>
  <div class="home--wrap">
    <el-row :gutter="20" class="statistical">
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
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import CurveChart from '@/pages/home/components/curve-chart/index'

@Component({
  components: {
    'x-curve-chart': CurveChart
  }
})
export default class Home extends Vue {}
</script>
