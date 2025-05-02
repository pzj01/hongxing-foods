<script setup lang="ts">
import Button from 'primevue/button'
import { ref } from 'vue'

// 发展历程数据
interface Milestone {
  year: string
  title: string
  description: string
  image: string
}

const milestones = ref<Milestone[]>([
  {
    year: '2015年',
    title: '公司成立',
    description: '江西宏润配送有限公司在萍乡市正式成立，开始为本地学校食堂提供食材配送服务。',
    image: '/placeholder.svg?height=200&width=300',
  },
  {
    year: '2017年',
    title: '业务扩展',
    description: '公司业务范围扩展至江西全省，客户数量突破50家，建立了第一个现代化冷链仓储中心。',
    image: '/placeholder.svg?height=200&width=300',
  },
  {
    year: '2019年',
    title: '获得资质认证',
    description: '获得ISO9001质量管理体系认证和HACCP食品安全管理体系认证，标志着公司管理水平和食品安全保障能力的提升。',
    image: '/placeholder.svg?height=200&width=300',
  },
  {
    year: '2021年',
    title: '技术升级',
    description: '引入智能物流管理系统和冷链监控系统，提升配送效率和食品安全保障水平。',
    image: '/placeholder.svg?height=200&width=300',
  },
  {
    year: '2023年',
    title: '战略发展',
    description: '制定五年发展战略规划，计划在江西省内建立多个配送中心，进一步提升服务能力和覆盖范围。',
    image: '/placeholder.svg?height=200&width=300',
  },
])

// 核心价值观数据
interface CoreValue {
  icon: string
  title: string
  description: string
}

const coreValues = ref<CoreValue[]>([
  {
    icon: 'pi pi-shield',
    title: '品质第一',
    description: '坚持高标准的食品质量要求，从源头把控食材品质，确保每一份食材的安全与健康。',
  },
  {
    icon: 'pi pi-users',
    title: '客户至上',
    description: '以客户需求为中心，提供个性化的服务方案，不断提升客户满意度和忠诚度。',
  },
  {
    icon: 'pi pi-sync',
    title: '持续创新',
    description: '不断引入新技术、新理念，优化服务流程，提升运营效率和服务质量。',
  },
  {
    icon: 'pi pi-globe',
    title: '社会责任',
    description: '积极履行企业社会责任，关注食品安全和环境保护，为社会可持续发展贡献力量。',
  },
])

// 团队成员数据
interface TeamMember {
  name: string
  position: string
  description: string
  image: string
}

const teamMembers = ref<TeamMember[]>([
  {
    name: '李佳慧',
    position: '总经理',
    description: '拥有15年食品行业经验，负责公司整体战略规划和业务发展，带领团队不断创新和进步。',
    image: '/placeholder.svg?height=300&width=300',
  },
  {
    name: '李明',
    position: '运营总监',
    description: '负责公司日常运营管理，拥有丰富的供应链管理经验，致力于提升运营效率和服务质量。',
    image: '/placeholder.svg?height=300&width=300',
  },
  {
    name: '王丽',
    position: '质量控制经理',
    description: '食品安全专家，负责建立和维护公司的食品安全管理体系，确保食品质量符合国家标准。',
    image: '/placeholder.svg?height=300&width=300',
  },
])

// 公司优势数据
interface Advantage {
  icon: string
  title: string
  description: string
  points: string[]
}

const advantages = ref<Advantage[]>([
  {
    icon: 'pi pi-shield',
    title: '质量保障体系',
    description: '建立了完善的食品安全管理体系，从源头把控食材质量，确保每一份食材的安全与健康。',
    points: [
      'ISO9001质量管理体系认证',
      'HACCP食品安全管理体系认证',
      '严格的供应商筛选和管理',
      '全程质量追溯系统',
    ],
  },
  {
    icon: 'pi pi-truck',
    title: '专业物流配送',
    description: '拥有现代化的冷链物流配送系统，确保食材新鲜送达，满足客户的多样化需求。',
    points: [
      '50+专业配送车辆',
      '全程温控冷链配送',
      '智能物流管理系统',
      '准时高效的配送服务',
    ],
  },
  {
    icon: 'pi pi-users',
    title: '专业服务团队',
    description: '拥有一支经验丰富、专业高效的团队，为客户提供一站式的食材供应解决方案。',
    points: [
      '专业的采购团队',
      '经验丰富的配送人员',
      '一对一客户服务',
      '7*24小时响应机制',
    ],
  },
])

// 资质证书数据
interface Certificate {
  name: string
  image: string
  issueDate: string
}

const certificates = ref<Certificate[]>([
  {
    name: 'ISO9001质量管理体系认证证书',
    image: '/certificates/质量管理.png',
    issueDate: '2019年颁发',
  },
  {
    name: '食品安全管理体系认证证书',
    image: '/certificates/食品安全.png',
    issueDate: '2019年颁发',
  },
  {
    name: '食品经营许可证',
    image: '/certificates/食品许可.png',
    issueDate: '2023年颁发',
  },
  {
    name: '环境管理体系证书',
    image: '/certificates/环境管理.png',
    issueDate: '2025年颁发',
  },
  {
    name: '职业安全健康管理体系证书',
    image: '/certificates/职业安全.png',
    issueDate: '2025年颁发',
  },
])

// 招标信息数据
interface BiddingInfo {
  title: string
  description: string
  publishDate: string
  endDate: string
  status: string
}

const biddingInfo = ref<BiddingInfo[]>([
  {
    title: '湘东中学食堂配送项目',
    description: '为湘东中学食堂提供鸡肉、猪肉、牛肉等肉类食材的配送服务，确保食材新鲜、品质优良，供应商需具备相关资质和稳定供应能力。',
    publishDate: '2023-09',
    endDate: '2024-08',
    status: '已完成',
  },
  {
    title: '萍乡市麻山中学食堂食材供应商招标项目',
    description: '为萍乡市麻山中学食堂供应鱼、虾、贝类等海鲜食材，需配备专业冷链物流体系，并严格遵守食品安全标准。',
    publishDate: '2024-09',
    endDate: '2026-08',
    status: '进行中',
  },
  {
    title: '江西工业工程职业技术学院麻辣烫冻品食材采购合同',
    description: '为江西工业工程职业技术学院提供麻辣烫专用冷冻鱼、虾、贝类等食材，需保证冷链运输的高效性和食材的长期品质稳定。',
    publishDate: '2024-01',
    endDate: '长期',
    status: '进行中',
  },
  {
    title: '湘东中学食堂食材供应采购项目（冻品）',
    description: '为湘东中学食堂采购冷冻鱼、虾、贝类等海鲜食材，供应商需具备可靠的冷链配送能力，确保食材安全与品质符合食堂需求。',
    publishDate: '2024-08-29',
    endDate: '长期',
    status: '进行中',
  },
])
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
            关于我们
          </h1>
          <p class="mx-auto max-w-3xl text-lg opacity-90 md:text-xl">
            了解江西宏润配送有限公司的发展历程、企业文化和服务优势
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

    <!-- 公司简介 -->
    <section class="px-4 py-16">
      <div class="mx-auto max-w-7xl">
        <div class="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <div class="mb-4 inline-flex items-center justify-center rounded-full bg-sky-100 px-4 py-1 text-sm text-sky-700 font-medium">
              <i class="pi pi-building mr-2" />公司简介
            </div>
            <h2 class="mb-6 text-3xl text-blue-900 font-bold">
              专业的食品供应链服务商
            </h2>
            <div class="mb-6 h-1 w-16 bg-sky-500" />
            <div class="text-gray-700 space-y-4">
              <p>
                江西宏润配送有限公司成立于2015年，是一家专业从事食品供应链和配送服务的企业，致力于为学校食堂等机构客户提供高品质的家禽、海鲜鱼类、火腿、鸡排等食品。
              </p>
              <p>
                公司总部位于江西省南昌市，拥有现代化的仓储物流中心和冷链配送系统，服务范围覆盖江西全省及周边地区。我们拥有一支专业的采购团队和配送队伍，确保每一份食材的新鲜与安全。
              </p>
              <p>
                多年来，我们始终坚持"品质第一、客户至上"的经营理念，通过严格的质量控制和高效的配送服务，赢得了众多客户的信任和好评，成为江西地区食品供应链服务的领先企业。
              </p>
            </div>
            <div class="mt-8">
              <Button label="了解更多" icon="pi pi-arrow-right" icon-pos="right" class="border-blue-900 bg-blue-900" />
            </div>
          </div>
          <div class="relative">
            <div class="absolute h-24 w-24 rounded-lg bg-sky-500 opacity-20 -left-6 -top-6" />
            <div class="absolute h-24 w-24 rounded-lg bg-blue-900 opacity-20 -bottom-6 -right-6" />
            <img src="/distribution.jpg" alt="江西宏润配送有限公司" class="relative z-10 h-auto w-full rounded-lg shadow-xl">
          </div>
        </div>
      </div>
    </section>

    <!-- 发展历程 -->
    <section class="bg-gray-100 px-4 py-16">
      <div class="mx-auto max-w-7xl">
        <div class="mb-12 text-center">
          <div class="mb-4 inline-flex items-center justify-center rounded-full bg-sky-100 px-4 py-1 text-sm text-sky-700 font-medium">
            <i class="pi pi-history mr-2" />发展历程
          </div>
          <h2 class="mb-4 text-3xl text-blue-900 font-bold">
            我们的成长足迹
          </h2>
          <div class="mx-auto mb-6 h-1 w-16 bg-sky-500" />
          <p class="mx-auto max-w-3xl text-lg text-gray-700">
            从创立至今，江西宏润配送有限公司不断发展壮大，成为江西地区食品供应链服务的领先企业
          </p>
        </div>

        <div class="relative">
          <!-- 时间线 -->
          <div class="absolute bottom-0 left-1/2 top-0 hidden w-1 transform bg-blue-200 md:block -translate-x-1/2" />

          <div class="space-y-12">
            <div v-for="(milestone, index) in milestones" :key="index" class="relative">
              <div class="items-center md:grid md:grid-cols-2 md:gap-8">
                <div :class="index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-last md:text-left md:pl-12'">
                  <div class="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
                    <div class="mb-2 text-xl text-blue-900 font-bold">
                      {{ milestone.year }}
                    </div>
                    <h3 class="mb-3 text-lg text-gray-800 font-bold">
                      {{ milestone.title }}
                    </h3>
                    <p class="text-gray-600">
                      {{ milestone.description }}
                    </p>
                  </div>
                </div>
                <div :class="index % 2 === 0 ? 'md:pl-12 md:order-last' : 'md:pr-12'">
                  <div class="hidden md:block">
                    <!-- <img :src="milestone.image" :alt="milestone.title" class="h-auto w-full rounded-lg shadow-md"> -->
                  </div>
                </div>
              </div>
              <!-- 时间点 -->
              <div class="absolute left-1/2 top-1/2 hidden transform md:block -translate-x-1/2 -translate-y-1/2">
                <div class="h-6 w-6 border-4 border-white rounded-full bg-sky-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 企业文化 -->
    <section class="px-4 py-16">
      <div class="mx-auto max-w-7xl">
        <div class="mb-12 text-center">
          <div class="mb-4 inline-flex items-center justify-center rounded-full bg-sky-100 px-4 py-1 text-sm text-sky-700 font-medium">
            <i class="pi pi-heart mr-2" />企业文化
          </div>
          <h2 class="mb-4 text-3xl text-blue-900 font-bold">
            我们的价值观
          </h2>
          <div class="mx-auto mb-6 h-1 w-16 bg-sky-500" />
          <p class="mx-auto max-w-3xl text-lg text-gray-700">
            企业文化是我们的灵魂，指引着我们前进的方向和行动的准则
          </p>
        </div>

        <div class="grid grid-cols-1 gap-6 lg:grid-cols-4 md:grid-cols-2">
          <div
            v-for="(value, index) in coreValues" :key="index"
            class="border-t-4 rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            :class="index % 2 === 0 ? 'border-blue-900' : 'border-sky-500'"
          >
            <div class="mx-auto mb-4 h-16 w-16 flex items-center justify-center rounded-full bg-gray-100">
              <i style="font-size: 1.5rem" class="text-2xl" :class="[value.icon, index % 2 === 0 ? 'text-blue-900' : 'text-sky-500']" />
            </div>
            <h3 class="mb-3 text-center text-xl text-blue-900 font-bold">
              {{ value.title }}
            </h3>
            <p class="text-center text-gray-600">
              {{ value.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 团队介绍 -->
    <section class="bg-gray-100 px-4 py-16">
      <div class="mx-auto max-w-7xl">
        <div class="mb-12 text-center">
          <div class="mb-4 inline-flex items-center justify-center rounded-full bg-sky-100 px-4 py-1 text-sm text-sky-700 font-medium">
            <i class="pi pi-users mr-2" />团队介绍
          </div>
          <h2 class="mb-4 text-3xl text-blue-900 font-bold">
            我们的专业团队
          </h2>
          <div class="mx-auto mb-6 h-1 w-16 bg-sky-500" />
          <p class="mx-auto max-w-3xl text-lg text-gray-700">
            我们拥有一支经验丰富、专业高效的团队，为客户提供优质的服务
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2">
          <div
            v-for="(member, index) in teamMembers" :key="index"
            class="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-lg"
          >
            <div class="relative">
              <!-- <img :src="member.image" :alt="member.name" class="h-64 w-full object-cover object-center"> -->
              <div class="absolute inset-0 flex items-end from-black/70 to-transparent bg-gradient-to-t opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div class="w-full p-4">
                  <div class="flex justify-center space-x-3">
                    <a href="#" class="h-8 w-8 flex items-center justify-center rounded-full bg-white/20 transition-colors hover:bg-sky-500">
                      <i class="pi pi-envelope text-white" />
                    </a>
                    <a href="#" class="h-8 w-8 flex items-center justify-center rounded-full bg-white/20 transition-colors hover:bg-sky-500">
                      <i class="pi pi-phone text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-6">
              <h3 class="mb-1 text-center text-xl text-blue-900 font-bold">
                {{ member.name }}
              </h3>
              <p class="mb-3 text-center text-sky-500 font-medium">
                {{ member.position }}
              </p>
              <p class="text-center text-gray-600">
                {{ member.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 公司优势 -->
    <section class="relative overflow-hidden from-blue-900 to-blue-800 bg-gradient-to-r px-4 py-16 text-white">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0 bg-repeat" style="background-image: url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E');" />
      </div>

      <div class="relative z-10 mx-auto max-w-7xl">
        <div class="mb-12 text-center">
          <div class="mb-4 inline-flex items-center justify-center rounded-full bg-white/20 px-4 py-1 text-sm text-white font-medium">
            <i class="pi pi-star mr-2" />公司优势
          </div>
          <h2 class="mb-4 text-3xl font-bold">
            我们的核心竞争力
          </h2>
          <div class="mx-auto mb-6 h-1 w-16 bg-sky-400" />
          <p class="mx-auto max-w-3xl text-lg opacity-90">
            多年来，我们不断提升自身实力，形成了独特的竞争优势
          </p>
        </div>

        <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
          <div
            v-for="(advantage, index) in advantages" :key="index"
            class="rounded-xl bg-white/10 p-6 backdrop-blur-sm transition-colors hover:bg-white/15"
          >
            <div class="mx-auto mb-6 h-16 w-16 flex items-center justify-center rounded-full bg-sky-500">
              <i style="font-size: 1.5rem" class="text-3xl text-white" :class="[advantage.icon]" />
            </div>
            <h3 class="mb-4 text-center text-xl font-bold">
              {{ advantage.title }}
            </h3>
            <p class="text-center opacity-80">
              {{ advantage.description }}
            </p>
            <div class="mt-6 border-t border-white/20 pt-4">
              <ul class="space-y-2">
                <li v-for="(point, pIndex) in advantage.points" :key="pIndex" class="flex items-start">
                  <i class="pi pi-check-circle mr-2 mt-1 text-sky-300" />
                  <span class="opacity-90">{{ point }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 资质证书 -->
    <section class="px-4 py-16">
      <div class="mx-auto max-w-7xl">
        <div class="mb-12 text-center">
          <div class="mb-4 inline-flex items-center justify-center rounded-full bg-sky-100 px-4 py-1 text-sm text-sky-700 font-medium">
            <i class="pi pi-verified mr-2" />资质证书
          </div>
          <h2 class="mb-4 text-3xl text-blue-900 font-bold">
            我们的荣誉与认证
          </h2>
          <div class="mx-auto mb-6 h-1 w-16 bg-sky-500" />
          <p class="mx-auto max-w-3xl text-lg text-gray-700">
            我们拥有完善的资质认证，是您值得信赖的合作伙伴
          </p>
        </div>

        <div class="grid grid-cols-1 gap-6 lg:grid-cols-4 md:grid-cols-2">
          <div
            v-for="(certificate, index) in certificates" :key="index"
            class="rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <a :href="certificate.image" target="_blank">
              <div class="mb-4 h-48 flex items-center justify-center rounded-lg bg-gray-50">
                <img :src="certificate.image" :alt="certificate.name" class="max-h-40 max-w-full">
              </div>
              <h3 class="mb-2 text-center text-lg text-blue-900 font-bold">
                {{ certificate.name }}
              </h3>
              <p class="text-center text-sm text-gray-500">
                {{ certificate.issueDate }}
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 合作 -->
    <section class="relative overflow-hidden bg-blue-900 px-4 py-16 text-white">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0 bg-repeat" style="background-image: url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E');" />
      </div>

      <div class="relative z-10 mx-auto max-w-7xl">
        <div class="mb-12 flex flex-col items-center">
          <div class="mb-4 inline-flex items-center justify-center rounded-full bg-white/20 px-4 py-1 text-sm text-white font-medium">
            <i class="pi pi-file-o mr-2" />最新业绩
          </div>
          <h2 class="mb-4 text-center text-3xl font-bold">
            业绩
          </h2>
          <div class="mb-6 h-1 w-16 bg-sky-400" />
        </div>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div
            v-for="(bid, index) in biddingInfo" :key="index"
            class="flex flex-col justify-between rounded-xl bg-white/10 p-6 backdrop-blur-sm transition-colors hover:bg-white/15"
          >
            <div class="mb-4 flex items-start justify-between">
              <h3 class="text-xl font-bold">
                {{ bid.title }}
              </h3>
              <span
                class="rounded-full px-3 py-1 text-xs font-medium"
                :class="bid.status === '进行中' ? 'bg-sky-400 text-blue-900' : 'bg-gray-200 text-gray-700'"
              >
                {{ bid.status }}
              </span>
            </div>
            <p class="mb-4 opacity-80">
              {{ bid.description }}
            </p>
            <div class="grid grid-cols-2 mb-4 gap-4">
              <div>
                <p class="text-sm opacity-70">
                  发布日期
                </p>
                <p class="font-medium">
                  {{ bid.publishDate }}
                </p>
              </div>
              <div>
                <p class="text-sm opacity-70">
                  截止日期
                </p>
                <p class="font-medium">
                  {{ bid.endDate }}
                </p>
              </div>
            </div>
            <Button
              label="查看详情" icon="pi pi-external-link"
              class="w-full border border-white/30 bg-transparent hover:bg-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  </MainLayout>
</template>

<style scoped>
/* 自定义样式 */
:deep(.p-button) {
  transition: all 0.3s ease;
}

:deep(.p-button:hover) {
  transform: translateY(-2px);
}
</style>
