<script setup lang="ts">
import { Building, Calendar, Eye, FileText, Heart, MapPin, RefreshCw, Target, Users } from 'lucide-vue-next'

// 证书翻转状态
const flippedCards = ref<boolean[]>([])
const certificates = [
  {
    name: '食品经营许可证',
    shortDesc: '合法经营食品的基本资质证书',
    image: '/certificates/食品许可.png',
    issueDate: '2024-03-16',
    issuedBy: '萍乡市市场监督管理局',
    description: '证明企业符合食品安全法规定的经营条件，可以从事食品经营活动。',
  },
  {
    name: 'ISO9001质量管理体系认证',
    shortDesc: '国际标准化组织质量管理体系认证',
    image: '/certificates/质量管理.png',
    issueDate: '2024-12-30',
    issuedBy: '北京贯通检验认证有限公司',
    description: '证明企业的质量管理体系符合ISO9001标准，能够持续提供满足顾客要求的产品和服务。',
  },
  {
    name: '环境管理体系认证',
    shortDesc: '环境管理体系认证',
    image: '/certificates/环境管理.png',
    issueDate: '2024-12-30',
    issuedBy: '北京贯通检验认证有限公司',
    description: '证明企业的环境管理体系符合ISO14001标准，能够持续提供满足顾客要求的产品和服务。',
  },
  {
    name: '职业健康和安全管理体系认证',
    shortDesc: '职业健康和安全管理体系认证',
    image: '/certificates/职业健康.png',
    issueDate: '2024-12-30',
    issuedBy: '北京贯通检验认证有限公司',
    description: '证明企业的职业健康和安全管理体系符合ISO45001标准，能够持续提供满足顾客要求的产品和服务。',
  },
  {
    name: '营业执照',
    shortDesc: '法人营业执照',
    image: '/certificates/营业执照.png',
    issueDate: '2013-11-11',
    issuedBy: '萍乡市市场监督管理局',
    description: '证明企业合法经营，符合法律法规。',
  },
]

// 初始化翻转状态
for (let i = 0; i < certificates.length; i++) {
  flippedCards.value.push(false)
}

// 翻转卡片
function toggleCard(index: number) {
  flippedCards.value[index] = !flippedCards.value[index]
}

// 证书详情对话框
const dialogVisible = ref(false)
const selectedCertificate = ref<any>(null)

function showCertificateDialog(certificate: any) {
  selectedCertificate.value = certificate
  dialogVisible.value = true
}

// 团队成员数据
const teamMembers = [
  {
    name: '李添鹏',
    position: '创始人兼总经理',
    photo: '/placeholder.svg?height=400&width=300&text=张宏星',
    bio: '拥有20年食品行业经验，曾在多家知名食品企业担任管理职务，2010年创立宏星食品。',
  },
  {
    name: '李坚',
    position: '运营总监',
    photo: '/placeholder.svg?height=400&width=300&text=李明',
    bio: '负责公司日常运营管理，拥有丰富的食品供应链管理经验，致力于提升运营效率和服务质量。',
  },
  {
    name: '王芳',
    position: '质量控制经理',
    photo: '/placeholder.svg?height=400&width=300&text=王芳',
    bio: '食品安全专家，负责公司的质量管理体系，确保所有食品符合安全标准和质量要求。',
  },
  {
    name: '赵强',
    position: '物流主管',
    photo: '/placeholder.svg?height=400&width=300&text=赵强',
    bio: '专注于冷链物流管理，负责优化配送路线和时间，确保食材新鲜送达客户手中。',
  },
]

const partners = [
  '萍乡中学',
  '萍钢小学',
  '湘东中学',
  '学院食堂',
]
</script>

<template>
  <MainLayout>
    <!-- 页面标题区 -->
    <section class="relative overflow-hidden pb-20 pt-32">
      <div class="absolute inset-0 z-0 from-amber-900/70 to-transparent bg-gradient-to-b" />
      <div class="relative z-10 mx-auto px-6 container">
        <div class="mx-auto max-w-3xl text-center">
          <h1 class="mb-6 text-5xl text-white font-bold leading-tight md:text-6xl">
            关于我们
          </h1>
          <p class="mb-10 text-xl text-white/90">
            了解萍乡市安源区宏星食品经营部的故事、使命和我们对食品安全的坚定承诺
          </p>
        </div>
      </div>

      <div class="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="h-auto w-full">
          <path fill="#ffffff" fill-opacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </div>
    </section>

    <!-- 公司简介 -->
    <section class="relative bg-white py-16">
      <div class="mx-auto px-6 container">
        <div class="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div class="order-2 lg:order-1">
            <h2 class="relative mb-6 inline-block text-3xl text-amber-800 font-bold md:text-4xl">
              我们的故事
              <span class="absolute left-0 h-1 w-1/3 bg-amber-500 -bottom-2" />
            </h2>

            <p class="mb-6 text-lg text-amber-700">
              萍乡市安源区宏星食品经营部，成立于2013年，位于江西省萍乡市，是一家以从事零售业为主的企业。经营范围包括预包装食品、散装食品、乳制品(不含婴幼儿配方乳粉)、饮料、冷冻储存服务、肉类食品批发等。
              我公司本着顾客至上、服务第一的理念获得各项管理体系认证以及业界的好评。
            </p>

            <p class="mb-6 text-lg text-amber-700">
              公司成立之初，仅有5名员工，主要为周边小型餐厅提供食材配送服务。凭借对品质的坚持和专业的服务态度，我们逐渐赢得了客户的信任，业务范围不断扩大。
            </p>

            <p class="mb-6 text-lg text-amber-700">
              如今，宏星食品已发展成为拥有50多名员工的专业食品配送企业，服务范围覆盖萍乡市及周边地区的学校、企事业单位等。我们始终坚持"质量第一、服务至上"的理念，致力于为客户提供安全、新鲜、优质的食材。
            </p>

            <div class="mt-8 flex flex-wrap gap-4">
              <div class="flex items-center">
                <div class="mr-4 h-12 w-12 flex items-center justify-center rounded-full bg-amber-100">
                  <Calendar class="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h4 class="text-amber-800 font-bold">
                    成立于
                  </h4>
                  <p class="text-amber-700">
                    2013年
                  </p>
                </div>
              </div>

              <div class="flex items-center">
                <div class="mr-4 h-12 w-12 flex items-center justify-center rounded-full bg-amber-100">
                  <Users class="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h4 class="text-amber-800 font-bold">
                    员工数量
                  </h4>
                  <p class="text-amber-700">
                    50+
                  </p>
                </div>
              </div>

              <div class="flex items-center">
                <div class="mr-4 h-12 w-12 flex items-center justify-center rounded-full bg-amber-100">
                  <MapPin class="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h4 class="text-amber-800 font-bold">
                    服务区域
                  </h4>
                  <p class="text-amber-700">
                    萍乡市及周边
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="relative order-1 lg:order-2">
            <div class="relative z-10">
              <img src="/p1.png" alt="宏星食品团队" class="h-auto w-full rounded-2xl shadow-xl">
            </div>

            <div class="absolute h-2/3 w-2/3 rounded-full bg-amber-100 -bottom-10 -right-10 -z-10" />
            <div class="absolute h-1/3 w-1/3 rounded-full bg-amber-300 -left-10 -top-10 -z-10" />
          </div>
        </div>
      </div>
    </section>

    <!-- 使命与价值观 -->
    <section class="relative bg-amber-50 py-16">
      <div class="mx-auto px-6 container">
        <div class="mb-16 text-center">
          <h2 class="relative mb-4 inline-block text-3xl text-amber-800 font-bold md:text-4xl">
            使命与价值观
            <span class="absolute left-1/4 h-1 w-1/2 bg-amber-500 -bottom-2" />
          </h2>
          <p class="mx-auto mt-6 max-w-3xl text-xl text-amber-700">
            我们的核心价值观指导着我们的每一个决策和行动
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div class="transform rounded-2xl bg-white p-8 shadow-lg transition-transform hover:scale-105">
            <div class="mx-auto mb-6 h-16 w-16 flex items-center justify-center rounded-full bg-amber-100">
              <Target class="h-8 w-8 text-amber-600" />
            </div>
            <h3 class="mb-4 text-center text-xl text-amber-800 font-bold">
              我们的使命
            </h3>
            <p class="text-center text-amber-700">
              提供安全、新鲜、营养的食材，为学校食堂和企事业单位创造健康的饮食环境，促进社会健康发展。
            </p>
          </div>

          <div class="transform rounded-2xl bg-white p-8 shadow-lg transition-transform hover:scale-105">
            <div class="mx-auto mb-6 h-16 w-16 flex items-center justify-center rounded-full bg-amber-100">
              <Eye class="h-8 w-8 text-amber-600" />
            </div>
            <h3 class="mb-4 text-center text-xl text-amber-800 font-bold">
              我们的愿景
            </h3>
            <p class="text-center text-amber-700">
              成为江西省领先的食品配送服务提供商，以卓越的品质和服务赢得客户的长期信任和支持。
            </p>
          </div>

          <div class="transform rounded-2xl bg-white p-8 shadow-lg transition-transform hover:scale-105">
            <div class="mx-auto mb-6 h-16 w-16 flex items-center justify-center rounded-full bg-amber-100">
              <Heart class="h-8 w-8 text-amber-600" />
            </div>
            <h3 class="mb-4 text-center text-xl text-amber-800 font-bold">
              核心价值观
            </h3>
            <p class="text-center text-amber-700">
              诚信经营、品质至上、客户为先、创新发展、社会责任。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 发展历程 -->
    <section class="relative bg-white py-16">
      <div class="mx-auto px-6 container">
        <div class="mb-16 text-center">
          <h2 class="relative mb-4 inline-block text-3xl text-amber-800 font-bold md:text-4xl">
            发展历程
            <span class="absolute left-1/4 h-1 w-1/2 bg-amber-500 -bottom-2" />
          </h2>
          <p class="mx-auto mt-6 max-w-3xl text-xl text-amber-700">
            见证宏星食品的成长与发展
          </p>
        </div>

        <div class="relative">
          <!-- 时间线中心线 -->
          <div class="absolute left-1/2 hidden h-full w-1 transform bg-amber-200 md:block -translate-x-1/2" />

          <div class="relative space-y-12">
            <div class="flex flex-col items-center md:flex-row">
              <div class="mb-6 md:mb-0 md:w-1/2 md:pr-12 md:text-right">
                <div class="inline-block rounded-2xl bg-amber-50 p-6 shadow-md">
                  <h3 class="mb-2 text-xl text-amber-800 font-bold">
                    2013年
                  </h3>
                  <p class="text-amber-700">
                    萍乡市安源区宏星食品经营部正式成立，开始为周边小型餐厅提供食材配送服务。
                  </p>
                </div>
              </div>
              <div class="z-10 mx-auto h-10 w-10 flex items-center justify-center rounded-full bg-amber-500 md:mx-0">
                <span class="text-white font-bold">1</span>
              </div>
              <div class="hidden md:block md:w-1/2 md:pl-12" />
            </div>

            <div class="flex flex-col items-center md:flex-row">
              <div class="hidden md:block md:w-1/2 md:pr-12" />
              <div class="z-10 mx-auto h-10 w-10 flex items-center justify-center rounded-full bg-amber-500 md:mx-0">
                <span class="text-white font-bold">2</span>
              </div>
              <div class="mb-6 md:mb-0 md:w-1/2 md:pl-12">
                <div class="inline-block rounded-2xl bg-amber-50 p-6 shadow-md">
                  <h3 class="mb-2 text-xl text-amber-800 font-bold">
                    2015年
                  </h3>
                  <p class="text-amber-700">
                    业务扩展至学校食堂，开始为萍乡市第一中学提供食材配送服务。
                  </p>
                </div>
              </div>
            </div>

            <div class="flex flex-col items-center md:flex-row">
              <div class="mb-6 md:mb-0 md:w-1/2 md:pr-12 md:text-right">
                <div class="inline-block rounded-2xl bg-amber-50 p-6 shadow-md">
                  <h3 class="mb-2 text-xl text-amber-800 font-bold">
                    2018年
                  </h3>
                  <p class="text-amber-700">
                    获得食品经营许可证和ISO9001质量管理体系认证，建立完善的质量管理体系。
                  </p>
                </div>
              </div>
              <div class="z-10 mx-auto h-10 w-10 flex items-center justify-center rounded-full bg-amber-500 md:mx-0">
                <span class="text-white font-bold">3</span>
              </div>
              <div class="hidden md:block md:w-1/2 md:pl-12" />
            </div>

            <div class="flex flex-col items-center md:flex-row">
              <div class="hidden md:block md:w-1/2 md:pr-12" />
              <div class="z-10 mx-auto h-10 w-10 flex items-center justify-center rounded-full bg-amber-500 md:mx-0">
                <span class="text-white font-bold">4</span>
              </div>
              <div class="mb-6 md:mb-0 md:w-1/2 md:pl-12">
                <div class="inline-block rounded-2xl bg-amber-50 p-6 shadow-md">
                  <h3 class="mb-2 text-xl text-amber-800 font-bold">
                    2020年
                  </h3>
                  <p class="text-amber-700">
                    投资建设现代化冷链物流中心，提升食材存储和配送能力。
                  </p>
                </div>
              </div>
            </div>

            <div class="flex flex-col items-center md:flex-row">
              <div class="mb-6 md:mb-0 md:w-1/2 md:pr-12 md:text-right">
                <div class="inline-block rounded-2xl bg-amber-50 p-6 shadow-md">
                  <h3 class="mb-2 text-xl text-amber-800 font-bold">
                    2022年
                  </h3>
                  <p class="text-amber-700">
                    公司成立10周年，服务客户突破50家，员工人数达到50人。
                  </p>
                </div>
              </div>
              <div class="z-10 mx-auto h-10 w-10 flex items-center justify-center rounded-full bg-amber-500 md:mx-0">
                <span class="text-white font-bold">5</span>
              </div>
              <div class="hidden md:block md:w-1/2 md:pl-12" />
            </div>

            <div class="flex flex-col items-center md:flex-row">
              <div class="hidden md:block md:w-1/2 md:pr-12" />
              <div class="z-10 mx-auto h-10 w-10 flex items-center justify-center rounded-full bg-amber-500 md:mx-0">
                <span class="text-white font-bold">6</span>
              </div>
              <div class="md:w-1/2 md:pl-12">
                <div class="inline-block rounded-2xl bg-amber-50 p-6 shadow-md">
                  <h3 class="mb-2 text-xl text-amber-800 font-bold">
                    2024年至今
                  </h3>
                  <p class="text-amber-700">
                    引入数字化管理系统，提升运营效率，开始拓展周边城市市场。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 证书展示 -->
    <section id="certificates" class="relative bg-amber-50 py-16">
      <div class="mx-auto px-6 container">
        <div class="mb-16 text-center">
          <h2 class="relative mb-4 inline-block text-3xl text-amber-800 font-bold md:text-4xl">
            资质证书
            <span class="absolute left-1/4 h-1 w-1/2 bg-amber-500 -bottom-2" />
          </h2>
          <p class="mx-auto mt-6 max-w-3xl text-xl text-amber-700">
            我们严格遵守食品安全标准，获得多项权威认证
          </p>
        </div>

        <!-- 3D翻转证书展示 -->
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2">
          <div v-for="(certificate, index) in certificates" :key="index" class="perspective-1000">
            <div class="certificate-card" :class="{ flipped: flippedCards[index] }" @click="toggleCard(index)">
              <div class="certificate-front rounded-2xl bg-white p-6 shadow-lg">
                <div class="relative mb-4 overflow-hidden rounded-lg">
                  <img :src="certificate.image" :alt="certificate.name" class="h-64 w-full object-cover">
                  <div class="absolute right-4 top-4">
                    <div class="h-10 w-10 flex items-center justify-center rounded-full bg-amber-500">
                      <RefreshCw class="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
                <h3 class="mb-2 text-xl text-amber-800 font-bold">
                  {{ certificate.name }}
                </h3>
                <p class="text-amber-700">
                  {{ certificate.shortDesc }}
                </p>
              </div>
              <div class="certificate-back rounded-2xl bg-amber-800 p-6 text-white shadow-lg">
                <h3 class="mb-4 text-xl font-bold">
                  {{ certificate.name }}
                </h3>
                <div class="space-y-4">
                  <div class="flex items-start">
                    <Calendar class="mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                    <p>发证日期: {{ certificate.issueDate }}</p>
                  </div>
                  <div class="flex items-start">
                    <Building class="mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                    <p>发证机构: {{ certificate.issuedBy }}</p>
                  </div>
                  <div class="flex items-start">
                    <FileText class="mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                    <p>{{ certificate.description }}</p>
                  </div>
                </div>
                <div class="absolute bottom-6 right-6">
                  <div class="h-10 w-10 flex items-center justify-center rounded-full bg-white">
                    <RefreshCw class="h-5 w-5 text-amber-800" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 证书轮播图 (移动端) -->
        <div class="mt-12 md:hidden">
          <Carousel :value="certificates" :num-visible="1" :num-scroll="1" class="certificate-carousel">
            <template #item="slotProps">
              <div class="p-4">
                <div class="rounded-2xl bg-white p-6 shadow-lg">
                  <div class="relative mb-4 overflow-hidden rounded-lg">
                    <!-- <img :src="slotProps.data.image" :alt="slotProps.data.name" class="h-64 w-full object-cover"> -->
                  </div>
                  <h3 class="mb-2 text-xl text-amber-800 font-bold">
                    {{ slotProps.data.name }}
                  </h3>
                  <p class="mb-4 text-amber-700">
                    {{ slotProps.data.shortDesc }}
                  </p>
                  <Button
                    label="查看详情"
                    icon="pi pi-info-circle"
                    class="custom-button-outline p-button-rounded p-button-outlined w-full"
                    @click="showCertificateDialog(slotProps.data)"
                  />
                </div>
              </div>
            </template>
          </Carousel>
        </div>

        <!-- 证书详情对话框 -->
        <Dialog v-model:visible="dialogVisible" :header="selectedCertificate?.name" modal class="certificate-dialog">
          <div v-if="selectedCertificate" class="p-4">
            <div class="mb-6">
              <!-- <img :src="selectedCertificate.image" :alt="selectedCertificate.name" class="h-auto w-full rounded-lg"> -->
            </div>
            <div class="space-y-4">
              <div class="flex items-start">
                <Calendar class="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-amber-600" />
                <p class="text-amber-700">
                  发证日期: {{ selectedCertificate.issueDate }}
                </p>
              </div>
              <div class="flex items-start">
                <Building class="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-amber-600" />
                <p class="text-amber-700">
                  发证机构: {{ selectedCertificate.issuedBy }}
                </p>
              </div>
              <div class="flex items-start">
                <FileText class="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-amber-600" />
                <p class="text-amber-700">
                  {{ selectedCertificate.description }}
                </p>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    </section>

    <!-- 团队介绍 -->
    <section id="team" class="relative bg-white py-16">
      <div class="mx-auto px-6 container">
        <div class="mb-16 text-center">
          <h2 class="relative mb-4 inline-block text-3xl text-amber-800 font-bold md:text-4xl">
            我们的团队
            <span class="absolute left-1/4 h-1 w-1/2 bg-amber-500 -bottom-2" />
          </h2>
          <p class="mx-auto mt-6 max-w-3xl text-xl text-amber-700">
            专业的团队是我们提供优质服务的基础
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 lg:grid-cols-4 md:grid-cols-2">
          <div v-for="(member, index) in teamMembers" :key="index" class="group">
            <div class="relative overflow-hidden rounded-2xl shadow-lg" h-56>
              <!-- <img :src="member.photo" :alt="member.name" class="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-110"> -->
              <div class="absolute inset-0 from-amber-500 to-amber-800 bg-gradient-to-br opacity-70" />
              <div class="absolute bottom-0 left-0 right-0 transform p-6 transition-transform duration-500 group-hover:-translate-y-2">
                <h3 class="mb-1 text-xl text-white font-bold">
                  {{ member.name }}
                </h3>
                <p class="mb-3 text-amber-200">
                  {{ member.position }}
                </p>
                <p class="text-sm text-white/80 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {{ member.bio }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-12 text-center">
          <Button
            label="加入我们"
            icon="pi pi-user-plus"
            class="p-button-rounded custom-button"
          />
        </div>
      </div>
    </section>

    <!-- 合作伙伴 -->
    <section class="relative bg-amber-50 py-16">
      <div class="mx-auto px-6 container">
        <div class="mb-16 text-center">
          <h2 class="relative mb-4 inline-block text-3xl text-amber-800 font-bold md:text-4xl">
            合作伙伴
            <span class="absolute left-1/4 h-1 w-1/2 bg-amber-500 -bottom-2" />
          </h2>
          <p class="mx-auto mt-6 max-w-3xl text-xl text-amber-700">
            感谢这些优秀的合作伙伴与我们共同成长
          </p>
        </div>

        <div class="grid grid-cols-2 gap-6 md:grid-cols-4">
          <div v-for="name in partners" :key="name" class="flex transform items-center justify-center rounded-xl bg-white p-4 shadow-md transition-transform hover:scale-105">
            <span class="text-amber-500">{{ name }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系我们 CTA -->
    <section class="relative bg-white py-16">
      <div class="mx-auto px-6 container">
        <div class="relative overflow-hidden rounded-3xl from-amber-500 to-amber-700 bg-gradient-to-r p-12 text-center">
          <div class="absolute right-0 top-0 h-64 w-64 translate-x-1/3 transform rounded-full bg-white/10 -translate-y-1/3" />
          <div class="absolute bottom-0 left-0 h-48 w-48 translate-y-1/3 transform rounded-full bg-white/10 -translate-x-1/3" />

          <div class="relative z-10">
            <h2 class="mb-6 text-3xl text-white font-bold md:text-4xl">
              想了解更多信息？
            </h2>
            <p class="mx-auto mb-8 max-w-2xl text-xl text-white/90">
              无论您是想了解我们的产品服务，还是希望建立合作关系，我们都期待您的联系
            </p>
            <div class="flex flex-wrap justify-center gap-4">
              <Button
                label="联系我们"
                icon="pi pi-envelope"
                class="p-button-rounded p-button-lg border-white bg-white text-amber-600 hover:bg-white/90"
              />
              <Button
                label="查看产品"
                icon="pi pi-shopping-bag"
                class="p-button-rounded p-button-lg p-button-outlined border-white text-white hover:bg-white/10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </MainLayout>
</template>

<style scoped>
/* 证书卡片翻转效果 */
.perspective-1000 {
  perspective: 1000px;
}

.certificate-card {
  position: relative;
  width: 100%;
  height: 400px;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  cursor: pointer;
}

.certificate-card.flipped {
  transform: rotateY(180deg);
}

.certificate-front,
.certificate-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
}

.certificate-back {
  transform: rotateY(180deg);
}

/* 自定义PrimeVue组件样式 */
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

/* 响应式调整 */
@media (max-width: 768px) {
  .certificate-card {
    height: 350px;
  }
}
</style>
