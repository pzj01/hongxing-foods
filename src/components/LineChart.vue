<script setup>
const chartData = ref()
const chartOptions = ref()
onMounted(() => {
  chartData.value = setChartData()
  chartOptions.value = setChartOptions()
})

const colors = [
  'cyan',
  'red',
  'green',
  'yellow',
  'blue',
  'purple',
  'black',
  'orange',
]

function setChartData() {
  const documentStyle = getComputedStyle(document.documentElement)
  return {
    labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    datasets: ['燕饺', '带鱼段', '水晶包', '冰冻猪肚', '冰冻猪肚', '冰冻猪肚'].map(name => ({
      label: name,
      data: [65, 59, 80, 81, 56, 55, 40, 12, 60, 59, 80, 81].map(n => Math.floor(n * Math.random() * 1000)),
      fill: false,
      borderColor: documentStyle.getPropertyValue(`--p-${colors[Math.floor(Math.random() * colors.length)]}-300`),
      tension: 0.4,
    })),
  }
}
function setChartOptions() {
  const documentStyle = getComputedStyle(document.documentElement)
  const textColor = documentStyle.getPropertyValue('--p-text-color')
  const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color')
  const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color')

  return {
    maintainAspectRatio: false,
    aspectRatio: 0.6,
    plugins: {
      legend: {
        labels: {
          color: textColor,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
      y: {
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
    },
  }
}
</script>

<template>
  <div class="card">
    <Chart type="line" :data="chartData" :options="chartOptions" class="h-[30rem]" />
  </div>
</template>
