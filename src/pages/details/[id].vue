<script setup lang="ts">
import {
  Award,
  Calendar,
  ChefHat,
  ChevronRight,
  Clock,
  FileText,
  Home,
  InfoIcon,
  Link2,
  MapPin,
  Package,
  QrCode,
  Refrigerator,
  Shield,
  Tag,
  Weight,
} from 'lucide-vue-next'
import { useToast } from 'primevue/usetoast'
import { products } from '~/data/products'

// 路由
const router = useRouter()
const toast = useToast()

const route = useRoute()

// 模拟产品数据
const product = computed(() => products.find(p => p.id === +route.params.id)!)

watch(product, () => {
  scrollTo(0, 0)
})

// 对话框控制
const showShareDialog = ref(false)

// 格式化日期
function formatDate(date: Date) {
  return new Date(date).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

// 相关产品
const relatedProducts = ref(products.filter(p => p.category === product.value.category).slice(0, 4))

// 查看产品详情
function viewProductDetails(id: number) {
  router.push(`/details/${id}`)
}

// 添加到收藏
function addToFavorites() {
  toast.add({
    severity: 'success',
    summary: '收藏成功',
    detail: `已将 ${product.value.name} 添加到收藏夹`,
    life: 3000,
  })
}

// 分享产品
function shareProduct() {
  showShareDialog.value = true
}

// 下载产品说明书
function downloadProductSheet() {
  toast.add({
    severity: 'info',
    summary: '下载开始',
    detail: '产品说明书下载已开始',
    life: 3000,
  })
}

// 下载检测报告
function downloadTestReport(url?: string) {
  url && open(url, '_blank')
}
</script>

<template>
  <MainLayout>
    <Background />

    <!-- 面包屑导航 -->
    <section class="bg-white pb-4 pt-24">
      <div class="mx-auto px-6 container">
        <nav class="flex" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
              <RouterLink to="/" class="inline-flex items-center text-sm text-amber-700 font-medium hover:text-amber-900">
                <Home class="mr-2 h-4 w-4" />
                首页
              </RouterLink>
            </li>
            <li>
              <div class="flex items-center">
                <ChevronRight class="h-4 w-4 text-gray-400" />
                <RouterLink to="/products" class="ml-1 text-sm text-amber-700 font-medium md:ml-2 hover:text-amber-900">
                  产品中心
                </RouterLink>
              </div>
            </li>
            <li aria-current="page">
              <div class="flex items-center">
                <ChevronRight class="h-4 w-4 text-gray-400" />
                <span class="ml-1 text-sm text-gray-500 font-medium md:ml-2">
                  {{ product.name }}
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
    </section>

    <!-- 产品基本信息 -->
    <section class="bg-white py-8">
      <div class="mx-auto px-6 container">
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <!-- 产品图片 -->
          <div class="relative">
            <div class="h-[400px] flex items-center justify-center overflow-hidden rounded-2xl bg-amber-50 shadow-lg md:h-[500px]">
              <img
                :src="product.image || '/placeholder.svg?height=500&width=500&text=产品图片'"
                :alt="product.name"
                class="max-h-full max-w-full object-contain"
              >

              <!-- 产品标签 -->
              <div class="absolute left-4 top-4 flex flex-col gap-2">
                <span v-for="(tag, index) in product.tags.slice(0, 3)" :key="index" class="rounded-full bg-amber-500 px-3 py-1 text-sm text-white font-medium">
                  {{ tag }}
                </span>
              </div>
            </div>

            <!-- 认证标志 -->
            <div class="mt-6 flex flex-wrap justify-center gap-4">
              <div v-for="(cert, index) in product.certifications" :key="index" class="flex items-center rounded-lg bg-white p-3 shadow-md">
                <Award class="mr-2 h-6 w-6 text-amber-600" />
                <span class="text-sm text-amber-800">{{ cert }}</span>
              </div>
            </div>
          </div>

          <!-- 产品信息 -->
          <div>
            <h1 class="mb-4 text-3xl text-amber-800 font-bold md:text-4xl">
              {{ product.name }}
            </h1>

            <div class="mb-4 flex items-center">
              <span class="mr-2 rounded-full bg-amber-100 px-3 py-1 text-sm text-amber-800 font-medium">
                {{ product.category }}
              </span>
              <span class="text-sm text-gray-500">SKU: {{ product.sku }}</span>
            </div>

            <p class="mb-6 text-lg text-amber-700">
              {{ product.description }}
            </p>

            <div class="mb-6 rounded-xl bg-amber-50 p-6">
              <div class="grid grid-cols-2 gap-4">
                <div class="flex items-start">
                  <Tag class="mr-2 mt-0.5 h-5 w-5 text-amber-600" />
                  <div>
                    <p class="text-sm text-gray-500">
                      品牌
                    </p>
                    <p class="text-amber-800 font-medium">
                      {{ product.brand }}
                    </p>
                  </div>
                </div>

                <div class="flex items-start">
                  <MapPin class="mr-2 mt-0.5 h-5 w-5 text-amber-600" />
                  <div>
                    <p class="text-sm text-gray-500">
                      产地
                    </p>
                    <p class="text-amber-800 font-medium">
                      {{ product.origin }}
                    </p>
                  </div>
                </div>

                <div class="flex items-start">
                  <Package class="mr-2 mt-0.5 h-5 w-5 text-amber-600" />
                  <div>
                    <p class="text-sm text-gray-500">
                      包装
                    </p>
                    <p class="text-amber-800 font-medium">
                      {{ product.packagingType }}
                    </p>
                  </div>
                </div>

                <div class="flex items-start">
                  <Weight class="mr-2 mt-0.5 h-5 w-5 text-amber-600" />
                  <div>
                    <p class="text-sm text-gray-500">
                      规格
                    </p>
                    <p class="text-amber-800 font-medium">
                      {{ product.weight }}{{ product.weightUnit }}/{{ product.unit }}
                    </p>
                  </div>
                </div>

                <div class="flex items-start">
                  <Calendar class="mr-2 mt-0.5 h-5 w-5 text-amber-600" />
                  <div>
                    <p class="text-sm text-gray-500">
                      生产日期
                    </p>
                    <p class="text-amber-800 font-medium">
                      {{ formatDate(product.date) }}
                    </p>
                  </div>
                </div>

                <div class="flex items-start">
                  <Clock class="mr-2 mt-0.5 h-5 w-5 text-amber-600" />
                  <div>
                    <p class="text-sm text-gray-500">
                      保质期
                    </p>
                    <p class="text-amber-800 font-medium">
                      {{ product.shelfLife }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-6 flex items-center justify-between">
              <div>
                <p class="mb-1 text-sm text-gray-500">
                  价格
                </p>
                <div class="flex items-baseline">
                  <span class="text-3xl text-amber-600 font-bold">¥{{ product.price.toFixed(2) }}</span>
                  <span class="ml-2 text-lg text-amber-700">/{{ product.unit }}</span>
                </div>
              </div>

              <div>
                <p class="mb-1 text-sm text-gray-500">
                  库存
                </p>
                <div class="flex items-center">
                  <span v-if="product.stockQuantity > 0" class="text-green-600 font-medium">有货 ({{ product.stockQuantity }}{{ product.unit }})</span>
                  <span v-else class="text-red-600 font-medium">缺货</span>
                </div>
              </div>
            </div>

            <div class="flex flex-wrap gap-3">
              <Button
                icon="pi pi-heart"
                class="custom-button-text p-button-rounded p-button-text"
                @click="addToFavorites"
              />
              <Button
                icon="pi pi-share-alt"
                class="p-button-rounded p-button-text custom-button-text"
                @click="shareProduct"
              />
              <Button
                icon="pi pi-download"
                label="下载产品说明书"
                class="p-button-rounded p-button-text custom-button-text"
                @click="downloadProductSheet"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 产品详情选项卡 -->
    <section class="bg-amber-50 py-12">
      <div class="mx-auto px-6 container">
        <TabView class="custom-tabview">
          <TabPanel header="产品详情">
            <div class="p-4">
              <h2 class="mb-6 text-2xl text-amber-800 font-bold">
                产品详情
              </h2>

              <div class="mb-8 rounded-xl bg-white p-6">
                <h3 class="mb-4 text-xl text-amber-800 font-bold">
                  产品特点
                </h3>
                <p class="mb-6 text-amber-700">
                  {{ product.description }}
                </p>

                <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <h4 class="mb-3 text-lg text-amber-800 font-semibold">
                      存储方法
                    </h4>
                    <div class="flex items-start">
                      <Refrigerator class="mr-3 mt-0.5 h-5 w-5 text-amber-600" />
                      <p class="text-amber-700">
                        {{ product.storageMethod }}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 class="mb-3 text-lg text-amber-800 font-semibold">
                      烹饪提示
                    </h4>
                    <ul class="space-y-2">
                      <li v-for="(tip, index) in product.cookingTips" :key="index" class="flex items-start">
                        <ChefHat class="mr-3 mt-0.5 h-5 w-5 text-amber-600" />
                        <span class="text-amber-700">{{ tip }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- 工艺特点 -->
              <div class="mb-8 rounded-xl bg-white p-6">
                <h3 class="mb-4 text-xl text-amber-800 font-bold">
                  工艺特点
                </h3>
                <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div v-for="(characteristic, index) in product.processCharacteristics" :key="index" class="rounded-lg bg-amber-50 p-4">
                    <h4 class="mb-2 text-lg text-amber-800 font-semibold">
                      {{ characteristic.name }}
                    </h4>
                    <p class="text-amber-700">
                      {{ characteristic.description }}
                    </p>
                  </div>
                </div>
              </div>

              <!-- 生产步骤 -->
              <div class="rounded-xl bg-white p-6">
                <h3 class="mb-4 text-xl text-amber-800 font-bold">
                  生产工艺
                </h3>
                <div class="relative">
                  <!-- 步骤连接线 -->
                  <div class="absolute bottom-0 left-6 top-0 z-0 w-0.5 bg-amber-200" />

                  <div class="relative z-10 space-y-8">
                    <div v-for="(step, index) in product.productionSteps" :key="index" class="flex">
                      <div class="flex-shrink-0">
                        <div class="h-12 w-12 flex items-center justify-center rounded-full bg-amber-500 text-white font-bold">
                          {{ index + 1 }}
                        </div>
                      </div>
                      <div class="ml-6">
                        <h4 class="mb-2 text-lg text-amber-800 font-semibold">
                          {{ step.name }}
                        </h4>
                        <p class="text-amber-700">
                          {{ step.description }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel header="营养成分">
            <div class="p-4">
              <h2 class="mb-6 text-2xl text-amber-800 font-bold">
                营养成分表
              </h2>

              <div class="mb-6 rounded-xl bg-white p-6">
                <p class="mb-4 text-amber-700">
                  {{ product.nutritionalInfo.description }}
                </p>
                <p class="mb-4 text-sm text-gray-500">
                  {{ product.nutritionalInfo.gContent }}
                </p>

                <div class="overflow-x-auto">
                  <table class="min-w-full divide-y divide-amber-200">
                    <thead class="bg-amber-50">
                      <tr>
                        <th scope="col" class="px-6 py-3 text-left text-xs text-amber-800 font-medium tracking-wider uppercase">
                          营养成分
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs text-amber-800 font-medium tracking-wider uppercase">
                          含量
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs text-amber-800 font-medium tracking-wider uppercase">
                          单位
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-amber-100">
                      <tr v-for="(ingredient, index) in product.nutritionalInfo.ingredients" :key="index">
                        <td class="whitespace-nowrap px-6 py-4 text-sm text-amber-800 font-medium">
                          {{ ingredient.name }}
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 text-sm text-amber-700">
                          {{ ingredient.weight }}
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 text-sm text-amber-700">
                          {{ ingredient.unit }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="rounded-xl bg-amber-50 p-6">
                <div class="mb-4 flex items-center">
                  <InfoIcon class="mr-2 h-5 w-5 text-amber-600" />
                  <h3 class="text-lg text-amber-800 font-semibold">
                    营养提示
                  </h3>
                </div>
                <p class="text-amber-700">
                  以上营养成分数据仅供参考，实际营养成分可能因批次、原料等因素略有差异。建议以产品包装上的营养标签为准。
                </p>
              </div>
            </div>
          </TabPanel>

          <TabPanel header="原材料">
            <div class="p-4">
              <h2 class="mb-6 text-2xl text-amber-800 font-bold">
                原材料信息
              </h2>

              <div class="space-y-6">
                <div v-for="(material, index) in product.rawMaterials" :key="index" class="rounded-xl bg-white p-6">
                  <h3 class="mb-3 text-xl text-amber-800 font-bold">
                    {{ material.name }}
                  </h3>
                  <p class="mb-4 text-amber-700">
                    {{ material.description }}
                  </p>

                  <div class="grid grid-cols-1 mb-4 gap-4 md:grid-cols-3">
                    <div class="rounded-lg bg-amber-50 p-4">
                      <h4 class="mb-1 text-sm text-gray-500 font-medium">
                        原料来源
                      </h4>
                      <p class="text-amber-800 font-medium">
                        {{ material.origin }}
                      </p>
                    </div>
                  </div>

                  <div class="mt-4">
                    <h4 class="mb-3 text-lg text-amber-800 font-semibold">
                      成分详情
                    </h4>
                    <div class="rounded-lg bg-amber-50 p-4">
                      <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                        <div>
                          <h5 class="mb-1 text-sm text-gray-500 font-medium">
                            成分名称
                          </h5>
                          <p class="text-amber-800 font-medium">
                            {{ material.ingredient.name }}
                          </p>
                        </div>
                        <div>
                          <h5 class="mb-1 text-sm text-gray-500 font-medium">
                            来源
                          </h5>
                          <p class="text-amber-800 font-medium">
                            {{ material.ingredient.origin }}
                          </p>
                        </div>
                        <div>
                          <h5 class="mb-1 text-sm text-gray-500 font-medium">
                            功能
                          </h5>
                          <p class="text-amber-800 font-medium">
                            {{ material.ingredient.function }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel header="认证与报告">
            <div class="p-4">
              <h2 class="mb-6 text-2xl text-amber-800 font-bold">
                认证与检测报告
              </h2>

              <div class="grid grid-cols-1 mb-8 gap-6 md:grid-cols-2">
                <div class="rounded-xl bg-white p-6">
                  <h3 class="mb-4 text-xl text-amber-800 font-bold">
                    产品认证
                  </h3>
                  <div class="space-y-4">
                    <div v-for="(cert, index) in product.certifications" :key="index" class="flex items-start">
                      <Award class="mr-3 mt-0.5 h-6 w-6 text-amber-600" />
                      <div>
                        <p class="text-amber-800 font-medium">
                          {{ cert }}
                        </p>
                        <p class="text-sm text-amber-700">
                          该认证确保产品符合相关标准和规范。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="rounded-xl bg-white p-6">
                  <h3 class="mb-4 text-xl text-amber-800 font-bold">
                    生产许可
                  </h3>
                  <div class="flex items-start">
                    <FileText class="mr-3 mt-0.5 h-6 w-6 text-amber-600" />
                    <div>
                      <p class="text-amber-800 font-medium">
                        生产许可证号
                      </p>
                      <p class="text-amber-700">
                        {{ product.productionLicense || 'SC12345678901234' }}
                      </p>
                    </div>
                  </div>

                  <div class="mt-6">
                    <h4 class="mb-3 text-lg text-amber-800 font-semibold">
                      检测报告
                    </h4>
                    <div class="flex items-center rounded-lg bg-amber-50 p-4">
                      <FileText class="mr-3 h-6 w-6 text-amber-600" />
                      <div>
                        <p class="text-amber-800 font-medium">
                          产品检测报告
                        </p>
                        <!-- <p class="text-sm text-amber-700">
                          {{ `JCBG-${(Math.random() * Math.E).toString(16).slice(2, 8)}` }}
                        </p> -->
                      </div>
                      <Button
                        icon="pi pi-eye"
                        class="p-button-rounded p-button-text custom-button-text ml-auto"
                        @click="downloadTestReport(product.testReport)"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="rounded-xl bg-amber-50 p-6">
                <div class="mb-4 flex items-center">
                  <Shield class="mr-2 h-5 w-5 text-amber-600" />
                  <h3 class="text-lg text-amber-800 font-semibold">
                    质量承诺
                  </h3>
                </div>
                <p class="text-amber-700">
                  我们承诺所有产品均通过严格的质量检测，符合国家食品安全标准。如对产品质量有任何疑问，请联系我们的客服团队。
                </p>
              </div>
            </div>
          </TabPanel>
        </TabView>
      </div>
    </section>

    <!-- 相关推荐 -->
    <section class="bg-white py-16">
      <div class="mx-auto px-6 container">
        <div class="mb-12 text-center">
          <h2 class="relative mb-4 inline-block text-3xl text-amber-800 font-bold">
            相关推荐
            <span class="absolute left-1/4 h-1 w-1/2 bg-amber-500 -bottom-2" />
          </h2>
          <p class="mx-auto mt-6 max-w-3xl text-xl text-amber-700">
            您可能还对这些产品感兴趣
          </p>
        </div>

        <div class="grid grid-cols-1 gap-6 lg:grid-cols-4 sm:grid-cols-2">
          <div
            v-for="relatedProduct in relatedProducts"
            :key="relatedProduct.id"
            class="transform overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <!-- 产品图片 -->
            <div class="relative h-48 overflow-hidden">
              <img
                :src="relatedProduct.image || '/placeholder.svg?height=200&width=300&text=相关产品'"
                :alt="relatedProduct.name"
                class="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
              >
            </div>

            <!-- 产品信息 -->
            <div class="p-4">
              <h3 class="line-clamp-1 mb-2 text-lg text-amber-800 font-bold">
                {{ relatedProduct.name }}
              </h3>
              <p class="line-clamp-2 mb-3 h-10 text-sm text-amber-700">
                {{ relatedProduct.description }}
              </p>

              <div class="flex items-center justify-between">
                <div class="text-amber-600 font-bold">
                  ¥{{ relatedProduct.price.toFixed(2) }}
                </div>

                <Button
                  icon="pi pi-arrow-right"
                  class="p-button-rounded custom-button p-button-sm"
                  @click="viewProductDetails(relatedProduct.id)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 分享对话框 -->
    <Dialog v-model:visible="showShareDialog" modal header="分享产品" :style="{ width: '90%', maxWidth: '400px' }">
      <div class="p-4">
        <p class="mb-6 text-center text-amber-700">
          分享这个产品给您的朋友
        </p>

        <div class="grid grid-cols-4 gap-4">
          <button class="flex flex-col items-center justify-center rounded-lg p-3 hover:bg-amber-50">
            <div class="mb-2 h-12 w-12 flex items-center justify-center rounded-full bg-green-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20"><!-- Icon from uiw icons by liwen0526 - https://github.com/uiwjs/icons/blob/master/LICENSE --><path fill-green-600 d="M14 7.3c3.2 0 6 2.258 6 5.007c0 1.472-1.1 2.846-2.5 3.926L18 18l-1.9-1.08c-.7.196-1.4.393-2.1.393c-3.4 0-6-2.258-6-5.006S10.7 7.3 14 7.3M7 2c3.5 0 6.5 2.061 7.3 4.81h-.7c-3.4 0-5.999 2.454-5.999 5.497c0 .49.1.981.2 1.472h-.7c-.9 0-1.6-.196-2.5-.393l-2.5 1.178l.699-2.06C1.1 11.324 0 9.753 0 7.89C0 4.552 3.1 2 7 2m5.1 8.049c-.3 0-.7.393-.7.687c0 .392.3.687.7.687c.5 0 .9-.392.9-.687c0-.393-.4-.687-.9-.687m3.8 0c-.3 0-.7.393-.7.687c0 .392.4.687.7.687c.6 0 .9-.392.9-.687c0-.393-.4-.687-.9-.687M4.8 4.846c-.6 0-1.1.393-1.1.884c0 .589.6.884 1.1.884q.75 0 .9-.884c0-.59-.4-.884-.9-.884m4.9 0c-.6 0-1.1.393-1.1.884c0 .589.6.884 1.1.884s.9-.295.9-.884c0-.59-.4-.884-.9-.884" /></svg>
            </div>
            <span class="text-sm text-amber-800">微信</span>
          </button>

          <button class="flex flex-col items-center justify-center rounded-lg p-3 hover:bg-amber-50">
            <div class="mb-2 h-12 w-12 flex items-center justify-center rounded-full bg-blue-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Material Design Icons by Pictogrammers - https://github.com/Templarian/MaterialDesign/blob/master/LICENSE --><path fill-sky-600 d="M3.18 13.54c.58-1.38 1.39-2.4 1.99-2.62c-.01-.8.14-1.3.39-1.7c0-.03-.06-.36.16-.77C5.87 4.85 8.21 2 12 2s6.13 2.85 6.28 6.45c.22.41.16.74.16.77c.25.4.4.9.39 1.7c.6.22 1.41 1.24 1.99 2.63c.75 1.76.87 3.45.27 3.75c-.41.2-1.06-.3-1.67-1.18c-.24.98-.84 1.88-1.69 2.59c.9.33 1.48.87 1.48 1.48c0 1-1.58 1.81-3.52 1.81c-1.76 0-3.19-.66-3.48-1.5h-.42c-.29.84-1.72 1.5-3.48 1.5c-1.94 0-3.52-.81-3.52-1.81c0-.61.58-1.15 1.48-1.48c-.85-.71-1.45-1.61-1.69-2.59c-.61.88-1.26 1.38-1.67 1.18c-.6-.3-.48-1.99.27-3.76" /></svg>
            </div>
            <span class="text-sm text-amber-800">QQ</span>
          </button>

          <button class="flex flex-col items-center justify-center rounded-lg p-3 hover:bg-amber-50">
            <div class="mb-2 h-12 w-12 flex items-center justify-center rounded-full bg-red-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Material Design Icons by Pictogrammers - https://github.com/Templarian/MaterialDesign/blob/master/LICENSE --><path fill-pink-600 d="M9.82 13.87c1.07 0 1.95.87 1.95 1.95a1.95 1.95 0 0 1-1.95 1.95c-1.08 0-1.95-.88-1.95-1.95c0-1.08.87-1.95 1.95-1.95M14.5 3.34l.68-.03c3.76 0 6.82 3.06 6.82 6.82l-.05.82l-1.19-.37l.02-.45c0-3.09-2.51-5.6-5.6-5.6l-.35.01zm.82 2.89c2.06.07 3.73 1.77 3.76 3.83l-1.24-.38c-.19-1.12-1.06-2-2.17-2.18zM2 15.41c-.03-.61.07-2.77 2.95-5.44c3.4-3.16 4.87-2.92 4.87-2.92s3.18-.3 1.24 3.41h.07c.47-.5 1.49-1.25 3.56-1.46c2.08-.21 2.08 1.5 1.81 2.7c1.88.94 3.06 2.33 3.06 3.88c0 2.82-3.93 5.11-8.78 5.11h-.28c-3.5 0-6.5-1.27-7.79-3.1c-.46-.62-.71-1.3-.71-2.01zm7.82-3.49c-3.23 0-5.85 1.75-5.85 3.9s2.62 3.9 5.85 3.9s5.85-1.75 5.85-3.9s-2.62-3.9-5.85-3.9" /></svg>
            </div>
            <span class="text-sm text-amber-800">微博</span>
          </button>

          <button class="flex flex-col items-center justify-center rounded-lg p-3 hover:bg-amber-50">
            <div class="mb-2 h-12 w-12 flex items-center justify-center rounded-full bg-amber-100">
              <Link2 class="h-6 w-6 text-amber-600" />
            </div>
            <span class="text-sm text-amber-800">复制链接</span>
          </button>
        </div>

        <div class="mt-6 border-t border-gray-200 pt-6">
          <div class="flex items-center justify-center">
            <div class="h-32 w-32 flex items-center justify-center rounded-lg bg-amber-100">
              <QrCode class="h-16 w-16 text-amber-600" />
            </div>
          </div>
          <p class="mt-3 text-center text-sm text-amber-700">
            扫描二维码，在手机上查看产品
          </p>
        </div>
      </div>
    </Dialog>
  </MainLayout>
</template>

<style scoped>
/* 自定义PrimeVue组件样式 */
:deep(.p-tabview .p-tabview-nav) {
  background-color: transparent;
  border-color: #fef3c7;
}

:deep(.p-tabview .p-tabview-nav li .p-tabview-nav-link) {
  color: #92400e;
  background-color: #fff;
  border-color: #fef3c7;
}

:deep(.p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link) {
  color: #92400e;
  background-color: #fff;
  border-color: #d97706;
  border-bottom-color: #fff;
}

:deep(.p-tabview .p-tabview-panels) {
  background-color: #fff;
  border-color: #fef3c7;
}

:deep(.p-dialog-header) {
  background-color: #d97706;
  color: white;
}

:deep(.p-dialog-header-close) {
  color: white;
}

:deep(.p-inputnumber-button) {
  background-color: #fff !important;
  color: #d97706 !important;
  border-color: #d97706 !important;
}

:deep(.p-inputnumber-button:hover) {
  background-color: #fef3c7 !important;
}

:deep(.p-inputnumber-input) {
  border-color: #d97706 !important;
}

/* 自定义按钮 */
.custom-button {
  background-color: #d97706 !important;
  border-color: #d97706 !important;
}

.custom-button:hover {
  background-color: #b45309 !important;
  border-color: #b45309 !important;
}

.custom-button-outline {
  color: #d97706 !important;
  border-color: #d97706 !important;
}

.custom-button-outline:hover {
  background-color: rgba(217, 119, 6, 0.1) !important;
}

.custom-button-text {
  color: #d97706 !important;
}

.custom-button-text:hover {
  background-color: rgba(217, 119, 6, 0.1) !important;
}

/* 动画效果 */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.5s ease-out forwards;
}
</style>
