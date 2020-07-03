<template>
  <div class="page-home">
    <!-- 统计信息开始 -->
    <el-row :gutter="10">
      <el-col :md="6" :sm="12" :xs="24">
        <x-curve-chart
          :value="447"
          :data="[0, 20, 75, 30, 22, 6, 11]"
          class="curve-chart-box"
          title="用户总数"
          unit-text="万人"
          color="#3d45c0" />
      </el-col>
      <el-col :md="6" :sm="12" :xs="24">
        <x-curve-chart
          :value="4703"
          :data="[100, 20, 75, 30, 22, 6, 11]"
          class="curve-chart-box"
          title="前访问人数"
          unit-text="人"
          color="#45c720" />
      </el-col>
      <el-col :md="6" :sm="12" :xs="24">
        <x-curve-chart
          :value="56.7"
          :data="[20, 10, 0, 15, 52, 70, 100]"
          class="curve-chart-box"
          title="内存已使用"
          unit-text="MB"
          color="#d0282f" />
      </el-col>
      <el-col :md="6" :sm="12" :xs="24">
        <x-curve-chart
          :value="13"
          :data="[5, 7, 5, 0, 12, 10, 30]"
          class="curve-chart-box"
          title="服务器告警日志数量"
          unit-text="个"
          color="#ce882d" />
      </el-col>
    </el-row>
    <!--  统计信息结束  -->
    <!--  客户端设备信息 & 服务器性能统计  -->
    <el-row>HelloWorld!!!</el-row>
    <!--  客户端设备信息 & 服务器性能统计  -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import CurveChart from './components/curve-chart/index.vue'

@Component({
  components: {
    'x-curve-chart': CurveChart
  }
})
export default class Home extends Vue {}
</script>
