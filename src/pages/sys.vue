<script setup lang="ts">
import type { MenuItem } from 'primevue/menuitem'
import { useConfirm } from 'primevue/useconfirm'
import { Role } from '~/types'

const router = useRouter()
const { user, logout } = useUserStore()
const confirm = useConfirm()

const items = computed(() => [
  {
    label: '首页',
    icon: 'i-carbon-home',
    command() {
      router.push('/sys')
    },
  },
  {
    label: '采购管理',
    icon: 'i-carbon-purchase',
    command() {
      router.push('/sys/purchase')
    },
  },
  user?.role !== Role.PURCHASER && {
    label: '产品管理',
    icon: 'i-carbon-cloud-service-management',
    command() {
      router.push('/sys/product')
    },
  },
  {
    label: '退出登录',
    icon: 'i-carbon-logout',
    command() {
      confirm.require({
        message: '确定要退出登录吗?',
        header: '退出登录',
        icon: 'i-carbon-logout',
        acceptProps: {
          label: '退出',
          severity: 'danger',
        },
        rejectProps: {
          label: '取消',
          severity: 'secondary',
          outlined: true,
        },
        accept: () => {
          logout()
          router.push('/login')
        },
      })
    },
  },
].filter(Boolean) as MenuItem[])
</script>

<template>
  <div flex>
    <Menu
      :pt="{ root: { style: 'border-radius: 0px;' } }" h-screen w-12 :model="items"
    >
      <template #start>
        <h1 p-4 text-center font-bold>
          宏星食品安全管理系统
        </h1>
      </template>
    </Menu>
    <div style="width: calc(100% - 200px);">
      <nav text="2xl" border-b p-2>
        <div flex="~ items-center gap-x-2 justify-between">
          <span text-base font-bold>欢迎你，{{ user?.username }}</span>
          <Avatar :label="user?.username.at(0) || 'P'" size="large" shape="circle" />
        </div>
      </nav>
      <div overflow-auto p-4 style="background-color: var(--p-content-background);height: calc(100vh - 65px);">
        <RouterView />
      </div>
    </div>
  </div>
</template>
