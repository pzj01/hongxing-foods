<script setup lang="ts">
const chartData = ref()
const chartOptions = ref()

onMounted(() => {
  chartData.value = setChartData()
  chartOptions.value = setChartOptions()
})

function setChartData() {
  return {
    labels: ['鸡腿', '鸡胸肉', '鸡爪', '柳叶鸡', '川香鸡柳', '燃情伴翅'],
    datasets: [
      {
        label: '销量',
        data: [540, 325, 702, 620, 461, 634].map(n => Math.floor(n * Math.random() * 100)),
        backgroundColor: ['rgba(249, 115, 22, 0.2)', 'rgba(6, 182, 212, 0.2)', 'rgb(107, 114, 128, 0.2)', 'rgba(139, 92, 246, 0.2)', 'rgba(255, 109, 174, 0.2)', 'rgba(255, 205, 86, 0.2)'],
        borderColor: ['rgb(249, 115, 22)', 'rgb(6, 182, 212)', 'rgb(107, 114, 128)', 'rgb(139, 92, 246)', 'rgb(255, 109, 174)', 'rgb(255, 205, 86)'],
        borderWidth: 1,
      },
    ],
  }
}
function setChartOptions() {
  const documentStyle = getComputedStyle(document.documentElement)
  const textColor = documentStyle.getPropertyValue('--p-text-color')
  const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color')
  const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color')

  return {
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
        beginAtZero: true,
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
  <Chart type="bar" :data="chartData" :options="chartOptions" />
</template>
