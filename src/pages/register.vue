<script setup>
import { useToast } from 'primevue/usetoast'
import { useUserStore } from '~/composables/user'
import { Role } from '~/types'

const form = reactive({
  username: '',
  password: '',
})

const roles = ref([
  { label: '采购员', value: Role.PURCHASER },
  { label: '系统管理员', value: Role.ADMIN },
])
const role = ref(Role.VIEWER)

const { register } = useUserStore()
const toast = useToast()
const router = useRouter()

function handleSubmit() {
  const res = register({
    id: Date.now(),
    role: role.value,
    ...form,
  })

  if (res) {
    toast.add({
      severity: 'success',
      summary: '注册成功',
      detail: '请登录',
      life: 3000,
    })

    router.push('/login')
  }
}
</script>

<template>
  <div class="min-h-screen flex flex-col justify-center py-12 lg:px-8 sm:px-6">
    <div class="sm:mx-auto sm:max-w-md sm:w-full">
      <h2 class="mt-6 text-center text-3xl font-extrabold">
        注册您的账户
      </h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:max-w-md sm:w-full">
      <div class="px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-8">
          <Select v-model="role" :options="roles" option-label="label" option-value="value" placeholder="选择角色" fluid />

          <FloatLabel>
            <InputText id="username" v-model="form.username" fluid />
            <label for="username">用户名</label>
          </FloatLabel>

          <FloatLabel>
            <Password v-model="form.password" fluid toggle-mask input-id="password" />
            <label for="password">密码</label>
          </FloatLabel>

          <Button fluid @click="handleSubmit">
            注册
          </Button>
          <Button fluid variant="outlined" severity="secondary" @click="$router.push('/login')">
            登录
          </Button>
          <Button fluid severity="secondary" @click="$router.push('/')">
            返回官网首页
          </Button>
        </form>
      </div>
    </div>
  </div>
</template>
