<script setup lang="ts">
import type { MenuItem } from 'primevue/menuitem'
import { UtensilsCrossed } from 'lucide-vue-next'

const hoveredNav = ref<number | null>(null)
// 导航项
const navItems: MenuItem[] = [
  { label: '首页', link: '/' },
  { label: '产品服务', link: '/products' },
  { label: '关于我们', link: '/about' },
  { label: '联系我们', link: '/contact' },
]

const menuVisible = ref(false)
const router = useRouter()

function scrollToContact() {
  router.push('/login')
}

function toggleMenu() {
  menuVisible.value = !menuVisible.value
}

// 导航状态
const scrolled = ref(false)

// 监听滚动
function handleScroll() {
  scrolled.value = window.scrollY > 50
}

useEventListener(window, 'scroll', handleScroll)

// const keywordValue = inject<string>('keyword', '')

// const router = useRouter()
// const keyword = ref(keywordValue || '')

// function onSearch() {
//   const value = keyword.value.trim()
//   if (value) {
//     router.push(`/search?keyword=${value}`)
//   }
// }
</script>

<template>
  <!-- 导航栏 -->
  <header class="fixed left-0 right-0 top-0 z-50 transition-all duration-300" :class="{ 'bg-white/90 backdrop-blur-md shadow-md': scrolled, 'bg-transparent': !scrolled }">
    <div class="mx-auto px-6 py-4 container">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div class="h-12 w-12 flex rotate-12 transform items-center justify-center rounded-full bg-amber-500">
            <UtensilsCrossed class="h-6 w-6 text-white" />
          </div>
          <h1 class="text-2xl font-bold" :class="scrolled ? 'text-amber-800' : 'text-white'">
            宏星食品
          </h1>
        </div>

        <div class="hidden items-center lg:flex space-x-10">
          <RouterLink
            v-for="(item, index) in navItems" :key="index"
            :to="item.link"
            class="nav-link relative text-lg font-medium transition-colors duration-300"
            :class="scrolled ? 'text-amber-800' : 'text-white'"
            @mouseenter="hoveredNav = index"
            @mouseleave="hoveredNav = null"
          >
            {{ item.label }}
            <span
              class="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform bg-amber-500 transition-transform duration-300"
              :class="{ 'scale-x-100': hoveredNav === index }"
            />
          </RouterLink>
        </div>

        <div class="hidden lg:block">
          <Button
            label="登录"
            icon="pi pi-user"
            class="custom-button p-button-rounded"
            @click="scrollToContact"
          />
        </div>

        <Button
          icon="pi pi-bars"
          class="p-button-rounded p-button-text lg:hidden!"
          :class="scrolled ? 'text-amber-800' : 'text-white'"
          @click="toggleMenu"
        />
      </div>
    </div>
  </header>

  <Sidebar v-model:visible="menuVisible" position="right" class="custom-sidebar">
    <div class="h-full flex flex-col p-6">
      <div class="mb-10 flex items-center space-x-3">
        <div class="h-12 w-12 flex rotate-12 transform items-center justify-center rounded-full bg-amber-500">
          <UtensilsCrossed class="h-6 w-6 text-white" />
        </div>
        <h2 class="text-2xl text-amber-800 font-bold">
          宏星食品
        </h2>
      </div>

      <div class="flex flex-col space-y-6">
        <a
          v-for="(item, index) in navItems" :key="index"
          :href="item.link"
          class="py-2 text-xl text-amber-800 font-medium transition-colors hover:text-amber-500"
          @click="menuVisible = false"
        >
          {{ item.label }}
        </a>
      </div>

      <div class="mt-auto">
        <Button
          label="联系我们"
          icon="pi pi-phone"
          class="p-button-rounded custom-button w-full"
          @click="scrollToContact"
        />
      </div>
    </div>
  </Sidebar>
</template>
