<template>
  <x-chart ref="barChartRef" :width="width" :height="height" :option="pieOption" />
</template>

<script lang="ts">
import { Vue, Component, Prop, Inject } from 'vue-property-decorator'
import { EChartOption } from 'echarts'
import Chart from '@/components/chart/chart'

@Component({
  components: {
    'x-chart': Chart
  }
})
export default class EquipmentChart extends Vue {
  @Prop({ type: String, default: '100%' }) width?: string

  @Prop({ type: String, default: '100%' }) height?: string

  @Prop({ type: String, default: '' }) title?: string

  @Inject() getThemeValue: any

  get pieOption(): EChartOption {
    return {
      title: {
        text: '设备信息采集',
        textStyle: {
          color: this.getThemeValue() === 'dark' ? '#fff' : '#f40'
        }
      },
      legend: {
        orient: 'horizontal',
        bottom: 10,
        textStyle: {
          color: this.getThemeValue() === 'dark' ? '#fff' : '#f40'
        }
      },
      tooltip: {
        show: true
      },
      series: [{
        type: 'pie',
        label: {
          show: false
        },
        hoverAnimation: false,
        // data: this.data,
        data: [
          { name: 'Google Chrome', value: 35 },
          { name: 'Firefox', value: 15 },
          { name: 'Opean', value: 5 },
          { name: 'IE', value: 1 },
          { name: '搜狗浏览器', value: 7 },
          { name: '360安全浏览器', value: 20 }
        ],
        center: ['50%', '45%'],
        radius: [0, '60%']
      }]
    }
  }

  public updated(): void {
    (this.$refs.barChartRef as any).instance.setOption(this.pieOption)
  }
}
</script>
