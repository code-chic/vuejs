<template>
  <div class="home--wrap">
    <el-row :gutter="20" class="statistical">
      <el-col :span="6">
        <x-card>
          <div class="info">
            <strong>用户总数</strong>
            <p><em>1406<span class="unit">人</span></em></p>
          </div>
          <x-chart :option="lineOption" />
        </x-card>
      </el-col>
      <el-col :span="6">
        <x-card>
          <div class="info">
            <strong>在线人数</strong>
            <p><em>406<span class="unit">人</span></em></p>
          </div>
          <x-chart :option="lineOption2" />
        </x-card>
      </el-col>
      <el-col :span="6">
        <x-card>
          <div class="info">
            <strong>CPU利用率</strong>
            <p><em>90<span class="unit">%</span></em></p>
          </div>
          <x-chart :option="lineOption3" />
        </x-card>
      </el-col>
      <el-col :span="6">
        <x-card>
          <div class="info">
            <strong>网站告警总数</strong>
            <p><em>17086<span class="unit">个</span></em></p>
          </div>
          <x-chart :option="lineOption4" />
        </x-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import Card from '@/components/card/index.vue'
import Chart from '@/components/chart/index.vue'

@Component({
  components: {
    'x-card': Card,
    'x-chart': Chart
  }
})
export default class Home extends Vue {
  lineOption = {
    grid: {
      top: 50,
      right: 0,
      bottom: 0,
      left: 0
    },
    xAxis: {
      show: false,
      data: []
    },
    yAxis: {
      type: 'value',
      show: false
    },
    series: [{
      type: 'line',
      symbol: 'none',
      data: [1, 17, 7, 6, 30, 9, 21, 0],
      lineStyle: {
        normal: {
          width: 3,
          color: '#3d45c0'
        }
      },
      areaStyle: {
        color: 'rgba(61, 69, 192, 0.2)'
      },
      smooth: true
    }]
  }

  lineOption2 = {
    grid: {
      top: 50,
      right: 0,
      bottom: 0,
      left: 0
    },
    xAxis: {
      show: false,
      data: []
    },
    yAxis: {
      type: 'value',
      show: false
    },
    series: [{
      type: 'line',
      symbol: 'none',
      data: [1, 17, 7, 6, 30, 9, 21, 0],
      lineStyle: {
        normal: {
          width: 3,
          color: '#45c720'
        }
      },
      areaStyle: {
        color: 'rgba(69, 199, 32, 0.2)'
      },
      smooth: true
    }]
  }

  lineOption3 = {
    grid: {
      top: 50,
      right: 0,
      bottom: 0,
      left: 0
    },
    xAxis: {
      show: false,
      data: []
    },
    yAxis: {
      type: 'value',
      show: false
    },
    series: [{
      type: 'line',
      symbol: 'none',
      data: [1, 17, 7, 6, 30, 9, 21, 0],
      lineStyle: {
        normal: {
          width: 3,
          color: '#d0282f'
        }
      },
      areaStyle: {
        color: 'rgba(208, 40, 47, 0.2)'
      },
      smooth: true
    }]
  }

  lineOption4 = {
    grid: {
      top: 50,
      right: 0,
      bottom: 0,
      left: 0
    },
    xAxis: {
      show: false,
      data: []
    },
    yAxis: {
      type: 'value',
      show: false
    },
    series: [{
      type: 'line',
      symbol: 'none',
      data: [1, 17, 7, 6, 30, 9, 21, 0],
      lineStyle: {
        normal: {
          width: 3,
          color: '#ce882d'
        }
      },
      areaStyle: {
        color: 'rgba(206, 136, 45, 0.2)'
      },
      smooth: true
    }]
  }
}
</script>
