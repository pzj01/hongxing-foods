<script setup lang="ts">
import { Check, ChevronDown, Clock, Mail, MapPin, Phone } from 'lucide-vue-next'

// 服务展示
const services = [
  {
    title: '预包装食品',
    image: '/Pre-packagedFood.jpg',
    description: '提供各类优质预包装食品，确保食品安全与新鲜度，方便学校食堂快速供应。',
  },
  {
    title: '散装食品',
    image: '/BulkFood.jpg',
    description: '多种散装食品供应，可根据客户需求定制采购方案，满足大型食堂的批量需求。',
  },
  {
    title: '乳制品',
    image: '/DairyProducts.jpg',
    description: '新鲜乳制品配送，严格控制冷链运输，保证学生饮用奶及其他乳制品的品质。',
  },
  {
    title: '冷冻存储服务',
    image: '/IceCube.jpg',
    description: '专业冷冻存储设施，为客户提供食材的临时或长期存储解决方案，确保食材新鲜度。',
  },
  {
    title: '水产品',
    image: 'AquaticProducts.jpg',
    description: '新鲜水产品供应，从源头把控品质，提供多种海鲜和淡水鱼类，满足不同烹饪需求。',
  },
  {
    title: '肉类批发',
    image: '/meat.jpg',
    description: '优质肉类批发服务，提供猪肉、牛肉、禽类等多种选择，可按需定制分割和包装。',
  },
]

const activeService = ref<number | null>(null)

// 学校食堂特点
const schoolFeatures = [
  '定制化的食材配送方案，满足不同规模学校的需求',
  '严格的食品安全标准，确保学生饮食健康',
  '准时配送，保证食堂正常运转',
  '多样化的食材选择，满足不同年龄段学生的营养需求',
]

// 统计数据
const stats = [
  { value: '10+', label: '年行业经验' },
  { value: '50+', label: '合作学校' },
  { value: '1000+', label: '食品种类' },
  { value: '100%', label: '食品安全保障' },
]

// 案例数据
const cases = [
  {
    name: '萍乡中学食堂食材配送服务项目',
    type: '学校食堂',
    image: '/placeholder.svg?height=500&width=600',
    description: '为萍乡中学提供全方位的食堂食材配送服务，包括肉类、蔬菜、水产品等。',
    services: ['肉类批发', '水产品', '预包装食品', '乳制品'],
  },
  {
    name: '湘东中学食堂食材供应采购项目',
    type: '学校食堂',
    image: '/placeholder.svg?height=500&width=600',
    description: '为湘东中学食堂提供散装食品、乳制品和冷冻存储服务，满足不同规模学校的需求。',
    services: ['散装食品', '乳制品', '冷冻存储'],
  },
  {
    name: '萍钢小学食堂食材供应采购项目',
    type: '学校食堂',
    image: '/placeholder.svg?height=500&width=600',
    description: '为萍钢小学食堂提供肉类、冻品、水产品等食材供应和采购服务，满足不同规模学校的需求。',
    services: ['肉类批发', '水产品', '冷冻存储'],
  },
  {
    name: '学院食堂2024年禽类定点供应商采购项目',
    type: '学校食堂',
    image: '/placeholder.svg?height=500&width=600',
    description: '为学院食堂2024年禽类定点供应商提供肉类、水产品等食材供应和采购服务，满足不同规模学校的需求。',
    services: ['肉类批发', '水产品'],
  },
  {
    name: '学院食堂2024年冷冻类定点供应商采购项目',
    type: '学校食堂',
    image: '/placeholder.svg?height=500&width=600',
    description: '为学院食堂2024年冷冻类定点供应商提供冷冻存储服务，满足不同规模学校的需求。',
    services: ['冷冻存储'],
  },
]

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

// 联系表单
const contactForm = reactive({
  name: '',
  phone: '',
  email: '',
  subject: null,
  message: '',
})

// 主题选项
const subjectOptions = [
  { name: '产品咨询', code: 'product' },
  { name: '配送服务', code: 'delivery' },
  { name: '合作洽谈', code: 'cooperation' },
  { name: '投诉建议', code: 'feedback' },
  { name: '其他', code: 'other' },
]

// 滚动到指定区域
function scrollToServices() {
  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <MainLayout>
    <!-- 英雄区 -->
    <section class="relative min-h-screen flex items-center pt-20">
      <div class="absolute inset-0 z-0 from-amber-900/70 to-transparent bg-gradient-to-b" />

      <div class="relative z-10 mx-auto px-6 py-20 container">
        <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div class="order-2 lg:order-1">
            <div class="relative">
              <h1 class="hero-text mb-6 text-5xl text-white font-bold leading-tight md:text-7xl">
                <span class="block translate-y-0 transform opacity-100 transition-all duration-700 delay-300">新鲜食材</span>
                <span class="block translate-y-0 transform opacity-100 transition-all duration-700 delay-500">优质配送</span>
                <span class="block translate-y-0 transform text-amber-300 opacity-100 transition-all duration-700 delay-700">安全保障</span>
              </h1>

              <p class="mb-10 max-w-xl translate-y-0 transform text-xl text-white/90 opacity-100 transition-all duration-700 delay-900">
                萍乡市安源区宏星食品经营部，专注于为学校食堂及企事业单位提供优质食材配送服务，
                确保每一餐都新鲜、健康、安全。
              </p>

              <div class="flex flex-wrap translate-y-0 transform gap-4 opacity-100 transition-all duration-700 delay-1000">
                <Button
                  label="了解我们的服务"
                  class="p-button-rounded custom-button-large"
                  @click="scrollToServices"
                />
                <Button
                  label="联系我们"
                  class="p-button-rounded p-button-outlined custom-button-outline-large"
                  @click="$router.push('/contact')"
                />
              </div>
            </div>
          </div>

          <div class="relative order-1 lg:order-2">
            <div class="relative z-10 translate-y-0 transform opacity-100 transition-all duration-1000 delay-500">
              <div class="relative">
                <img src="/commodity.png" alt="食品展示" class="h-auto w-full rounded-full shadow-2xl">
                <div class="absolute h-32 w-32 flex rotate-12 transform items-center justify-center rounded-full bg-amber-400 shadow-lg -right-10 -top-10">
                  <span class="text-xl text-white font-bold">优质</span>
                </div>

                <div class="absolute h-24 w-24 flex items-center justify-center rounded-full bg-amber-600 shadow-lg -bottom-5 -left-5">
                  <span class="text-lg text-white font-bold">新鲜</span>
                </div>
              </div>
            </div>

            <div class="animate-spin-slow absolute left-1/2 top-1/2 h-[120%] w-[120%] transform border-4 border-amber-300/30 rounded-full border-dashed -z-10 -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
      </div>

      <div class="absolute bottom-10 left-1/2 z-10 transform animate-bounce -translate-x-1/2">
        <a href="#services" class="text-white/70 transition-colors hover:text-white">
          <ChevronDown class="h-10 w-10" />
        </a>
      </div>
    </section>

    <!-- 我们的服务 -->
    <section id="services" class="relative py-20">
      <div class="mx-auto px-6 container">
        <div class="mb-16 text-center">
          <h2 class="relative mb-4 inline-block text-4xl text-amber-800 font-bold md:text-5xl">
            我们的服务
            <span class="absolute left-0 h-1 w-full bg-amber-500 -bottom-3" />
          </h2>
          <p class="mx-auto mt-6 max-w-2xl text-xl text-amber-700">
            提供多样化的食品供应和专业的配送服务，满足各类客户的不同需求
          </p>
        </div>

        <div class="grid grid-cols-1 gap-10 lg:grid-cols-3 md:grid-cols-2">
          <div
            v-for="(service, index) in services" :key="index"
            class="group relative"
            @mouseenter="activeService = index"
            @mouseleave="activeService = null"
          >
            <div
              class="relative aspect-[4/5] transform overflow-hidden rounded-2xl transition-transform duration-500"
              :class="{ 'scale-95': activeService !== index && activeService !== null }"
            >
              <img :src="service.image" :alt="service.title" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110">
              <div class="absolute inset-0 from-amber-900 to-transparent bg-gradient-to-t opacity-80" />

              <div class="absolute inset-0 flex flex-col justify-end p-8">
                <h3 class="mb-3 transform text-2xl text-white font-bold transition-transform duration-500 group-hover:-translate-y-2">
                  {{ service.title }}
                </h3>
                <p class="max-h-0 transform overflow-hidden text-white/80 transition-all duration-500 group-hover:max-h-40">
                  {{ service.description }}
                </p>
                <Button
                  label="了解更多"
                  class="p-button-rounded p-button-text custom-button-text mt-4 translate-y-4 transform self-start opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                  icon="pi pi-arrow-right"
                  icon-pos="right"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="relative mt-20">
          <div class="absolute inset-0 transform rounded-3xl bg-amber-50 -rotate-1" />
          <div class="relative overflow-hidden rounded-3xl bg-amber-100 p-10 md:p-16">
            <div class="absolute right-0 top-0 h-full w-1/3">
              <div class="absolute right-0 top-0 h-full w-full translate-x-1/3 transform rounded-l-full bg-amber-300/30" />
            </div>

            <div class="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
              <div>
                <h3 class="mb-6 text-3xl text-amber-800 font-bold">
                  学校食堂配送服务
                </h3>
                <p class="mb-6 text-lg text-amber-700">
                  我们专为学校食堂提供一站式食材配送服务，从采购到配送，全程把控质量，确保学生吃上安全、营养、新鲜的饭菜。
                </p>
                <ul class="mb-8 space-y-4">
                  <li v-for="(feature, index) in schoolFeatures" :key="index" class="flex items-start">
                    <div class="mr-3 mt-1 h-6 w-6 flex shrink-0 items-center justify-center rounded-full bg-amber-500">
                      <Check class="h-4 w-4 text-white" />
                    </div>
                    <span class="text-amber-700">{{ feature }}</span>
                  </li>
                </ul>
                <Button
                  label="了解学校配送方案"
                  class="p-button-rounded custom-button"
                />
              </div>

              <div class="relative">
                <img src="/company.png" alt="学校食堂配送" class="h-auto w-full rounded-2xl shadow-xl">
                <div class="absolute h-32 w-32 flex flex-col items-center justify-center rounded-lg bg-white p-4 shadow-lg -bottom-6 -left-6">
                  <span class="text-3xl text-amber-500 font-bold">50+</span>
                  <span class="text-sm text-amber-800">合作学校</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 关于我们 -->
    <section id="about" class="relative py-20">
      <div class="absolute inset-0 z-0 skew-y-3 bg-amber-900/5" />

      <div class="relative z-10 mx-auto px-6 container">
        <div class="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div class="relative">
            <div class="relative z-10">
              <img src="/hongxing-cold.png" alt="关于宏星食品" class="h-auto w-full rounded-2xl shadow-xl">
            </div>

            <div class="absolute left-0 top-1/2 h-1/2 w-1/2 transform -translate-x-1/4 -translate-y-1/2">
              <div class="h-full w-full animate-pulse rounded-full bg-amber-300 opacity-20" />
            </div>

            <div class="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 transform">
              <div class="h-32 w-32 animate-pulse rounded-full bg-amber-500 opacity-20 delay-700" />
            </div>
          </div>

          <div>
            <h2 class="relative mb-6 inline-block text-4xl text-amber-800 font-bold md:text-5xl">
              关于宏星食品
              <span class="absolute left-0 h-1 w-1/2 bg-amber-500 -bottom-3" />
            </h2>

            <p class="mb-6 text-lg text-amber-700">
              萍乡市安源区宏星食品经营部成立于2013年，是一家专注于食品供应链服务的企业。多年来，我们致力于为学校、企事业单位等提供优质的食材配送服务。
            </p>

            <p class="mb-6 text-lg text-amber-700">
              我们拥有完善的冷链物流系统和严格的质量控制流程，确保每一份食材从采购到配送都保持最佳状态。我们的团队由经验丰富的食品专家和物流人员组成，为客户提供专业、高效的服务。
            </p>

            <div class="grid grid-cols-2 mb-8 gap-6">
              <div v-for="(stat, index) in stats" :key="index" class="transform rounded-xl bg-white p-6 shadow-md transition-transform hover:scale-105">
                <div class="mb-2 text-3xl text-amber-500 font-bold">
                  {{ stat.value }}
                </div>
                <div class="text-amber-700">
                  {{ stat.label }}
                </div>
              </div>
            </div>

            <Button
              label="了解更多"
              icon="pi pi-info-circle"
              class="p-button-rounded custom-button mr-4"
              @click="$router.push('/about')"
            />

            <Button
              label="我们的团队"
              icon="pi pi-users"
              class="p-button-rounded p-button-outlined custom-button-outline"
              @click="$router.push('/about#team')"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- 客户案例 -->
    <section id="cases" class="relative py-20">
      <div class="mx-auto px-6 container">
        <div class="mb-16 text-center">
          <h2 class="relative mb-4 inline-block text-4xl text-amber-800 font-bold md:text-5xl">
            业绩
            <span class="absolute left-0 h-1 w-full bg-amber-500 -bottom-3" />
          </h2>
          <p class="mx-auto mt-6 max-w-2xl text-xl text-amber-700">
            我们为众多学校和企事业单位提供了优质的食材配送服务，赢得了客户的一致好评
          </p>
        </div>

        <div class="relative">
          <Carousel :value="cases" :num-visible="1" :num-scroll="1" :responsive-options="carouselResponsiveOptions" class="custom-carousel">
            <template #item="slotProps">
              <div class="p-4">
                <div class="overflow-hidden rounded-2xl bg-white shadow-xl">
                  <div class="grid">
                    <div class="relative h-full">
                      <!-- <img :src="slotProps.data.image" :alt="slotProps.data.name" class="h-full w-full object-cover"> -->
                      <div class="absolute inset-0 from-amber-900/70 to-transparent bg-gradient-to-r md:hidden" />
                    </div>

                    <div class="flex flex-col justify-center p-8 md:p-10">
                      <h3 class="mb-2 text-2xl text-amber-800 font-bold">
                        {{ slotProps.data.name }}
                      </h3>
                      <p class="mb-6 text-amber-600">
                        {{ slotProps.data.type }}
                      </p>
                      <p class="mb-6 text-amber-700">
                        {{ slotProps.data.description }}
                      </p>

                      <div>
                        <h4 class="mb-3 text-amber-800 font-medium">
                          服务内容：
                        </h4>
                        <div class="flex flex-wrap gap-2">
                          <Chip v-for="(service, index) in slotProps.data.services" :key="index" :label="service" class="custom-chip" />
                        </div>
                      </div>

                      <Button
                        label="查看详情"
                        icon="pi pi-external-link"
                        class="p-button-text custom-button-text mt-8 self-start"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </Carousel>
        </div>
      </div>
    </section>

    <!-- 联系我们 -->
    <section id="contact" class="relative py-20">
      <div class="absolute inset-0 z-0 bg-amber-900/10 -skew-y-3" />

      <div class="relative z-10 mx-auto px-6 container">
        <div class="mb-16 text-center">
          <h2 class="relative mb-4 inline-block text-4xl text-amber-800 font-bold md:text-5xl">
            联系我们
            <span class="absolute left-0 h-1 w-full bg-amber-500 -bottom-3" />
          </h2>
          <p class="mx-auto mt-6 max-w-2xl text-xl text-amber-700">
            如果您对我们的产品和服务有任何疑问，或者想要了解更多信息，请随时联系我们
          </p>
        </div>

        <div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div class="order-2 rounded-2xl bg-white p-8 shadow-xl lg:order-1 md:p-10">
            <h3 class="mb-6 text-2xl text-amber-800 font-bold">
              发送消息
            </h3>
            <form class="space-y-6">
              <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div class="p-field">
                  <label for="name" class="mb-2 block text-amber-800 font-medium">姓名</label>
                  <InputText id="name" v-model="contactForm.name" class="custom-input w-full" />
                </div>
                <div class="p-field">
                  <label for="phone" class="mb-2 block text-amber-800 font-medium">电话</label>
                  <InputText id="phone" v-model="contactForm.phone" class="custom-input w-full" />
                </div>
              </div>
              <div class="p-field">
                <label for="email" class="mb-2 block text-amber-800 font-medium">邮箱</label>
                <InputText id="email" v-model="contactForm.email" class="custom-input w-full" />
              </div>
              <div class="p-field">
                <label for="subject" class="mb-2 block text-amber-800 font-medium">主题</label>
                <Dropdown id="subject" v-model="contactForm.subject" :options="subjectOptions" option-label="name" placeholder="选择主题" class="custom-dropdown w-full" />
              </div>
              <div class="p-field">
                <label for="message" class="mb-2 block text-amber-800 font-medium">消息</label>
                <Textarea id="message" v-model="contactForm.message" rows="5" class="custom-textarea w-full" />
              </div>
              <Button label="发送消息" icon="pi pi-send" class="p-button-rounded custom-button w-full" />
            </form>
          </div>

          <div class="order-1 lg:order-2">
            <div class="mb-8 rounded-2xl bg-white p-8 shadow-xl md:p-10">
              <h3 class="mb-6 text-2xl text-amber-800 font-bold">
                联系方式
              </h3>
              <div class="space-y-6">
                <div class="flex items-start">
                  <div class="mr-4 h-12 w-12 flex shrink-0 items-center justify-center rounded-full bg-amber-100">
                    <MapPin class="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 class="mb-1 text-lg text-amber-800 font-semibold">
                      地址
                    </h4>
                    <p class="text-amber-700">
                      萍乡市安源区城南宝塔路45号
                    </p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="mr-4 h-12 w-12 flex shrink-0 items-center justify-center rounded-full bg-amber-100">
                    <Phone class="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 class="mb-1 text-lg text-amber-800 font-semibold">
                      电话
                    </h4>
                    <p class="text-amber-700">
                      0799-XXXXXXXX
                    </p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="mr-4 h-12 w-12 flex shrink-0 items-center justify-center rounded-full bg-amber-100">
                    <Mail class="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 class="mb-1 text-lg text-amber-800 font-semibold">
                      邮箱
                    </h4>
                    <p class="text-amber-700">
                      contact@hongxingfood.com
                    </p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="mr-4 h-12 w-12 flex shrink-0 items-center justify-center rounded-full bg-amber-100">
                    <Clock class="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 class="mb-1 text-lg text-amber-800 font-semibold">
                      营业时间
                    </h4>
                    <p class="text-amber-700">
                      周一至周五: 8:00 - 18:00
                    </p>
                    <p class="text-amber-700">
                      周六: 9:00 - 16:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="rounded-2xl bg-amber-50 p-8 md:p-10">
              <h3 class="mb-6 text-2xl text-amber-800 font-bold">
                关注我们
              </h3>
              <p class="mb-6 text-amber-700">
                关注我们的社交媒体，获取最新的产品信息和促销活动
              </p>
              <div class="flex space-x-4">
                <a href="#" class="h-12 w-12 flex items-center justify-center rounded-full bg-white shadow-md transition-colors hover:bg-amber-100">
                  <i class="pi pi-twitter text-xl text-amber-600" />
                </a>
                <a href="#" class="h-12 w-12 flex items-center justify-center rounded-full bg-white shadow-md transition-colors hover:bg-amber-100">
                  <i class="pi pi-instagram text-xl text-amber-600" />
                </a>
                <a href="#" class="h-12 w-12 flex items-center justify-center rounded-full bg-white shadow-md transition-colors hover:bg-amber-100">
                  <i class="pi pi-tiktok text-xl text-amber-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </MainLayout>
</template>

<style>
/* 自定义PrimeVue组件样式 */
:root {
  --primary-color: #d97706;
  --primary-color-text: #ffffff;
  --surface-ground: #fffbeb;
  --surface-section: #fef3c7;
  --surface-card: #ffffff;
  --surface-overlay: #ffffff;
  --surface-border: #f59e0b;
  --text-color: #92400e;
  --text-color-secondary: #b45309;
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

.custom-button-large {
  background-color: #d97706 !important;
  border-color: #d97706 !important;
  font-size: 1.1rem !important;
  padding: 0.75rem 1.5rem !important;
}

.custom-button-outline {
  color: #d97706 !important;
  border-color: #d97706 !important;
}

.custom-button-outline:hover {
  background-color: rgba(217, 119, 6, 0.1) !important;
}

.custom-button-outline-large {
  color: #ffffff !important;
  border-color: #ffffff !important;
  font-size: 1.1rem !important;
  padding: 0.75rem 1.5rem !important;
}

.custom-button-text {
  color: #d97706 !important;
}

.custom-button-text:hover {
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

/* 自定义轮播图 */
.custom-carousel .p-carousel-indicators .p-carousel-indicator.p-highlight button {
  background-color: #d97706 !important;
}

/* 自定义芯片 */
.custom-chip {
  background-color: #fef3c7 !important;
  color: #92400e !important;
}

/* 自定义侧边栏 */
.custom-sidebar .p-sidebar-header {
  display: none;
}

/* 动画 */
@keyframes spin-slow {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 30s linear infinite;
}

.hero-text span {
  display: block;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.7s ease;
}

.hero-text span.show {
  opacity: 1;
  transform: translateY(0);
}

/* 响应式调整 */
@media (max-width: 768px) {
  .hero-text {
    font-size: 2.5rem;
  }
}
</style>
