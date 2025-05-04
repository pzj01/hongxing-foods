<script setup lang="ts">
import { Check, CheckCircle, Search } from 'lucide-vue-next'
import { products } from '~/data/products'
import { CategoryList } from '~/types'

// 路由
const router = useRouter()

// 产品分类
const categories = CategoryList

// 筛选和搜索
const selectedCategory = ref('all')
const searchQuery = ref('')
const sortOption = ref({ name: '默认排序', value: 'default' })

// 排序选项
const sortOptions = [
  { name: '默认排序', value: 'default' },
  { name: '价格从低到高', value: 'price-asc' },
  { name: '价格从高到低', value: 'price-desc' },
]

const first = ref(0)

// 筛选产品
function filterByCategory(categoryId: string) {
  selectedCategory.value = categoryId
  first.value = 0 // 重置分页
}

// 搜索产品
function searchProducts() {
  first.value = 0 // 重置分页
}

// 重置筛选
function resetFilters() {
  selectedCategory.value = 'all'
  searchQuery.value = ''
  sortOption.value = { name: '默认排序', value: 'default' }
  first.value = 0
}

// 排序产品
function sortProducts() {
  first.value = 0 // 重置分页
}

// 筛选后的产品
const filteredProducts = computed(() => {
  let result = [...products]

  // 分类筛选
  if (selectedCategory.value !== 'all') {
    result = result.filter(product => product.category === selectedCategory.value)
  }

  // 搜索筛选
  if (searchQuery.value) {
    const query = searchQuery.value
    result = result.filter(product =>
      product.name.includes(query)
      || product.description.includes(query),
    )
  }

  // 排序
  if (sortOption.value.value === 'price-asc') {
    result.sort((a, b) => {
      if (a.price === null)
        return 1
      if (b.price === null)
        return -1
      return a.price - b.price
    })
  }
  else if (sortOption.value.value === 'price-desc') {
    result.sort((a, b) => {
      if (a.price === null)
        return 1
      if (b.price === null)
        return -1
      return b.price - a.price
    })
  }

  return result
})

// 分页
const itemsPerPage = ref(8)

// 分页后的产品
const paginatedProducts = computed(() => {
  return filteredProducts.value.slice(first.value, first.value + itemsPerPage.value)
})

// 分页事件
function onPageChange(event: any) {
  first.value = event.first
  itemsPerPage.value = event.rows
}

// 推荐产品
const featuredProducts = computed(() => {
  return products.slice(0, 4)
})

// 轮播图响应式配置
const carouselResponsiveOptions = [
  {
    breakpoint: '1024px',
    numVisible: 1,
    numScroll: 1,
  },
  {
    breakpoint: '768px',
    numVisible: 1,
    numScroll: 1,
  },
  {
    breakpoint: '560px',
    numVisible: 1,
    numScroll: 1,
  },
]

// 查看产品详情
function viewProductDetails(productId: number) {
  router.push(`/details/${productId}`)
}

// 批量询价
const showBulkInquiryDialog = ref(false)
const submitting = ref(false)
const showSuccessDialog = ref(false)

const bulkInquiry = reactive({
  company: '',
  contact: '',
  phone: '',
  email: '',
  products: [] as any[],
  quantity: '',
  message: '',
})

function openBulkInquiry() {
  showBulkInquiryDialog.value = true
}

function submitBulkInquiry() {
  // 表单验证
  if (!bulkInquiry.company || !bulkInquiry.contact || !bulkInquiry.phone || bulkInquiry.products.length === 0) {
    // eslint-disable-next-line no-alert
    alert('请填写必填项')
    return
  }

  submitting.value = true

  // 模拟API请求
  setTimeout(() => {
    submitting.value = false
    showBulkInquiryDialog.value = false
    showSuccessDialog.value = true

    // 重置表单
    bulkInquiry.company = ''
    bulkInquiry.contact = ''
    bulkInquiry.phone = ''
    bulkInquiry.email = ''
    bulkInquiry.products = []
    bulkInquiry.quantity = ''
    bulkInquiry.message = ''
  }, 1500)
}

// 联系销售
function contactSales() {
  router.push('/contact')
}
</script>

<template>
  <MainLayout>
    <!-- 页面标题区 -->
    <section class="relative overflow-hidden pb-20 pt-32">
      <div class="absolute inset-0 z-0 from-amber-900/70 to-transparent bg-gradient-to-b" />
      <div class="relative z-10 mx-auto px-6 container">
        <div class="mx-auto max-w-3xl text-center">
          <h1 class="mb-6 text-5xl text-white font-bold leading-tight md:text-6xl">
            产品中心
          </h1>
          <p class="mb-10 text-xl text-white/90">
            探索我们多样化的食品供应，为您的餐桌带来健康与美味
          </p>
        </div>
      </div>
    </section>

    <!-- 产品筛选和搜索 -->
    <section class="relative bg-white py-8 -mt-10">
      <div class="mx-auto px-6 container">
        <div class="rounded-2xl bg-white p-6 shadow-lg">
          <div class="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <!-- 分类筛选 -->
            <div class="flex flex-wrap gap-2">
              <Button
                :class="selectedCategory === 'all' ? 'custom-button' : 'p-button-outlined custom-button-outline'"
                label="全部产品"
                @click="filterByCategory('all')"
              />
              <Button
                v-for="category in categories"
                :key="category"
                :class="selectedCategory === category ? 'custom-button' : 'p-button-outlined custom-button-outline'"
                :label="category"
                @click="filterByCategory(category)"
              />
            </div>

            <!-- 搜索框 -->
            <div class="relative w-full md:w-64">
              <span class="p-input-icon-left w-full">
                <InputText
                  v-model="searchQuery"
                  placeholder="搜索产品"
                  class="custom-input w-full"
                  @input="searchProducts"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 产品展示 -->
    <section class="bg-white py-12">
      <div class="mx-auto px-6 container">
        <!-- 结果统计和排序 -->
        <div class="mb-8 flex flex-col items-center justify-between sm:flex-row">
          <p class="mb-4 text-amber-700 sm:mb-0">
            找到 <span class="font-bold">{{ filteredProducts.length }}</span> 个产品
          </p>

          <div class="flex items-center">
            <label for="sort" class="mr-2 text-amber-700">排序方式:</label>
            <Dropdown
              id="sort"
              v-model="sortOption"
              :options="sortOptions"
              option-label="name"
              placeholder="选择排序方式"
              class="custom-dropdown w-48"
              @change="sortProducts"
            />
          </div>
        </div>

        <!-- 产品网格 -->
        <div v-if="paginatedProducts.length > 0" class="grid grid-cols-1 gap-6 lg:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4">
          <div
            v-for="product in paginatedProducts"
            :key="product.id"
            class="transform overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <!-- 产品图片 -->
            <div class="relative h-64 overflow-hidden">
              <img
                :src="product.image"
                :alt="product.name"
                class="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
              >
            </div>

            <!-- 产品信息 -->
            <div class="p-6">
              <div class="mb-2 flex items-center">
                <span class="rounded-full bg-amber-100 px-2 py-1 text-xs text-amber-800 font-medium">
                  {{ product.category }}
                </span>
              </div>

              <h3 class="mb-2 text-xl text-amber-800 font-bold">
                {{ product.name }}
              </h3>

              <p class="line-clamp-2 mb-4 h-12 text-amber-700">
                {{ product.description }}
              </p>

              <div class="flex items-center justify-between">
                <div class="text-amber-600 font-bold">
                  {{ product.price ? `¥${product.price}/${product.unit}` : '询价' }}
                </div>

                <Button
                  label="查看详情"
                  icon="pi pi-arrow-right"
                  icon-pos="right"
                  class="p-button-rounded custom-button"
                  @click="viewProductDetails(product.id)"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- 无结果提示 -->
        <div v-else class="py-16 text-center">
          <div class="mx-auto mb-4 h-20 w-20 flex items-center justify-center rounded-full bg-amber-100">
            <Search class="h-10 w-10 text-amber-600" />
          </div>
          <h3 class="mb-2 text-2xl text-amber-800 font-bold">
            未找到产品
          </h3>
          <p class="mb-6 text-amber-700">
            抱歉，没有找到符合您搜索条件的产品。请尝试其他关键词或浏览我们的产品分类。
          </p>
          <Button
            label="查看全部产品"
            class="p-button-rounded custom-button"
            @click="resetFilters"
          />
        </div>

        <!-- 分页 -->
        <div v-if="filteredProducts.length > itemsPerPage" class="mt-12 flex justify-center">
          <Paginator
            v-model:first="first"
            :rows="itemsPerPage"
            :total-records="filteredProducts.length"
            :rows-per-page-options="[8, 12, 16, 24]"
            template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
            @page="onPageChange"
          />
        </div>
      </div>
    </section>

    <!-- 推荐产品 -->
    <section class="bg-amber-50 py-16">
      <div class="mx-auto px-6 container">
        <div class="mb-12 text-center">
          <h2 class="relative mb-4 inline-block text-3xl text-amber-800 font-bold md:text-4xl">
            热门推荐
            <span class="absolute left-1/4 h-1 w-1/2 bg-amber-500 -bottom-2" />
          </h2>
          <p class="mx-auto mt-6 max-w-3xl text-xl text-amber-700">
            这些是我们最受欢迎的产品，品质保证，深受客户喜爱
          </p>
        </div>

        <Carousel :value="featuredProducts" :num-visible="1" :num-scroll="1" :responsive-options="carouselResponsiveOptions" class="custom-carousel">
          <template #item="slotProps">
            <div class="p-4">
              <div class="overflow-hidden rounded-2xl bg-white shadow-xl">
                <div class="grid grid-cols-1 md:grid-cols-2">
                  <div class="relative h-full">
                    <img :src="slotProps.data.image" :alt="slotProps.data.name" class="h-full w-full object-cover">
                    <div class="absolute inset-0 from-amber-900/70 to-transparent bg-gradient-to-r md:hidden" />
                  </div>

                  <div class="flex flex-col justify-center p-8 md:p-10">
                    <div class="mb-3 flex items-center">
                      <span class="rounded-full bg-amber-100 px-3 py-1 text-sm text-amber-800 font-medium">
                        {{ slotProps.data.category }}
                      </span>
                    </div>

                    <h3 class="mb-3 text-2xl text-amber-800 font-bold">
                      {{ slotProps.data.name }}
                    </h3>
                    <p class="mb-6 text-amber-700">
                      {{ slotProps.data.description }}
                    </p>

                    <div class="mb-6">
                      <h4 class="mb-3 text-amber-800 font-medium">
                        产品特点：
                      </h4>
                      <div class="space-y-2">
                        <div v-for="(feature, index) in slotProps.data.features" :key="index" class="flex items-start">
                          <div class="mr-3 mt-1 h-5 w-5 flex shrink-0 items-center justify-center rounded-full bg-amber-500">
                            <Check class="h-3 w-3 text-white" />
                          </div>
                          <span class="text-amber-700">{{ feature }}</span>
                        </div>
                      </div>
                    </div>

                    <div class="flex items-center justify-between">
                      <div class="text-xl text-amber-600 font-bold">
                        {{ slotProps.data.price ? `¥${slotProps.data.price}/${slotProps.data.unit}` : '询价' }}
                      </div>

                      <Button
                        label="查看详情"
                        icon="pi pi-arrow-right"
                        icon-pos="right"
                        class="p-button-rounded custom-button"
                        @click="viewProductDetails(slotProps.data.id)"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </Carousel>
      </div>
    </section>

    <!-- 批量询价 -->
    <section class="bg-white py-16">
      <div class="mx-auto px-6 container">
        <div class="relative overflow-hidden rounded-3xl from-amber-500 to-amber-700 bg-gradient-to-r p-12 text-center">
          <div class="absolute right-0 top-0 h-64 w-64 translate-x-1/3 transform rounded-full bg-white/10 -translate-y-1/3" />
          <div class="absolute bottom-0 left-0 h-48 w-48 translate-y-1/3 transform rounded-full bg-white/10 -translate-x-1/3" />

          <div class="relative z-10">
            <h2 class="mb-6 text-3xl text-white font-bold md:text-4xl">
              需要批量采购？
            </h2>
            <p class="mx-auto mb-8 max-w-2xl text-xl text-white/90">
              我们提供专业的批量采购服务，为学校食堂、企事业单位提供定制化的食品供应解决方案
            </p>
            <div class="flex flex-wrap justify-center gap-4">
              <Button
                label="批量询价"
                icon="pi pi-file-excel"
                class="p-button-rounded p-button-lg border-white bg-white text-amber-600 hover:bg-white/90"
                @click="openBulkInquiry"
              />
              <Button
                label="联系销售"
                icon="pi pi-phone"
                class="p-button-rounded p-button-lg p-button-outlined border-white text-white hover:bg-white/10"
                @click="contactSales"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 页脚组件 (假设已经存在) -->
    <Footer />

    <!-- 批量询价对话框 -->
    <Dialog v-model:visible="showBulkInquiryDialog" modal header="批量询价" :style="{ width: '90%', maxWidth: '600px' }">
      <div class="p-4">
        <p class="mb-6 text-amber-700">
          请填写以下表单，我们的销售团队将尽快与您联系，为您提供定制化的报价方案。
        </p>

        <form class="space-y-4" @submit.prevent="submitBulkInquiry">
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div class="p-field">
              <label for="company" class="mb-2 block text-amber-800 font-medium">单位名称 <span class="text-red-500">*</span></label>
              <InputText id="company" v-model="bulkInquiry.company" class="custom-input w-full" />
            </div>

            <div class="p-field">
              <label for="contact" class="mb-2 block text-amber-800 font-medium">联系人 <span class="text-red-500">*</span></label>
              <InputText id="contact" v-model="bulkInquiry.contact" class="custom-input w-full" />
            </div>
          </div>

          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div class="p-field">
              <label for="phone" class="mb-2 block text-amber-800 font-medium">联系电话 <span class="text-red-500">*</span></label>
              <InputText id="phone" v-model="bulkInquiry.phone" class="custom-input w-full" />
            </div>

            <div class="p-field">
              <label for="email" class="mb-2 block text-amber-800 font-medium">电子邮箱</label>
              <InputText id="email" v-model="bulkInquiry.email" class="custom-input w-full" />
            </div>
          </div>

          <div class="p-field">
            <label for="products" class="mb-2 block text-amber-800 font-medium">感兴趣的产品 <span class="text-red-500">*</span></label>
            <MultiSelect
              id="products"
              v-model="bulkInquiry.products"
              :options="products"
              option-label="name"
              placeholder="选择产品"
              class="custom-multiselect w-full"
              display="chip"
            />
          </div>

          <div class="p-field">
            <label for="quantity" class="mb-2 block text-amber-800 font-medium">预计采购量</label>
            <InputText id="quantity" v-model="bulkInquiry.quantity" class="custom-input w-full" placeholder="例如：每月约500kg" />
          </div>

          <div class="p-field">
            <label for="message" class="mb-2 block text-amber-800 font-medium">其他需求</label>
            <Textarea id="message" v-model="bulkInquiry.message" rows="3" class="custom-textarea w-full" />
          </div>

          <div class="flex justify-end gap-3">
            <Button
              type="button"
              label="取消"
              class="p-button-rounded p-button-outlined custom-button-outline"
              @click="showBulkInquiryDialog = false"
            />
            <Button
              type="submit"
              label="提交询价"
              icon="pi pi-send"
              class="p-button-rounded custom-button"
              :loading="submitting"
            />
          </div>
        </form>
      </div>
    </Dialog>

    <!-- 提交成功对话框 -->
    <Dialog v-model:visible="showSuccessDialog" modal header="提交成功" :style="{ width: '90%', maxWidth: '400px' }">
      <div class="p-4 text-center">
        <div class="mx-auto mb-4 h-16 w-16 flex items-center justify-center rounded-full bg-green-100">
          <CheckCircle class="h-8 w-8 text-green-600" />
        </div>
        <h3 class="mb-2 text-xl text-amber-800 font-bold">
          询价已提交
        </h3>
        <p class="mb-4 text-amber-700">
          感谢您的询价，我们的销售团队将在1-2个工作日内与您联系！
        </p>
        <Button label="确定" class="p-button-rounded custom-button" @click="showSuccessDialog = false" />
      </div>
    </Dialog>
  </MainLayout>
</template>

<style scoped>
/* 自定义PrimeVue组件样式 */
:deep(.p-dropdown.p-component) {
  width: 100%;
}

:deep(.p-paginator) {
  background-color: transparent;
}

:deep(.p-paginator .p-paginator-pages .p-paginator-page.p-highlight) {
  background-color: #d97706;
  color: white;
}

:deep(.p-carousel .p-carousel-indicators .p-carousel-indicator.p-highlight button) {
  background-color: #d97706;
}

:deep(.p-dialog-header) {
  background-color: #d97706;
  color: white;
}

:deep(.p-dialog-header-close) {
  color: white;
}

:deep(.p-multiselect-token) {
  background-color: #fef3c7;
  color: #92400e;
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

/* 自定义输入框 */
.custom-input:focus {
  border-color: #d97706 !important;
  box-shadow: 0 0 0 1px #d97706 !important;
}

.custom-textarea:focus {
  border-color: #d97706 !important;
  box-shadow: 0 0 0 1px #d97706 !important;
}

.custom-dropdown:focus {
  border-color: #d97706 !important;
  box-shadow: 0 0 0 1px #d97706 !important;
}

.custom-multiselect:focus {
  border-color: #d97706 !important;
  box-shadow: 0 0 0 1px #d97706 !important;
}

/* 行高限制 */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
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
