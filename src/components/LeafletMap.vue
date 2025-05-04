<script setup lang="ts">
import type { LatLngTuple } from 'leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

let map: L.Map | null

onMounted(() => setTimeout(initMap, 300))
const coords = [27.61, 113.85] as LatLngTuple

function initMap() {
  map = L.map('map', {
    attributionControl: false,
  }).setView(coords, 15)

  // 添加图层
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    detectRetina: true,
  }).addTo(map)

  const icon = L.icon({
    iconUrl: '/marker.svg',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  })

  // 添加当前位置标记
  const marker = L.marker(coords, { icon }).addTo(map)
  marker.bindPopup('公司位置').openPopup()
}

onUnmounted(() => {
  map?.remove()
  map = null
})
</script>

<template>
  <div id="map" h-full />
</template>
