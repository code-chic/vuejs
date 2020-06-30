<template>
  <div class="equipment">
    <x-chart :option="pieOption" />
  </div>
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
export default class EquipmentChart extends Vue {
  @Prop({ default: '', type: String }) title: string | undefined

  @Prop({ default: () => [] }) data: Array<any> | undefined

  pieOption: EChartOption = {
    title: {
      text: this.title
    },
    legend: {
      orient: 'horizontal',
      bottom: 20
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
      data: this.data,
      // data: [
      //   { name: 'Google Chrome', value: 35 },
      //   { name: 'Firefox', value: 15 },
      //   { name: 'Opean', value: 5 },
      //   { name: 'IE', value: 1 },
      //   { name: '搜狗浏览器', value: 7 },
      //   { name: '360安全浏览器', value: 20 }
      // ],
      center: ['50%', '45%'],
      radius: [0, '60%']
    }]
  }
}
</script>

<style lang="less">
  .equipment {
    height: 350px;
  }
</style>
