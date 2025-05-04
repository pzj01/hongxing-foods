<script setup lang="ts">
import { Mail, MapPin, Phone, UtensilsCrossed } from 'lucide-vue-next'
import { CategoryList } from '~/types'
</script>

<template>
  <!-- 页脚 -->
  <footer class="bg-amber-900 py-12 text-amber-100">
    <div class="mx-auto px-6 container">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-4">
        <div>
          <div class="mb-4 flex items-center space-x-3">
            <div class="h-10 w-10 flex rotate-12 transform items-center justify-center rounded-full bg-amber-500">
              <UtensilsCrossed class="h-5 w-5 text-white" />
            </div>
            <h3 class="text-xl text-amber-100 font-bold">
              宏星食品
            </h3>
          </div>
          <p class="mb-4 text-amber-200">
            专注于为学校食堂及企事业单位提供优质食材配送服务，确保每一餐都新鲜、健康、安全。
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-amber-300 transition-colors hover:text-amber-100">
              <i class="pi pi-twitter text-lg" />
            </a>
            <a href="#" class="text-amber-300 transition-colors hover:text-amber-100">
              <i class="pi pi-instagram text-lg" />
            </a>
            <a href="#" class="text-amber-300 transition-colors hover:text-amber-100">
              <i class="pi pi-tiktok text-lg" />
            </a>
          </div>
        </div>

        <div>
          <h4 class="mb-4 text-lg text-amber-100 font-bold">
            快速链接
          </h4>
          <ul class="space-y-2">
            <li><a href="/" class="text-amber-200 transition-colors hover:text-amber-100">首页</a></li>
            <li><a href="/products" class="text-amber-200 transition-colors hover:text-amber-100">产品服务</a></li>
            <li><a href="/about" class="text-amber-200 transition-colors hover:text-amber-100">关于我们</a></li>
            <li><a href="/contact" class="text-amber-200 transition-colors hover:text-amber-100">联系我们</a></li>
          </ul>
        </div>

        <div>
          <h4 class="mb-4 text-lg text-amber-100 font-bold">
            产品分类
          </h4>
          <ul class="space-y-2">
            <li v-for="category in CategoryList" :key="category">
              <span class="text-amber-200">{{ category }}</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="mb-4 text-lg text-amber-100 font-bold">
            联系我们
          </h4>
          <ul class="space-y-3">
            <li class="flex items-start">
              <MapPin class="mr-2 mt-0.5 h-5 w-5 text-amber-300" />
              <span class="text-amber-200">萍乡市安源区城南宝塔路45号</span>
            </li>
            <li class="flex items-start">
              <Phone class="mr-2 mt-0.5 h-5 w-5 text-amber-300" />
              <span class="text-amber-200">0799-0928987</span>
            </li>
            <li class="flex items-start">
              <Mail class="mr-2 mt-0.5 h-5 w-5 text-amber-300" />
              <span class="text-amber-200">contact@hongxingfood.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-8 border-t border-amber-800 pt-8 text-center">
        <p class="text-amber-300">
          © {{ new Date().getFullYear() }} 萍乡市安源区宏星食品经营部. 版权所有.
        </p>
      </div>
    </div>
  </footer>
</template>
