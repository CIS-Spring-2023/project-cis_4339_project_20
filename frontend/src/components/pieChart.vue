<script>
import { Chart, registerables } from 'chart.js'
import axios from 'axios'
const apiURL = import.meta.env.VITE_ROOT_API
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
    const response = await axios.get(`${apiURL}/clients`)  //connecting to atlas API
    const clients = response.data 
    const zipCodes = clients.map(client => client.address.zip) // getting only the zipcodes
    const backgroundColor = this.chartData.map(() => this.getColor())
    const borderColor = backgroundColor.map((e) =>
      e.replace(/[\d\.]+\)$/g, '1)')
    )
    await new Chart(this.$refs.attendancePieChart, {
      type: 'pie',  // chart type
      data: {
        labels: zipCodes,
        datasets: [
          {
            borderWidth: 1,
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            data: zipCodes.map(zip => zipCodes.filter(z => z === zip).length)
          }
        ]
      },
      options: {
        plugins: {
          legend: {
            display: true,
            position: 'bottom'
          },
          title: {
                display: true,
                text: 'Clients by Zip Code'
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