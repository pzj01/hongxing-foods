<script setup lang="ts">
import type { Category, Product } from '~/types'
import { products } from '~/data/products'

// 核心服务数据
interface Service {
  icon: string
  title: string
  description: string
  features: string[]
  gradientClass: string
}

const services = ref<Service[]>([
  {
    icon: 'pi pi-truck',
    title: '食材配送',
    description: '专业的冷链物流配送，确保食材新鲜送达，满足学校食堂等机构的大批量需求。',
    features: ['全程冷链运输', '定时配送', '专业配送团队', '配送范围广'],
    gradientClass: 'from-blue-900 to-blue-800',
  },
  {
    icon: 'pi pi-shield',
    title: '质量保障',
    description: '严格的食品安全管理体系，从源头把控食材质量，确保每一份食材的安全与健康。',
    features: ['食品安全检测', '源头质量把控', '全程可追溯', '品质保证'],
    gradientClass: 'from-sky-600 to-sky-500',
  },
  {
    icon: 'pi pi-clock',
    title: '准时交付',
    description: '科学的配送路线规划，确保按时交付，让客户无需担忧供应问题。',
    features: ['精准时间管理', '智能路线规划', '应急预案', '准时率高'],
    gradientClass: 'from-blue-900 to-blue-800',
  },
  {
    icon: 'pi pi-users',
    title: '专业服务',
    description: '专业的客户服务团队，提供一站式解决方案，满足客户的个性化需求。',
    features: ['一对一客户经理', '定制化方案', '售后保障', '专业咨询'],
    gradientClass: 'from-sky-600 to-sky-500',
  },
])

const categoryProducts = Object.entries(products.reduce((map, product) => {
  const arr = map[product.category]
  if (arr) {
    arr.push(product)
  }
  else {
    map[product.category] = [product]
  }

  return map
}, {} as Record<Category, Product[]>)).map(([category, products]) => ({
  name: category,
  products: products.slice(0, 3),
}))
const productCategories = ref(categoryProducts)

// 合作流程数据
interface WorkflowStep {
  title: string
  description: string
}

const workflowSteps = ref<WorkflowStep[]>([
  {
    title: '需求沟通',
    description: '了解客户的具体需求，包括食材种类、数量、配送频率等。',
  },
  {
    title: '方案制定',
    description: '根据客户需求，制定个性化的食材供应和配送方案。',
  },
  {
    title: '签订合同',
    description: '确认方案后，签订合作协议，明确双方权责。',
  },
  {
    title: '开始配送',
    description: '按照约定时间和方式，开始提供专业的食材配送服务。',
  },
])

// 客户评价数据
interface Testimonial {
  name: string
  title: string
  content: string
  rating: number
}

const testimonials = ref<Testimonial[]>([
  {
    name: '张校长',
    title: '某中学校长',
    content: '江西宏润配送有限公司的服务非常专业，食材新鲜，配送准时，解决了我们学校食堂的后顾之忧。',
    rating: 5,
  },
  {
    name: '李主任',
    title: '某大学食堂主任',
    content: '与宏润合作多年，他们的服务一直很稳定，食材质量有保障，价格也很合理，是值得信赖的合作伙伴。',
    rating: 5,
  },
  {
    name: '王经理',
    title: '某企业食堂经理',
    content: '宏润配送的服务很贴心，能够根据我们的需求调整配送方案，食材品质也很好，员工反馈很满意。',
    rating: 4,
  },
])

// 轮播图响应式配置
const carouselResponsiveOptions = ref([
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
])
</script>

<template>
  <MainLayout>
    <!-- 英雄区域 -->
    <section class="relative overflow-hidden from-blue-900 to-blue-800 bg-gradient-to-br text-white">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0 bg-repeat" style="background-image: url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E');" />
      </div>
      <div class="relative mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div class="grid items-center gap-8 md:grid-cols-2">
          <div class="space-y-6">
            <h1 class="text-4xl font-bold leading-tight md:text-5xl">
              专业食品供应链<br>
              <span class="text-sky-300">值得信赖的配送服务</span>
            </h1>
            <p class="max-w-lg text-lg opacity-90 md:text-xl">
              江西宏润配送有限公司致力于为学校食堂等机构客户提供高品质的家禽、海鲜、火腿、鸡排等食品，确保每一份食材的新鲜与安全。
            </p>
            <div class="flex flex-wrap gap-4 pt-4">
              <Button
                label="了解我们的服务" icon="pi pi-arrow-right" icon-pos="right"
                class="border-sky-500 bg-sky-500 shadow-lg hover:border-sky-600 hover:bg-sky-600"
                @click="$router.push('/about')"
              />
              <Button
                label="查看产品中心" outlined
                class="border-white text-white hover:bg-white/10"
                @click="$router.push('/products')"
              />
            </div>
          </div>
          <div class="relative hidden md:block">
            <div class="absolute h-64 w-64 rounded-full bg-sky-500 opacity-20 blur-3xl -right-16 -top-16" />
            <!-- <img src="/placeholder.svg?height=400&width=500" alt="食品配送服务" class="relative z-10 rotate-2 transform rounded-lg shadow-2xl transition-transform duration-500 hover:rotate-0"> -->
          </div>
        </div>

        <!-- 统计数字 -->
        <div class="grid grid-cols-2 mt-16 gap-6 border-t border-white/20 py-8 md:grid-cols-4">
          <div class="text-center">
            <div class="text-3xl text-sky-300 font-bold md:text-4xl">
              8+
            </div>
            <div class="mt-2 text-sm opacity-80">
              服务年限
            </div>
          </div>
          <div class="text-center">
            <div class="text-3xl text-sky-300 font-bold md:text-4xl">
              100+
            </div>
            <div class="mt-2 text-sm opacity-80">
              合作客户
            </div>
          </div>
          <div class="text-center">
            <div class="text-3xl text-sky-300 font-bold md:text-4xl">
              50+
            </div>
            <div class="mt-2 text-sm opacity-80">
              配送车辆
            </div>
          </div>
          <div class="text-center">
            <div class="text-3xl text-sky-300 font-bold md:text-4xl">
              1000+
            </div>
            <div class="mt-2 text-sm opacity-80">
              日均配送量
            </div>
          </div>
        </div>
      </div>

      <!-- 波浪分隔符 -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" class="h-auto w-full">
          <path fill="#F9FAFB" fill-opacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
        </svg>
      </div>
    </section>

    <!-- 公司简介 -->
    <section class="bg-gray-50 px-4 py-16">
      <div class="mx-auto max-w-7xl">
        <div class="mb-12 flex flex-col items-center">
          <div class="mb-4 inline-flex items-center justify-center rounded-full bg-sky-100 px-4 py-1 text-sm text-sky-700 font-medium">
            <i class="pi pi-info-circle mr-2" />关于我们
          </div>
          <h2 class="mb-4 text-center text-3xl text-blue-900 font-bold">
            专业的食品供应链服务商
          </h2>
          <div class="mb-6 h-1 w-16 bg-sky-500" />
          <p class="max-w-3xl text-center text-lg text-gray-700">
            江西宏润配送有限公司是一家专业从事食品供应链和配送服务的企业，致力于为学校食堂等机构客户提供高品质的食品。我们拥有完善的冷链物流系统和严格的质量控制标准，确保每一份食材的新鲜与安全。
          </p>
        </div>

        <!-- 特色展示 -->
        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div class="border-t-4 border-blue-900 rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
            <div class="mb-4 h-14 w-14 flex items-center justify-center rounded-lg bg-blue-100">
              <i class="pi pi-shield text-2xl text-blue-900" />
            </div>
            <h3 class="mb-3 text-xl text-blue-900 font-bold">
              品质保障
            </h3>
            <p class="text-gray-600">
              严格的供应商筛选和质量检测流程，确保食材品质符合国家标准，让客户放心使用。
            </p>
          </div>

          <div class="border-t-4 border-sky-500 rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
            <div class="mb-4 h-14 w-14 flex items-center justify-center rounded-lg bg-sky-100">
              <i class="pi pi-truck text-2xl text-sky-600" />
            </div>
            <h3 class="mb-3 text-xl text-blue-900 font-bold">
              专业配送
            </h3>
            <p class="text-gray-600">
              全程冷链物流配送，保持食材新鲜度，确保食品安全，满足客户对食材品质的高要求。
            </p>
          </div>

          <div class="border-t-4 border-blue-900 rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
            <div class="mb-4 h-14 w-14 flex items-center justify-center rounded-lg bg-blue-100">
              <i class="pi pi-clock text-2xl text-blue-900" />
            </div>
            <h3 class="mb-3 text-xl text-blue-900 font-bold">
              准时交付
            </h3>
            <p class="text-gray-600">
              科学的配送路线规划，确保按时交付，让客户无需担忧供应问题，专注于自身业务。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 核心服务 -->
    <section class="bg-white px-4 py-16">
      <div class="mx-auto max-w-7xl">
        <div class="mb-12 flex flex-col items-center">
          <div class="mb-4 inline-flex items-center justify-center rounded-full bg-sky-100 px-4 py-1 text-sm text-sky-700 font-medium">
            <i class="pi pi-star mr-2" />核心服务
          </div>
          <h2 class="mb-4 text-center text-3xl text-blue-900 font-bold">
            我们的服务优势
          </h2>
          <div class="mb-6 h-1 w-16 bg-sky-500" />
        </div>

        <div class="grid grid-cols-1 gap-6 lg:grid-cols-4 md:grid-cols-2">
          <Card
            v-for="(service, index) in services" :key="index"
            class="border-0 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <template #header>
              <div class="bg-gradient-to-br p-6" :class="service.gradientClass">
                <i style="font-size: 1.5rem" class="text-4xl text-white" :class="[service.icon]" />
              </div>
            </template>
            <template #title>
              <h3 class="text-xl text-blue-900 font-bold">
                {{ service.title }}
              </h3>
            </template>
            <template #content>
              <p class="text-gray-600">
                {{ service.description }}
              </p>
              <div class="mt-4 border-t border-gray-100 pt-4">
                <ul class="space-y-2">
                  <li v-for="(feature, i) in service.features" :key="i" class="flex items-start">
                    <i class="pi pi-check-circle mr-2 mt-1 text-sky-500" />
                    <span class="text-sm text-gray-600">{{ feature }}</span>
                  </li>
                </ul>
              </div>
            </template>
          </Card>
        </div>
      </div>
    </section>

    <!-- 产品展示 -->
    <section class="relative overflow-hidden bg-gray-50 px-4 py-16">
      <div class="absolute right-0 top-0 h-96 w-96 translate-x-1/2 rounded-full bg-sky-200 opacity-20 -translate-y-1/2" />
      <div class="absolute bottom-0 left-0 h-96 w-96 translate-y-1/2 rounded-full bg-blue-200 opacity-20 -translate-x-1/2" />

      <div class="relative z-10 mx-auto max-w-7xl">
        <div class="mb-12 flex flex-col items-center">
          <div class="mb-4 inline-flex items-center justify-center rounded-full bg-sky-100 px-4 py-1 text-sm text-sky-700 font-medium">
            <i class="pi pi-shopping-bag mr-2" />产品中心
          </div>
          <h2 class="mb-4 text-center text-3xl text-blue-900 font-bold">
            优质食材供应
          </h2>
          <div class="mb-6 h-1 w-16 bg-sky-500" />
          <p class="max-w-3xl text-center text-lg text-gray-700">
            我们提供多种类型的优质食材，满足学校食堂等机构客户的多样化需求
          </p>
        </div>

        <TabView class="custom-tabview">
          <TabPanel v-for="(category, index) in productCategories" :key="index" :header="category.name">
            <div class="grid grid-cols-1 mt-6 gap-6 md:grid-cols-3">
              <div
                v-for="(product, pIndex) in category.products" :key="pIndex"
                class="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-lg"
              >
                <div class="relative h-48 overflow-hidden">
                  <img :src="product.image" :alt="product.name" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105">
                  <div class="absolute inset-0 flex items-end from-black/60 to-transparent bg-gradient-to-t opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div class="p-4 text-white">
                      <h4 class="font-bold">
                        {{ product.name }}
                      </h4>
                    </div>
                  </div>
                </div>
                <div class="p-4">
                  <h4 class="mb-2 text-lg text-blue-900 font-bold">
                    {{ product.name }}
                  </h4>
                  <p class="mb-3 text-sm text-gray-600">
                    {{ product.description }}
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="(tag, tIndex) in product.tags" :key="tIndex"
                      class="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600"
                    >
                      {{ tag }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
        </TabView>

        <div class="mt-10 text-center">
          <Button
            label="查看更多产品" icon="pi pi-arrow-right" icon-pos="right"
            class="border-blue-900 bg-blue-900 hover:border-blue-800 hover:bg-blue-800"
          />
        </div>
      </div>
    </section>

    <!-- 合作流程 -->
    <section class="bg-white px-4 py-16">
      <div class="mx-auto max-w-7xl">
        <div class="mb-12 flex flex-col items-center">
          <div class="mb-4 inline-flex items-center justify-center rounded-full bg-sky-100 px-4 py-1 text-sm text-sky-700 font-medium">
            <i class="pi pi-sitemap mr-2" />合作流程
          </div>
          <h2 class="mb-4 text-center text-3xl text-blue-900 font-bold">
            简单高效的合作方式
          </h2>
          <div class="mb-6 h-1 w-16 bg-sky-500" />
        </div>

        <div class="relative">
          <!-- 连接线 -->
          <div class="absolute left-0 right-0 top-1/2 hidden h-1 bg-gray-200 md:block -translate-y-1/2" />

          <div class="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div
              v-for="(step, index) in workflowSteps" :key="index"
              class="relative z-10 rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
            >
              <div class="mx-auto mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-blue-900 text-xl text-white font-bold">
                {{ index + 1 }}
              </div>
              <h3 class="mb-3 text-center text-lg text-blue-900 font-bold">
                {{ step.title }}
              </h3>
              <p class="text-center text-gray-600">
                {{ step.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 客户评价 -->
    <section class="bg-gray-50 px-4 py-16">
      <div class="mx-auto max-w-7xl">
        <div class="mb-12 flex flex-col items-center">
          <div class="mb-4 inline-flex items-center justify-center rounded-full bg-sky-100 px-4 py-1 text-sm text-sky-700 font-medium">
            <i class="pi pi-comments mr-2" />客户评价
          </div>
          <h2 class="mb-4 text-center text-3xl text-blue-900 font-bold">
            客户对我们的评价
          </h2>
          <div class="mb-6 h-1 w-16 bg-sky-500" />
        </div>

        <Carousel :value="testimonials" :num-visible="1" :num-scroll="1" :responsive-options="carouselResponsiveOptions" class="testimonial-carousel">
          <template #item="slotProps">
            <div class="p-4">
              <div class="rounded-xl bg-white p-6 shadow-md md:p-8">
                <div class="mb-6 flex items-center">
                  <div class="mr-4 h-12 w-12 flex items-center justify-center rounded-full bg-gray-200 text-xl text-blue-900 font-bold">
                    {{ slotProps.data.name.charAt(0) }}
                  </div>
                  <div>
                    <h4 class="text-blue-900 font-bold">
                      {{ slotProps.data.name }}
                    </h4>
                    <p class="text-sm text-gray-500">
                      {{ slotProps.data.title }}
                    </p>
                  </div>
                  <div class="ml-auto">
                    <i class="pi pi-quote-right text-4xl text-gray-200" />
                  </div>
                </div>
                <p class="mb-4 text-gray-600 italic">
                  {{ slotProps.data.content }}
                </p>
                <div class="flex">
                  <i v-for="n in 5" :key="n" class="pi pi-star-fill" :class="n <= slotProps.data.rating ? 'text-yellow-400' : 'text-gray-300'" />
                </div>
              </div>
            </div>
          </template>
        </Carousel>
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

:deep(.p-card .p-card-content) {
  padding: 1rem;
}

:deep(.p-tabview .p-tabview-nav) {
  justify-content: center;
  border-bottom-color: #e5e7eb;
}

:deep(.p-tabview .p-tabview-nav li .p-tabview-nav-link) {
  color: #1e3a8a;
  border: none;
  border-bottom: 2px solid transparent;
  background: transparent;
}

:deep(.p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link) {
  border-color: #0ea5e9;
  color: #0ea5e9;
}

:deep(.testimonial-carousel .p-carousel-indicators .p-carousel-indicator.p-highlight button) {
  background-color: #0ea5e9;
}

:deep(.p-carousel .p-carousel-indicators .p-carousel-indicator button) {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
</style>
