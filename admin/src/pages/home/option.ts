import echarts, { EChartOption } from 'echarts'

// 服务端性能统计
export const barOption: EChartOption = {
  grid: {
    top: 0,
    bottom: 30,
    left: 60
  },
  xAxis: {
    type: 'value',
    min: 0,
    max: 100,
    axisLabel: {
      color: '#2c3e50'
    },
    axisTick: {
      show: false
    },
    splitLine: {
      show: false
    },
    axisLine: {
      show: false
    }
  },
  yAxis: {
    type: 'category',
    data: ['CPU', 'Memory', 'Disk I/O', 'Network'],
    axisLabel: {
      color: '#2c3e50'
    },
    axisTick: {
      show: false
    },
    splitLine: {
      show: false
    },
    axisLine: {
      show: false
    }
  },
  series: [
    {
      type: 'bar',
      barWidth: 10,
      data: [20, 45, 15, 22],
      zlevel: 2,
      itemStyle: {
        normal: {
          // color: '#3d45c0' 61, 69, 192, 1
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(61, 69, 192, 0.5)' },
            { offset: 1, color: 'rgba(61, 69, 192, 1)' }
          ])
        }
      }
    },
    {
      type: 'bar',
      barWidth: 10,
      data: [100, 100, 100, 100],
      barGap: '-100%',
      itemStyle: {
        normal: {
          color: '#f1f1f1'
        },
        emphasis: {
          color: '#f1f1f1'
        }
      }
    }
  ]
}

// 网站访问实时统计
export const lineOption: EChartOption = {
  grid: {
    right: 40,
    bottom: 20,
    left: 40
  },
  legend: {
    data: ['在线人数', '平均数']
  },
  xAxis: {
    type: 'time',
    interval: 1000,
    splitLine: {
      show: false
    },
    axisTick: {
      show: false
    }
  },
  yAxis: {
    type: 'value',
    axisTick: {
      show: false
    }
  },
  series: [
    {
      type: 'line',
      name: '在线人数',
      animation: false,
      data: [],
      symbol: 'none',
      smooth: false,
      lineStyle: {
        width: 3
      }
    },
    {
      type: 'line',
      name: '平均数',
      animation: false,
      data: [],
      symbol: 'none',
      smooth: false,
      lineStyle: {
        width: 3
      }
    }
  ]
}
