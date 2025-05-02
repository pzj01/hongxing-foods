<script setup lang="ts">
import type { Category, Product } from '~/types'
import { products } from '~/data/products'
import { CategoryList } from '~/types'

// 产品分类数据
const categories = ref<Category[]>(CategoryList)

const allProducts = ref<Product[]>([...products])

// 筛选相关状态
const selectedCategory = ref<Category | null>(null)
const keyword = useLocalStorage('keyword', '')
const searchQuery = ref(keyword.value)

watch(searchQuery, (value) => {
  keyword.value = value
})

// 分页相关状态
const first = ref(0)
const rows = ref(9)
// 筛选产品
const filteredProducts = computed<Product[]>(() => {
  let result = [...allProducts.value]

  // 按分类筛选
  if (selectedCategory.value) {
    result = result.filter(product => product.category === selectedCategory.value)
  }

  // 按搜索关键词筛选
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase().trim()
    result = result.filter(product =>
      product.name.toLowerCase().includes(query)
      || product.description.toLowerCase().includes(query)
      || product.tags.some(tag => tag.toLowerCase().includes(query)),
    )
  }

  return result
})
const totalProducts = computed(() => filteredProducts.value.length)

// 应用筛选
function filterProducts() {
  first.value = 0 // 重置分页到第一页
}

// 重置筛选
function resetFilters() {
  selectedCategory.value = null
  searchQuery.value = ''
  filterProducts()
}

// 分页变化
function onPageChange(event: any) {
  first.value = event.first
  rows.value = event.rows
}

// 页面加载时默认显示所有产品
onMounted(() => {
  filterProducts()
})
</script>

<template>
  <MainLayout>
    <!-- 页面标题 -->
    <section class="relative overflow-hidden from-blue-900 to-blue-800 bg-gradient-to-r py-12 text-white md:py-20">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0 bg-repeat" style="background-image: url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E');" />
      </div>
      <div class="relative z-10 mx-auto max-w-7xl px-4">
        <div class="text-center">
          <h1 class="mb-4 text-4xl font-bold md:text-5xl">
            产品中心
          </h1>
          <p class="mx-auto max-w-3xl text-lg opacity-90 md:text-xl">
            我们提供多种类型的优质食材，满足学校食堂等机构客户的多样化需求
          </p>
        </div>
      </div>
      <!-- 波浪分隔符 -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" class="h-auto w-full">
          <path fill="#F9FAFB" fill-opacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
        </svg>
      </div>
    </section>

    <!-- 产品筛选和展示 -->
    <section class="px-4 py-12">
      <div class="mx-auto max-w-7xl">
        <!-- 筛选区域 -->
        <div class="mb-8 rounded-xl bg-white p-6 shadow-md">
          <h2 class="mb-4 text-xl text-blue-900 font-bold">
            产品筛选
          </h2>
          <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div>
              <label class="mb-2 block text-sm text-gray-700 font-medium">产品分类</label>
              <Select
                v-model="selectedCategory"
                :options="categories"
                placeholder="选择产品分类"
                class="w-full"
                @change="filterProducts"
              />
            </div>

            <div>
              <label class="mb-2 block text-sm text-gray-700 font-medium">搜索</label>
              <div class="relative">
                <InputText
                  v-model="searchQuery"
                  placeholder="输入产品名称或关键词"
                  class="w-full pl-10"
                  @input="filterProducts"
                />
              </div>
            </div>
          </div>
          <div class="mt-4 flex justify-end">
            <Button label="重置筛选" icon="pi pi-refresh" outlined class="mr-2" @click="resetFilters" />
            <Button label="应用筛选" icon="pi pi-filter" class="border-blue-900 bg-blue-900" @click="filterProducts" />
          </div>
        </div>

        <!-- 产品展示 -->
        <div v-if="filteredProducts.length > 0">
          <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
            <div
              v-for="product in filteredProducts"
              :key="product.id"
              class="overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-lg"
            >
              <div class="relative">
                <img :src="product.image" :alt="product.name" class="h-48 w-full object-cover">
                <div class="absolute right-0 top-0 m-2">
                  <span class="rounded-full bg-sky-500 px-2 py-1 text-xs text-white font-bold">
                    {{ product.category }}
                  </span>
                </div>
              </div>
              <div class="p-6">
                <h3 class="mb-2 text-xl text-blue-900 font-bold">
                  {{ product.name }}
                </h3>
                <p class="mb-4 text-gray-600">
                  {{ product.description }}
                </p>
                <div class="mb-4 flex flex-wrap gap-2">
                  <span
                    v-for="(tag, index) in product.tags"
                    :key="index"
                    class="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600"
                  >
                    {{ tag }}
                  </span>
                </div>
                <div class="flex items-center justify-between">
                  <Button
                    label="查看详情"
                    icon="pi pi-eye"
                    class="border-blue-900 bg-blue-900"
                    @click="$router.push(`/details/${product.id}`)"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- 分页 -->
          <div class="mt-8 flex justify-center">
            <Paginator
              v-model:first="first"
              :rows="rows"
              :total-records="totalProducts"
              :rows-per-page-options="[9, 18, 27]"
              @page="onPageChange($event)"
            />
          </div>
        </div>

        <!-- 无结果提示 -->
        <div v-else class="py-16 text-center">
          <i class="pi pi-search mb-4 text-6xl text-gray-300" />
          <h3 class="mb-2 text-xl text-gray-700 font-bold">
            未找到匹配的产品
          </h3>
          <p class="mb-4 text-gray-500">
            请尝试调整筛选条件或搜索关键词
          </p>
          <Button label="重置筛选" icon="pi pi-refresh" @click="resetFilters" />
        </div>
      </div>
    </section>
  </MainLayout>
</template>

<style scoped>
/* 自定义样式 */
:deep(.p-menubar) {
  padding: 0.75rem 1rem;
  background: transparent;
}

:deep(.p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight) {
  background-color: #e0f2fe;
  color: #0284c7;
}

:deep(.p-multiselect-panel .p-multiselect-items .p-multiselect-item.p-highlight) {
  background-color: #e0f2fe;
  color: #0284c7;
}

:deep(.p-paginator .p-paginator-pages .p-paginator-page.p-highlight) {
  background-color: #0ea5e9;
  color: #ffffff;
}

:deep(.p-dialog .p-dialog-header) {
  background-color: #1e3a8a;
  color: #ffffff;
  padding: 1rem;
}

:deep(.p-dialog .p-dialog-content) {
  padding: 0;
}

:deep(.p-dialog .p-dialog-footer) {
  padding: 1rem;
  border-top: 1px solid #e5e7eb;
}
</style>
