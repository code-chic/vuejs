<template>
  <el-card
    class="curve-chart"
    shadow="never"
    :body-style="{padding: '10px'}">
    <div class="content">
      <div class="chart-info">
        <strong v-html="$props.title"></strong>
        <p>
          <em :style="{ color: $props.color }">{{ $props.value }}</em>
          <span class="unit">{{ $props.unitText }}</span>
        </p>
      </div>
      <x-chart :option="lineOption" :autoresize="true" />
    </div>
  </el-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { EChartOption } from 'echarts'
import Chart from '@/components/chart/index.vue'

@Component({
  components: {
    'x-chart': Chart
  }
})
export default class CurveChart extends Vue {
  @Prop({ default: () => [] }) data: [] | undefined

  @Prop({ default: '#f40' }) color: string | undefined

  @Prop({ default: '&nbsp;' }) title: string | undefined

  @Prop({ default: 0 }) value: string | number | undefined

  @Prop({ default: '' }) unitText: string | undefined

  // echarts 配置项
  lineOption: EChartOption = {
    grid: {
      top: 50,
      right: 0,
      bottom: 0,
      left: 0
    },
    xAxis: {
      show: false,
      data: [1, 2, 3, 4, 5, 6, 7]
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

<style lang="less" scoped>
  .curve-chart {
    @height: 123px;
    position: relative;
    height: @height;
    margin-bottom: 15px;
    .content {
      height: @height - 20;
      .chart-info {
        position: absolute;
        top: 5px;
        z-index: 1;
        strong {
          font-size: 12px;
          color: #2c3e50;
        }

        em {
          font-size: 24px;
          font-style: normal;
        }

        .unit {
          margin-left: 3px;
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
</style>
