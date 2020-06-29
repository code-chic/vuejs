<template>
  <div ref="chart" class="chart-container"></div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Chart extends Vue {
  @Prop({ default: () => ({}) }) option: {} | undefined

  public mounted () {
    const instance = this.$echarts.init(this.$refs.chart)
    instance.setOption(this.option)

    window.addEventListener('resize', () => {
      instance.resize()
    })
  }
}
</script>
