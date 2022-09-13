<script setup>
import { defineAsyncComponent } from 'vue'

const ApexChart = defineAsyncComponent(() =>
  import('vue3-apexcharts'),
)
</script>

<script>
export default {
  data() {
    return {
      series: [{
        name: 'Benefeed',
        data: [31, 40, 28, 51, 42, 109, 100],
      }, {
        name: 'IHSG',
        data: [11, 32, 45, 32, 34, 52, 41],
      }],
      chartOptions: {
        chart: {
          height: 450,
          type: 'area',
          toolbar: {
            show: false,
          },
        },
        grid: {
          padding: {
            left: 0,
            right: 0,
          },
        },
        yaxis: {
          show: false,
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'straight',
        },
        xaxis: {
          show: false,
          labels: { show: false },
          type: 'category',
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          categories: ['Q1 2021', 'Q2 2021', 'Q3 2021', 'Q4 2021', 'Q1 2022', 'Q2 2022', 'Q3 2022'],
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm',
          },
        },
      },
    }
  },
}
</script>

<template>
  <div>
    <client-only>
      <ApexChart type="area" height="450" :options="chartOptions" :series="series" />
    </client-only>
  </div>
</template>
