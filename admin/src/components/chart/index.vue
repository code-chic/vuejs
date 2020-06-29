<template>
  <div ref="chart" class="chart-container"></div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import echarts, { ECharts, EChartOption } from 'echarts'

@Component
export default class Chart extends Vue {
  @Prop({ default: () => ({}) }) option: EChartOption | undefined

  @Prop({ default: true }) autoresize: boolean | undefined

  instance: ECharts | null = null

  public resize () {
    if (this.instance != null) {
      this.instance.resize()
    }
  }

  public created () {
    if (this.$props.autoresize) {
      if (!Array.isArray((this.$root as any).resizes)) {
        (this.$root as any).resizes = []
      }
      (this.$root as any).resizes.push(this)
    }
  }

  public mounted () {
    this.instance = echarts.init((this.$refs.chart as HTMLDivElement))
    if (this.option !== undefined) {
      this.instance.setOption(this.option)
    }
  }

  public beforeDestory () {
    if (Array.isArray((this.$root as any).resizes)) {
      const index = (this.$root as any).resizes.indexOf(this)
      if (index !== -1) {
        (this.$root as any).resizes.splice(index, 1)
      }
    }
  }
}
</script>
