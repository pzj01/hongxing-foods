<script setup lang="ts">
import type { MenuItem } from 'primevue/menuitem'

const menuItems = ref<MenuItem[]>([
  { label: '首页', to: '/' },
  { label: '产品中心', to: '/products' },
  { label: '关于我们', to: '/about' },
  { label: '联系我们', to: '/contact' },
])
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
  <div class="sticky top-0 z-50 bg-white shadow-sm">
    <Menubar :model="menuItems" class="mx-auto max-w-7xl px-4 border-none!" :pt="{ itemContent: { style: 'padding: 0.5rem;' } }">
      <template #start>
        <div class="mr-16 flex items-center">
          <div class="mr-3 h-10 w-10 flex items-center justify-center rounded-lg bg-blue-900 text-xl text-white font-bold">
            宏
          </div>
          <span class="hidden text-xl text-blue-900 font-bold sm:block">江西宏润配送有限公司</span>
          <span class="text-xl text-blue-900 font-bold sm:hidden">宏润配送</span>
        </div>
      </template>
      <template #item="{ item }">
        <RouterLink :to="item.to" active-class="text-sky-600" class="hover:text-sky-600">
          {{ item.label }}
        </RouterLink>
      </template>
      <template #end>
        <Button icon="pi pi-user" label="登录" class="border-sky-500 bg-sky-500 hover:border-sky-600 hover:bg-sky-600" @click="$router.push('/login')" />
      </template>
    </Menubar>
  </div>
</template>
