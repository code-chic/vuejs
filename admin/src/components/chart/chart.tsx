import { Vue, Component, Prop } from 'vue-property-decorator'
import echarts, { ECharts, EChartOption } from 'echarts'

@Component
export default class Chart extends Vue {
  @Prop({ type: String, default: '100%' }) width?: string

  @Prop({ type: String, default: '100%' }) height?: string

  @Prop({ type: Object, default: () => ({}) }) option?: EChartOption

  // 保存 echarts 实例对象
  instance?: ECharts

  // 重新计算 echarts 大小
  public resize(): void {
    if (this.instance) {
      this.instance.resize()
    }
  }

  // Chart 组件挂载到真实DOM后，开始进行初始化 echarts 对象
  // 并将当前组件推送到 root 组件的 resizes 数组里去，方便其它组件更改并
  // 影响到布局时，能够及时的更新图表
  private mounted(): void {
    this.instance = echarts.init(this.$refs.chartRef as HTMLDivElement)
    this.instance.setOption(this.option as EChartOption)
    if (!Array.isArray((this.$root as any).resizes)) {
      (this.$root as any).resizes = []
    }
    (this.$root as any).resizes.push(this)
  }

  // Chart 组件销毁时，需要将它从 resizes 数组中移除掉
  private destroyed(): void {
    if (!Array.isArray((this.$root as any).resizes)) {
      const index = (this.$root as any).resizes.indexOf(this)
      if (index !== -1) {
        (this.$root as any).resizes.splice(index, 1)
      }
    }
  }

  public render(): JSX.Element {
    return <div ref="chartRef" class="x-chart" style={{ width: this.width, height: this.height }} />
  }
}
