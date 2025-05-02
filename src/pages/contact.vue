<script setup lang="ts">
// 表单数据
interface FormData {
  name: string
  company: string
  phone: string
  email: string
  subject: any
  message: string
  agreement: boolean
}

const form = ref<FormData>({
  name: '',
  company: '',
  phone: '',
  email: '',
  subject: null,
  message: '',
  agreement: false,
})

// 咨询主题选项
const subjectOptions = ref([
  { name: '产品咨询', code: 'product' },
  { name: '价格咨询', code: 'price' },
  { name: '配送服务', code: 'delivery' },
  { name: '合作洽谈', code: 'cooperation' },
  { name: '投诉建议', code: 'feedback' },
  { name: '其他', code: 'other' },
])

// 表单提交状态
const loading = ref(false)

// 表单提交方法
function submitForm() {
  loading.value = true

  // 模拟表单提交
  setTimeout(() => {
    loading.value = false
    // eslint-disable-next-line no-alert
    alert('您的留言已提交成功，我们将尽快与您联系！')

    // 重置表单
    form.value = {
      name: '',
      company: '',
      phone: '',
      email: '',
      subject: null,
      message: '',
      agreement: false,
    }
  }, 1500)
}

// 常见问题数据
interface FAQ {
  question: string
  answer: string
}

const faqs = ref<FAQ[]>([
  {
    question: '你们的配送范围有哪些？',
    answer: '我们的配送范围主要覆盖江西省全境，包括南昌、九江、赣州、上饶等主要城市。对于大型客户，我们也可以提供跨省配送服务，具体请联系我们的客服人员咨询。',
  },
  {
    question: '如何成为你们的供应商？',
    answer: '我们欢迎优质的供应商加入我们的供应链网络。成为我们的供应商需要通过严格的资质审核和产品质量检测。如果您有意向，请发送相关资质和产品信息至business@jxhongrun.com，我们的采购团队会与您联系。',
  },
  {
    question: '你们的食品安全如何保障？',
    answer: '我们建立了完善的食品安全管理体系，获得了ISO9001质量管理体系认证和HACCP食品安全管理体系认证。我们对供应商有严格的筛选标准，对食材进行定期检测，并实施全程冷链物流，确保食品安全。',
  },
  {
    question: '最小起订量是多少？',
    answer: '不同产品的最小起订量有所不同，一般来说，我们针对学校食堂等机构客户，会根据实际需求量进行定制化配送，没有严格的最小起订量限制。具体请联系我们的销售人员咨询。',
  },
  {
    question: '如何申请退换货？',
    answer: '如果您收到的产品有质量问题，请在收货后24小时内联系我们的客服人员，提供相关证据（如照片），我们会根据实际情况安排退换货或赔偿。对于非质量问题的退换货，需根据具体合同条款处理。',
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
            联系我们
          </h1>
          <p class="mx-auto max-w-3xl text-lg opacity-90 md:text-xl">
            我们期待听到您的声音，随时为您提供专业的食品供应链解决方案
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

    <!-- 联系信息和地图 -->
    <section class="px-4 py-16">
      <div class="mx-auto max-w-7xl">
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <!-- 联系信息 -->
          <div>
            <div class="mb-4 inline-flex items-center justify-center rounded-full bg-sky-100 px-4 py-1 text-sm text-sky-700 font-medium">
              <i class="pi pi-phone mr-2" />联系方式
            </div>
            <h2 class="mb-6 text-3xl text-blue-900 font-bold">
              随时为您服务
            </h2>
            <div class="mb-8 h-1 w-16 bg-sky-500" />

            <div class="space-y-8">
              <div class="flex items-start">
                <div class="mr-4 h-12 w-12 flex flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                  <i class="pi pi-map-marker text-xl text-blue-900" />
                </div>
                <div>
                  <h3 class="mb-2 text-lg text-blue-900 font-bold">
                    公司地址
                  </h3>
                  <p class="text-gray-700">
                    江西省萍乡市安源区八一街汪公潭居委会公潭路
                  </p>
                  <p class="text-gray-700">
                    邮编: 337000
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="mr-4 h-12 w-12 flex flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                  <i class="pi pi-phone text-xl text-blue-900" />
                </div>
                <div>
                  <h3 class="mb-2 text-lg text-blue-900 font-bold">
                    联系电话
                  </h3>
                  <p class="text-gray-700">
                    客服热线: 0791-88888888
                  </p>
                  <p class="text-gray-700">
                    业务咨询: 0791-66666666
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="mr-4 h-12 w-12 flex flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                  <i class="pi pi-envelope text-xl text-blue-900" />
                </div>
                <div>
                  <h3 class="mb-2 text-lg text-blue-900 font-bold">
                    电子邮箱
                  </h3>
                  <p class="text-gray-700">
                    客户服务: service@jxhongrun.com
                  </p>
                  <p class="text-gray-700">
                    商务合作: business@jxhongrun.com
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="mr-4 h-12 w-12 flex flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                  <i class="pi pi-clock text-xl text-blue-900" />
                </div>
                <div>
                  <h3 class="mb-2 text-lg text-blue-900 font-bold">
                    办公时间
                  </h3>
                  <p class="text-gray-700">
                    周一至周五: 上午 8:30 - 下午 5:30
                  </p>
                  <p class="text-gray-700">
                    周六: 上午 9:00 - 下午 1:00
                  </p>
                  <p class="text-gray-700">
                    周日: 休息
                  </p>
                </div>
              </div>
            </div>

            <div class="mt-8">
              <h3 class="mb-4 text-lg text-blue-900 font-bold">
                关注我们
              </h3>
              <div class="flex space-x-4">
                <a href="#" class="h-10 w-10 flex items-center justify-center rounded-full bg-gray-200 transition-colors hover:bg-sky-500 hover:text-white">
                  <i class="pi pi-twitter" />
                </a>
                <a href="#" class="h-10 w-10 flex items-center justify-center rounded-full bg-gray-200 transition-colors hover:bg-sky-500 hover:text-white">
                  <i class="pi pi-comments" />
                </a>
                <a href="#" class="h-10 w-10 flex items-center justify-center rounded-full bg-gray-200 transition-colors hover:bg-sky-500 hover:text-white">
                  <i class="pi pi-globe" />
                </a>
              </div>
            </div>
          </div>

          <!-- 地图 -->
          <div>
            <div class="overflow-hidden rounded-xl bg-white shadow-lg">
              <div class="relative">
                <!-- 这里使用一个静态地图图片作为占位符，实际应用中可替换为真实地图组件 -->
                <LeafletMap h-96 />

                <!-- 地图标记 -->
                <!-- <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div class="h-16 w-16 flex animate-pulse items-center justify-center rounded-full bg-blue-900">
                    <div class="h-8 w-8 flex items-center justify-center rounded-full bg-sky-500">
                      <i class="pi pi-map-marker text-white" />
                    </div>
                  </div>
                  <div class="absolute left-1/2 h-4 w-4 transform rounded-full bg-blue-900 -bottom-2 -translate-x-1/2" />
                </div> -->

                <!-- 地图控制按钮 -->
                <div class="absolute bottom-4 right-4 flex space-x-2">
                  <button class="h-8 w-8 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100">
                    <i class="pi pi-plus" />
                  </button>
                  <button class="h-8 w-8 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100">
                    <i class="pi pi-minus" />
                  </button>
                </div>
              </div>

              <div class="border-t border-gray-100 p-4">
                <h3 class="text-blue-900 font-bold">
                  江西宏润配送有限公司
                </h3>
                <p class="text-sm text-gray-600">
                  江西省萍乡市安源区八一街汪公潭居委会公潭路
                </p>
                <div class="mt-2 flex justify-between">
                  <Button label="查看路线" icon="pi pi-directions" outlined class="p-button-sm" />
                  <Button label="导航到这里" icon="pi pi-map" class="p-button-sm border-blue-900 bg-blue-900" />
                </div>
              </div>
            </div>

            <!-- 交通指南 -->
            <div class="mt-8 rounded-xl bg-white p-6 shadow-md">
              <h3 class="mb-4 text-lg text-blue-900 font-bold">
                交通指南
              </h3>
              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="mr-3 h-8 w-8 flex flex-shrink-0 items-center justify-center rounded-full bg-sky-100">
                    <i class="pi pi-car text-sky-500" />
                  </div>
                  <div>
                    <h4 class="text-gray-800 font-bold">
                      自驾路线
                    </h4>
                    <p class="text-sm text-gray-600">
                      导航至"江西省萍乡市安源区八一街汪公潭居委会公潭路"，公司附近有专用停车场。
                    </p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="mr-3 h-8 w-8 flex flex-shrink-0 items-center justify-center rounded-full bg-sky-100">
                    <i class="pi pi-ticket text-sky-500" />
                  </div>
                  <div>
                    <h4 class="text-gray-800 font-bold">
                      公共交通
                    </h4>
                    <p class="text-sm text-gray-600">
                      乘坐9路，公交车至"安源宾馆"下车，步行约600米即到。
                    </p>
                    <p class="text-sm text-gray-600">
                      乘坐3路，公交车至"八一街办事处"下车，步行约200米即到。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系表单 -->
    <section class="bg-gray-100 px-4 py-16">
      <div class="mx-auto max-w-7xl">
        <div class="mb-12 text-center">
          <div class="mb-4 inline-flex items-center justify-center rounded-full bg-sky-100 px-4 py-1 text-sm text-sky-700 font-medium">
            <i class="pi pi-send mr-2" />留言咨询
          </div>
          <h2 class="mb-4 text-3xl text-blue-900 font-bold">
            有任何问题？请联系我们
          </h2>
          <div class="mx-auto mb-6 h-1 w-16 bg-sky-500" />
          <p class="mx-auto max-w-3xl text-lg text-gray-700">
            填写下面的表单，我们的客服人员将在24小时内与您联系
          </p>
        </div>

        <div class="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-md">
          <form @submit.prevent="submitForm">
            <div class="grid grid-cols-1 mb-6 gap-6 md:grid-cols-2">
              <div>
                <label for="name" class="mb-1 block text-sm text-gray-700 font-medium">姓名</label>
                <InputText id="name" v-model="form.name" placeholder="请输入您的姓名" class="w-full" />
              </div>
              <div>
                <label for="company" class="mb-1 block text-sm text-gray-700 font-medium">公司名称</label>
                <InputText id="company" v-model="form.company" placeholder="请输入您的公司名称" class="w-full" />
              </div>
              <div>
                <label for="phone" class="mb-1 block text-sm text-gray-700 font-medium">联系电话</label>
                <InputText id="phone" v-model="form.phone" placeholder="请输入您的联系电话" class="w-full" />
              </div>
              <div>
                <label for="email" class="mb-1 block text-sm text-gray-700 font-medium">电子邮箱</label>
                <InputText id="email" v-model="form.email" placeholder="请输入您的电子邮箱" class="w-full" />
              </div>
            </div>

            <div class="mb-6">
              <label for="subject" class="mb-1 block text-sm text-gray-700 font-medium">咨询主题</label>
              <Dropdown id="subject" v-model="form.subject" :options="subjectOptions" option-label="name" placeholder="请选择咨询主题" class="w-full" />
            </div>

            <div class="mb-6">
              <label for="message" class="mb-1 block text-sm text-gray-700 font-medium">留言内容</label>
              <Textarea id="message" v-model="form.message" placeholder="请输入您的留言内容" rows="5" class="w-full" />
            </div>

            <div class="mb-6 flex items-center">
              <Checkbox id="agreement" v-model="form.agreement" :binary="true" />
              <label for="agreement" class="ml-2 text-sm text-gray-600">
                我同意根据<a href="#" class="text-sky-600 hover:underline">隐私政策</a>处理我的个人数据
              </label>
            </div>

            <div class="flex justify-center">
              <Button type="submit" label="提交留言" icon="pi pi-send" class="border-blue-900 bg-blue-900 px-8" :loading="loading" />
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- 常见问题 -->
    <section class="px-4 py-16">
      <div class="mx-auto max-w-7xl">
        <div class="mb-12 text-center">
          <div class="mb-4 inline-flex items-center justify-center rounded-full bg-sky-100 px-4 py-1 text-sm text-sky-700 font-medium">
            <i class="pi pi-question-circle mr-2" />常见问题
          </div>
          <h2 class="mb-4 text-3xl text-blue-900 font-bold">
            常见问题解答
          </h2>
          <div class="mx-auto mb-6 h-1 w-16 bg-sky-500" />
          <p class="mx-auto max-w-3xl text-lg text-gray-700">
            以下是客户经常咨询的问题，如果您有其他疑问，欢迎随时联系我们
          </p>
        </div>

        <div class="mx-auto max-w-4xl">
          <Accordion :active-index="0">
            <AccordionTab v-for="(faq, index) in faqs" :key="index" :header="faq.question">
              <p class="text-gray-700">
                {{ faq.answer }}
              </p>
            </AccordionTab>
          </Accordion>

          <div class="mt-8 text-center">
            <p class="mb-4 text-gray-700">
              还有其他问题？
            </p>
            <Button label="联系客服" icon="pi pi-comments" class="border-blue-900 bg-blue-900" />
          </div>
        </div>
      </div>
    </section>

    <!-- 联系我们 CTA -->
    <section class="from-blue-900 to-blue-800 bg-gradient-to-r px-4 py-16 text-white">
      <div class="mx-auto max-w-7xl text-center">
        <h2 class="mb-6 text-3xl font-bold">
          准备开始合作？
        </h2>
        <p class="mx-auto mb-8 max-w-2xl text-lg opacity-90">
          无论您是学校食堂、企业餐厅还是其他机构，我们都能为您提供专业的食品供应链解决方案
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <Button
            label="立即咨询" icon="pi pi-phone"
            class="border-white bg-white text-blue-900 hover:bg-gray-100"
          />
          <Button
            label="查看产品" icon="pi pi-shopping-bag" outlined
            class="border-white text-white hover:bg-white/10"
          />
        </div>
      </div>
    </section>
  </MainLayout>
</template>

<style scoped>
/* 自定义样式 */
:deep(.p-inputtext:focus) {
  border-color: #0ea5e9;
  box-shadow: 0 0 0 1px #0ea5e9;
}

:deep(.p-dropdown:not(.p-disabled).p-focus) {
  border-color: #0ea5e9;
  box-shadow: 0 0 0 1px #0ea5e9;
}

:deep(.p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-focus) {
  border-color: #0ea5e9;
  box-shadow: 0 0 0 1px #0ea5e9;
}

:deep(.p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-highlight) {
  background: #0ea5e9;
  border-color: #0ea5e9;
}

:deep(.p-accordion .p-accordion-header:not(.p-disabled).p-highlight .p-accordion-header-link) {
  background: #f0f9ff;
  border-color: #e0f2fe;
  color: #0ea5e9;
}

:deep(.p-accordion .p-accordion-header:not(.p-disabled) .p-accordion-header-link:focus) {
  box-shadow: 0 0 0 1px #0ea5e9;
}

:deep(.p-accordion .p-accordion-header:not(.p-highlight):not(.p-disabled):hover .p-accordion-header-link) {
  background: #f0f9ff;
  border-color: #e0f2fe;
}

/* 地图标记动画 */
@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(30, 58, 138, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(30, 58, 138, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(30, 58, 138, 0);
  }
}

.animate-pulse {
  animation: pulse 2s infinite;
}
</style>
