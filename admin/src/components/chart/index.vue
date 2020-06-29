<template>
  <div ref="chart" class="chart-container"></div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Inject } from 'vue-property-decorator'

@Component
export default class Chart extends Vue {
  @Prop({ default: () => ({}) }) option: {} | undefined

  @Inject('registerResizeCallback') registerResizeCallback: Function | undefined

  public mounted () {
    const instance = this.$echarts.init(this.$refs.chart)
    instance.setOption(this.option)

    if (typeof this.registerResizeCallback === 'function') {
      this.registerResizeCallback(() => {
        setTimeout(() => instance.resize(), 300)
      })
    }

    window.addEventListener('resize', () => {
      instance.resize()
    })
  }
}
</script>
