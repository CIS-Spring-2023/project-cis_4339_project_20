<script>
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

export default {
  props: {
    label: {
      type: Array
    },
    chartData: {
      type: Array
    }
  },
  async mounted() {
    const backgroundColor = this.chartData.map(() => this.getColor())
    const borderColor = backgroundColor.map((e) =>
      e.replace(/[\d\.]+\)$/g, '1)')
    )
    await new Chart(this.$refs.attendancePieChart, {
      type: 'pie',  // chart type
      data: {
        labels: ['77001', '79567', '33456', '77777', '22387', '77011', '56723'],
        datasets: [
          {
            borderWidth: 1,
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            data: [10, 7, 2, 8, 1, 4, 2]
          }
        ]
      },
      options: {
        plugins: {
          legend: {
            display: true,
            position: 'bottom'
          }
        },
        responsive: true,
        maintainAspectRatio: true
      }
    })
  },
  methods: {
    getColor() {
      let channel = () => Math.random() * 255
      return `rgba(${channel()}, ${channel()}, ${channel()}, 0.2)`
    }
  }
}
</script>

<template>
  <div class="shadow-lg rounded-lg overflow-hidden">
    <canvas class="p-10" ref="attendancePieChart"></canvas>
  </div>
</template>