<template>
  <el-card
    shadow="never"
    :style="{ width: width, height: height }"
    :body-style="{ padding: '10px' }">
    <div class="curve-chart">
      <div class="info">
        <strong class="title" v-html="title"></strong>
        <p>
          <em :style="{ color: $props.color }">{{ $props.value }}</em>
          <span class="unit">{{ $props.unitText }}</span>
        </p>
      </div>
      <x-chart :option="lineOption" />
    </div>
  </el-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { EChartOption } from 'echarts'
import Chart from '@/components/chart/chart'

@Component({
  components: {
    'x-chart': Chart
  }
})
export default class CurveChart extends Vue {
  @Prop({ type: Array, default: () => [] }) data?: []

  @Prop({ type: String, default: '#f40' }) color?: string

  @Prop({ type: String, default: '&nbsp;' }) title?: string

  @Prop({ type: Number, default: 0 }) value?: string | number

  @Prop({ type: String, default: '' }) unitText?: string

  @Prop({ type: String, default: '100%' }) width?: string

  @Prop({ type: String, default: '100%' }) height?: string

  // 当前组件具体配置项
  lineOption: EChartOption = {
    grid: {
      top: 50,
      right: -20,
      bottom: 0,
      left: -20
    },
    // tooltip: {
    //   show: true,
    //   trigger: 'axis',
    //   position: 'top',
    //   backgroundColor: 'rgba(255,255,255,.7)',
    //   extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);',
    //   axisPointer: {
    //     type: 'line'
    //   },
    //   textStyle: {
    //     color: '#333'
    //   },
    //   formatter(params: EChartOption.Tooltip.Format | EChartOption.Tooltip.Format[]): string {
    //     console.log(params)
    //     return '123'
    //   }
    // },
    xAxis: {
      show: false,
      data: Array(this.data?.length).fill('')
    },
    yAxis: {
      show: false,
      type: 'value'
    },
    series: [{
      type: 'line',
      symbol: 'none',
      data: this.data,
      lineStyle: {
        color: this.color
      },
      areaStyle: {
        color: this.color,
        opacity: 0.2
      },
      smooth: true
    }]
  }
}
</script>
