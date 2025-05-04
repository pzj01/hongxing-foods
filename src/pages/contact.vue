<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { email, helpers, required } from '@vuelidate/validators'
import { Bus, Car, CheckCircle, Clock, Mail, MapPin, Phone, QrCode } from 'lucide-vue-next'

// 联系表单
const contactForm = reactive({
  name: '',
  phone: '',
  email: '',
  subject: null,
  message: '',
  agreement: false,
})

// 表单验证规则
const rules = {
  name: { required: helpers.withMessage('请输入您的姓名', required) },
  phone: { required: helpers.withMessage('请输入您的电话', required) },
  email: {
    required: helpers.withMessage('请输入您的邮箱', required),
    email: helpers.withMessage('请输入有效的邮箱地址', email),
  },
  subject: { required: helpers.withMessage('请选择主题', required) },
  message: { required: helpers.withMessage('请输入您的消息', required) },
  agreement: {
    required: helpers.withMessage('请同意隐私政策', (value: boolean) => value === true),
  },
}

const v$ = useVuelidate(rules, contactForm)

// 提交状态
const submitting = ref(false)
const showSuccessDialog = ref(false)

// 提交表单
async function submitForm() {
  const isFormValid = await v$.value.$validate()

  if (isFormValid) {
    submitting.value = true

    // 模拟API请求
    setTimeout(() => {
      submitting.value = false
      showSuccessDialog.value = true

      // 重置表单
      contactForm.name = ''
      contactForm.phone = ''
      contactForm.email = ''
      contactForm.subject = null
      contactForm.message = ''
      contactForm.agreement = false

      // 重置验证状态
      v$.value.$reset()
    }, 1500)
  }
}

// 主题选项
const subjectOptions = [
  { name: '产品咨询', code: 'product' },
  { name: '配送服务', code: 'delivery' },
  { name: '合作洽谈', code: 'cooperation' },
  { name: '投诉建议', code: 'feedback' },
  { name: '其他', code: 'other' },
]

// 常见问题
const faqs = [
  {
    question: '你们的配送范围是哪些地区？',
    answer: '我们目前的配送范围主要覆盖萍乡市区及周边地区，包括安源区、湘东区、莲花县、上栗县和芦溪县。如果您在这些区域之外，可以联系我们的客服，我们会根据具体情况为您安排配送。',
  },
  {
    question: '如何成为你们的合作学校？',
    answer: '学校可以通过电话、邮件或在线表单联系我们的商务部门。我们会安排专业的客户经理与您沟通，了解您的需求，并提供定制化的食材配送方案。我们会根据学校的规模、学生数量和餐饮需求，制定合适的合作计划。',
  },
  {
    question: '你们的食品安全如何保障？',
    answer: '我们非常重视食品安全，已获得ISO9001质量管理体系认证和HACCP食品安全管理体系认证。我们从源头把控食材质量，所有供应商都经过严格筛选，并定期进行食品安全检测。我们的冷链物流系统确保食材在运输过程中保持新鲜和安全。',
  },
  {
    question: '是否提供紧急配送服务？',
    answer: '是的，我们提供紧急配送服务。如果您有紧急需求，可以联系我们的客服热线，我们会尽快安排配送。不过，为了确保服务质量，我们建议客户提前规划订单，以便我们更好地安排物流和配送。',
  },
  {
    question: '如何查询订单状态？',
    answer: '您可以通过我们的官方网站或微信公众号登录账户查询订单状态。输入订单号或通过账户历史记录，可以查看订单的处理状态、配送进度等信息。如有任何问题，也可以直接联系我们的客服团队。',
  },
  {
    question: '你们接受退换货吗？',
    answer: '我们接受因产品质量问题导致的退换货。如果您收到的产品有质量问题，请在收货后24小时内联系我们的客服，并提供相关证据（如照片）。我们会根据实际情况为您安排退换货或赔偿。对于非质量问题的退换货，需根据具体情况评估。',
  },
]

// 在线客服
function openChat() {
  // 实际项目中，这里会打开在线客服系统
  // eslint-disable-next-line no-alert
  alert('在线客服功能即将上线，敬请期待！')
}

// 订阅相关
const newsletter = reactive({
  name: '',
  email: '',
})

const subscribing = ref(false)
const showSubscribeDialog = ref(false)

// 订阅通讯
function subscribeNewsletter() {
  if (!newsletter.email) {
    // eslint-disable-next-line no-alert
    alert('请输入您的邮箱地址')
    return
  }

  subscribing.value = true

  // 模拟API请求
  setTimeout(() => {
    subscribing.value = false
    showSubscribeDialog.value = true

    // 重置表单
    newsletter.name = ''
    newsletter.email = ''
  }, 1500)
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
            联系我们
          </h1>
          <p class="mb-10 text-xl text-white/90">
            我们期待听到您的声音，无论是咨询、合作还是建议，都欢迎与我们联系
          </p>
        </div>
      </div>

      <div class="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="h-auto w-full">
          <path fill="#ffffff" fill-opacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </div>
    </section>

    <!-- 联系信息卡片 -->
    <section class="relative bg-white py-16 -mt-10">
      <div class="mx-auto px-6 container">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-4 md:grid-cols-2">
          <div class="transform rounded-2xl bg-white p-8 shadow-lg transition-transform hover:scale-105 hover:shadow-xl">
            <div class="mx-auto mb-6 h-16 w-16 flex items-center justify-center rounded-full bg-amber-100">
              <MapPin class="h-8 w-8 text-amber-600" />
            </div>
            <h3 class="mb-3 text-center text-xl text-amber-800 font-bold">
              公司地址
            </h3>
            <p class="text-center text-amber-700">
              萍乡市安源区<br>城南宝塔路45号
            </p>
          </div>

          <div class="transform rounded-2xl bg-white p-8 shadow-lg transition-transform hover:scale-105 hover:shadow-xl">
            <div class="mx-auto mb-6 h-16 w-16 flex items-center justify-center rounded-full bg-amber-100">
              <Phone class="h-8 w-8 text-amber-600" />
            </div>
            <h3 class="mb-3 text-center text-xl text-amber-800 font-bold">
              联系电话
            </h3>
            <p class="text-center text-amber-700">
              客服热线: 0799-XXXXXXXX<br>
              业务咨询: 0799-XXXXXXXX<br>
              手机: 138-XXXX-XXXX
            </p>
          </div>

          <div class="transform rounded-2xl bg-white p-8 shadow-lg transition-transform hover:scale-105 hover:shadow-xl">
            <div class="mx-auto mb-6 h-16 w-16 flex items-center justify-center rounded-full bg-amber-100">
              <Mail class="h-8 w-8 text-amber-600" />
            </div>
            <h3 class="mb-3 text-center text-xl text-amber-800 font-bold">
              电子邮箱
            </h3>
            <p class="text-center text-amber-700">
              客户服务: service@hongxingfood.com<br>
              商务合作: business@hongxingfood.com<br>
              人力资源: hr@hongxingfood.com
            </p>
          </div>

          <div class="transform rounded-2xl bg-white p-8 shadow-lg transition-transform hover:scale-105 hover:shadow-xl">
            <div class="mx-auto mb-6 h-16 w-16 flex items-center justify-center rounded-full bg-amber-100">
              <Clock class="h-8 w-8 text-amber-600" />
            </div>
            <h3 class="mb-3 text-center text-xl text-amber-800 font-bold">
              营业时间
            </h3>
            <p class="text-center text-amber-700">
              周一至周五: 8:00 - 18:00<br>
              周六: 9:00 - 16:00<br>
              周日: 休息
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 地图和联系表单 -->
    <section class="relative bg-amber-50 py-16">
      <div class="mx-auto px-6 container">
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <!-- 地图部分 -->
          <div class="order-2 lg:order-1">
            <h2 class="relative mb-6 inline-block text-3xl text-amber-800 font-bold">
              我们的位置
              <span class="absolute left-0 h-1 w-1/2 bg-amber-500 -bottom-2" />
            </h2>
            <p class="mb-6 text-lg text-amber-700">
              我们位于萍乡市安源区城南宝塔路45号，交通便利，欢迎您前来参观访问。
            </p>

            <!-- 地图容器 -->
            <div class="relative mb-6 h-[400px] overflow-hidden rounded-2xl shadow-xl">
              <LeafletMap />
            </div>

            <!-- 交通指南 -->
            <div class="rounded-xl bg-white p-6 shadow-md">
              <h3 class="mb-4 text-xl text-amber-800 font-bold">
                交通指南
              </h3>
              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="mr-3 h-8 w-8 flex shrink-0 items-center justify-center rounded-full bg-amber-100">
                    <Car class="h-4 w-4 text-amber-600" />
                  </div>
                  <div>
                    <h4 class="text-amber-800 font-semibold">
                      自驾路线
                    </h4>
                    <p class="text-amber-700">
                      打开地图导航，输入"萍乡市安源区城南宝塔路45号"即可到达。
                    </p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="mr-3 h-8 w-8 flex shrink-0 items-center justify-center rounded-full bg-amber-100">
                    <Bus class="h-4 w-4 text-amber-600" />
                  </div>
                  <div>
                    <h4 class="text-amber-800 font-semibold">
                      公共交通
                    </h4>
                    <p class="text-amber-700">
                      萍乡火车站下，乘坐1路公交车至"城南客运站"下车，步行约100米即可到达。
                    </p>
                    <p class="mt-2 text-amber-700">
                      萍乡北站下，乘坐9路公交车至"城南站"下车，步行约150米即可到达。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 联系表单 -->
          <div class="order-1 lg:order-2">
            <h2 class="relative mb-6 inline-block text-3xl text-amber-800 font-bold">
              发送消息
              <span class="absolute left-0 h-1 w-1/2 bg-amber-500 -bottom-2" />
            </h2>
            <p class="mb-6 text-lg text-amber-700">
              如果您有任何问题或需求，请填写下面的表单，我们会尽快回复您。
            </p>

            <div class="rounded-2xl bg-white p-8 shadow-xl">
              <form class="space-y-6" @submit.prevent="submitForm">
                <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div class="p-field">
                    <label for="name" class="mb-2 block text-amber-800 font-medium">姓名 <span class="text-red-500">*</span></label>
                    <InputText
                      id="name"
                      v-model="contactForm.name"
                      class="custom-input w-full"
                      :class="{ 'p-invalid': v$.name.$error }"
                      aria-describedby="name-error"
                    />
                    <small v-if="v$.name.$error" id="name-error" class="p-error mt-1 block">
                      {{ v$.name.$errors[0].$message }}
                    </small>
                  </div>

                  <div class="p-field">
                    <label for="phone" class="mb-2 block text-amber-800 font-medium">电话 <span class="text-red-500">*</span></label>
                    <InputText
                      id="phone"
                      v-model="contactForm.phone"
                      class="custom-input w-full"
                      :class="{ 'p-invalid': v$.phone.$error }"
                      aria-describedby="phone-error"
                    />
                    <small v-if="v$.phone.$error" id="phone-error" class="p-error mt-1 block">
                      {{ v$.phone.$errors[0].$message }}
                    </small>
                  </div>
                </div>

                <div class="p-field">
                  <label for="email" class="mb-2 block text-amber-800 font-medium">邮箱 <span class="text-red-500">*</span></label>
                  <InputText
                    id="email"
                    v-model="contactForm.email"
                    class="custom-input w-full"
                    :class="{ 'p-invalid': v$.email.$error }"
                    aria-describedby="email-error"
                  />
                  <small v-if="v$.email.$error" id="email-error" class="p-error mt-1 block">
                    {{ v$.email.$errors[0].$message }}
                  </small>
                </div>

                <div class="p-field">
                  <label for="subject" class="mb-2 block text-amber-800 font-medium">主题 <span class="text-red-500">*</span></label>
                  <Dropdown
                    id="subject"
                    v-model="contactForm.subject"
                    :options="subjectOptions"
                    option-label="name"
                    placeholder="选择主题"
                    class="custom-dropdown w-full"
                    :class="{ 'p-invalid': v$.subject.$error }"
                    aria-describedby="subject-error"
                  />
                  <small v-if="v$.subject.$error" id="subject-error" class="p-error mt-1 block">
                    {{ v$.subject.$errors[0].$message }}
                  </small>
                </div>

                <div class="p-field">
                  <label for="message" class="mb-2 block text-amber-800 font-medium">消息 <span class="text-red-500">*</span></label>
                  <Textarea
                    id="message"
                    v-model="contactForm.message"
                    rows="5"
                    class="custom-textarea w-full"
                    :class="{ 'p-invalid': v$.message.$error }"
                    aria-describedby="message-error"
                  />
                  <small v-if="v$.message.$error" id="message-error" class="p-error mt-1 block">
                    {{ v$.message.$errors[0].$message }}
                  </small>
                </div>

                <div class="flex items-center">
                  <Checkbox
                    id="agreement"
                    v-model="contactForm.agreement"
                    :binary="true"
                    class="mr-2"
                    :class="{ 'p-invalid': v$.agreement.$error }"
                  />
                  <label for="agreement" class="text-amber-700">
                    我同意根据<a href="#" class="text-amber-600 hover:underline">隐私政策</a>处理我的个人数据
                    <span class="text-red-500">*</span>
                  </label>
                </div>
                <small v-if="v$.agreement.$error" class="p-error block">
                  {{ v$.agreement.$errors[0].$message }}
                </small>

                <Button
                  type="submit"
                  label="发送消息"
                  icon="pi pi-send"
                  class="p-button-rounded custom-button w-full"
                  :loading="submitting"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 常见问题 -->
    <section class="relative bg-white py-16">
      <div class="mx-auto px-6 container">
        <div class="mb-16 text-center">
          <h2 class="relative mb-4 inline-block text-3xl text-amber-800 font-bold md:text-4xl">
            常见问题
            <span class="absolute left-1/4 h-1 w-1/2 bg-amber-500 -bottom-2" />
          </h2>
          <p class="mx-auto mt-6 max-w-3xl text-xl text-amber-700">
            以下是我们客户经常咨询的问题，希望能帮助您快速找到所需信息
          </p>
        </div>

        <div class="mx-auto max-w-3xl">
          <Accordion :active-index="0">
            <AccordionTab v-for="(faq, index) in faqs" :key="index" :header="faq.question">
              <p class="text-amber-700">
                {{ faq.answer }}
              </p>
            </AccordionTab>
          </Accordion>
        </div>

        <div class="mt-12 text-center">
          <p class="mb-6 text-lg text-amber-700">
            没有找到您想要的答案？请直接联系我们的客服团队
          </p>
          <Button
            label="在线客服"
            icon="pi pi-comments"
            class="p-button-rounded custom-button"
            @click="openChat"
          />
        </div>
      </div>
    </section>

    <!-- 社交媒体和订阅 -->
    <section class="relative bg-amber-50 py-16">
      <div class="mx-auto px-6 container">
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <!-- 社交媒体 -->
          <div>
            <h2 class="relative mb-6 inline-block text-3xl text-amber-800 font-bold">
              关注我们
              <span class="absolute left-0 h-1 w-1/2 bg-amber-500 -bottom-2" />
            </h2>
            <p class="mb-8 text-lg text-amber-700">
              关注我们的社交媒体，获取最新的产品信息、促销活动和行业资讯
            </p>

            <div class="grid grid-cols-2 gap-6 md:grid-cols-4">
              <a href="#" class="flex flex-col transform items-center justify-center rounded-xl bg-white p-6 shadow-md transition-transform hover:scale-105 hover:shadow-lg">
                <div class="mb-3 h-12 w-12 flex items-center justify-center rounded-full bg-amber-100">
                  <i class="i-carbon-logo-wechat text-xl text-amber-600" />
                </div>
                <span class="text-amber-800 font-medium">微信</span>
              </a>

              <a href="#" class="flex flex-col transform items-center justify-center rounded-xl bg-white p-6 shadow-md transition-transform hover:scale-105 hover:shadow-lg">
                <div class="mb-3 h-12 w-12 flex items-center justify-center rounded-full bg-amber-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Material Design Icons by Pictogrammers - https://github.com/Templarian/MaterialDesign/blob/master/LICENSE --><path fill-amber-600 d="M9.82 13.87c1.07 0 1.95.87 1.95 1.95a1.95 1.95 0 0 1-1.95 1.95c-1.08 0-1.95-.88-1.95-1.95c0-1.08.87-1.95 1.95-1.95M14.5 3.34l.68-.03c3.76 0 6.82 3.06 6.82 6.82l-.05.82l-1.19-.37l.02-.45c0-3.09-2.51-5.6-5.6-5.6l-.35.01zm.82 2.89c2.06.07 3.73 1.77 3.76 3.83l-1.24-.38c-.19-1.12-1.06-2-2.17-2.18zM2 15.41c-.03-.61.07-2.77 2.95-5.44c3.4-3.16 4.87-2.92 4.87-2.92s3.18-.3 1.24 3.41h.07c.47-.5 1.49-1.25 3.56-1.46c2.08-.21 2.08 1.5 1.81 2.7c1.88.94 3.06 2.33 3.06 3.88c0 2.82-3.93 5.11-8.78 5.11h-.28c-3.5 0-6.5-1.27-7.79-3.1c-.46-.62-.71-1.3-.71-2.01zm7.82-3.49c-3.23 0-5.85 1.75-5.85 3.9s2.62 3.9 5.85 3.9s5.85-1.75 5.85-3.9s-2.62-3.9-5.85-3.9" /></svg>
                </div>
                <span class="text-amber-800 font-medium">微博</span>
              </a>

              <a href="#" class="flex flex-col transform items-center justify-center rounded-xl bg-white p-6 shadow-md transition-transform hover:scale-105 hover:shadow-lg">
                <div class="mb-3 h-12 w-12 flex items-center justify-center rounded-full bg-amber-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Material Design Icons by Pictogrammers - https://github.com/Templarian/MaterialDesign/blob/master/LICENSE --><path fill-amber-600 d="M3.18 13.54c.58-1.38 1.39-2.4 1.99-2.62c-.01-.8.14-1.3.39-1.7c0-.03-.06-.36.16-.77C5.87 4.85 8.21 2 12 2s6.13 2.85 6.28 6.45c.22.41.16.74.16.77c.25.4.4.9.39 1.7c.6.22 1.41 1.24 1.99 2.63c.75 1.76.87 3.45.27 3.75c-.41.2-1.06-.3-1.67-1.18c-.24.98-.84 1.88-1.69 2.59c.9.33 1.48.87 1.48 1.48c0 1-1.58 1.81-3.52 1.81c-1.76 0-3.19-.66-3.48-1.5h-.42c-.29.84-1.72 1.5-3.48 1.5c-1.94 0-3.52-.81-3.52-1.81c0-.61.58-1.15 1.48-1.48c-.85-.71-1.45-1.61-1.69-2.59c-.61.88-1.26 1.38-1.67 1.18c-.6-.3-.48-1.99.27-3.76" /></svg>
                </div>
                <span class="text-amber-800 font-medium">QQ</span>
              </a>

              <a href="#" class="flex flex-col transform items-center justify-center rounded-xl bg-white p-6 shadow-md transition-transform hover:scale-105 hover:shadow-lg">
                <div class="mb-3 h-12 w-12 flex items-center justify-center rounded-full bg-amber-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from BoxIcons by Atisa - https://creativecommons.org/licenses/by/4.0/ --><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74a2.89 2.89 0 0 1 2.31-4.64a2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill-amber-600 /></svg>
                </div>
                <span class="text-amber-800 font-medium">抖音</span>
              </a>
            </div>

            <div class="mt-8 rounded-xl bg-white p-6 shadow-md">
              <div class="flex items-center">
                <div class="mr-6 h-24 w-24 flex shrink-0 items-center justify-center rounded-lg bg-amber-100">
                  <QrCode class="h-12 w-12 text-amber-600" />
                </div>
                <div>
                  <h3 class="mb-2 text-xl text-amber-800 font-bold">
                    扫码关注公众号
                  </h3>
                  <p class="text-amber-700">
                    关注我们的官方微信公众号，获取更多优惠信息和行业资讯
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- 订阅 -->
          <div>
            <h2 class="relative mb-6 inline-block text-3xl text-amber-800 font-bold">
              订阅我们
              <span class="absolute left-0 h-1 w-1/2 bg-amber-500 -bottom-2" />
            </h2>
            <p class="mb-8 text-lg text-amber-700">
              订阅我们的电子邮件，定期获取产品更新、促销活动和行业新闻
            </p>

            <div class="rounded-2xl bg-white p-8 shadow-lg">
              <h3 class="mb-4 text-xl text-amber-800 font-bold">
                加入我们的邮件列表
              </h3>
              <p class="mb-6 text-amber-700">
                我们会定期发送有关食品行业的最新资讯、产品更新和促销活动。我们承诺不会向您发送垃圾邮件。
              </p>

              <form class="space-y-4" @submit.prevent="subscribeNewsletter">
                <div class="p-field">
                  <label for="subscribe-name" class="mb-2 block text-amber-800 font-medium">姓名</label>
                  <InputText id="subscribe-name" v-model="newsletter.name" class="custom-input w-full" />
                </div>

                <div class="p-field">
                  <label for="subscribe-email" class="mb-2 block text-amber-800 font-medium">邮箱 <span class="text-red-500">*</span></label>
                  <InputText id="subscribe-email" v-model="newsletter.email" class="custom-input w-full" />
                </div>

                <Button
                  type="submit"
                  label="订阅"
                  icon="pi pi-envelope"
                  class="p-button-rounded custom-button w-full"
                  :loading="subscribing"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </MainLayout>
  <!-- 成功提交消息对话框 -->
  <Dialog v-model:visible="showSuccessDialog" modal header="提交成功" :style="{ width: '90%', maxWidth: '400px' }">
    <div class="p-4 text-center">
      <div class="mx-auto mb-4 h-16 w-16 flex items-center justify-center rounded-full bg-green-100">
        <CheckCircle class="h-8 w-8 text-green-600" />
      </div>
      <h3 class="mb-2 text-xl text-amber-800 font-bold">
        消息已发送
      </h3>
      <p class="mb-4 text-amber-700">
        感谢您的留言，我们会尽快回复您！
      </p>
      <Button label="确定" class="p-button-rounded custom-button" @click="showSuccessDialog = false" />
    </div>
  </Dialog>

  <!-- 订阅成功对话框 -->
  <Dialog v-model:visible="showSubscribeDialog" modal header="订阅成功" :style="{ width: '90%', maxWidth: '400px' }">
    <div class="p-4 text-center">
      <div class="mx-auto mb-4 h-16 w-16 flex items-center justify-center rounded-full bg-green-100">
        <CheckCircle class="h-8 w-8 text-green-600" />
      </div>
      <h3 class="mb-2 text-xl text-amber-800 font-bold">
        订阅成功
      </h3>
      <p class="mb-4 text-amber-700">
        感谢您的订阅，我们会定期向您发送最新资讯！
      </p>
      <Button label="确定" class="p-button-rounded custom-button" @click="showSubscribeDialog = false" />
    </div>
  </Dialog>
</template>

<style scoped>
/* 自定义PrimeVue组件样式 */
:deep(.p-dropdown.p-invalid) {
  border-color: #ef4444;
}

:deep(.p-inputtext.p-invalid) {
  border-color: #ef4444;
}

:deep(.p-textarea.p-invalid) {
  border-color: #ef4444;
}

:deep(.p-accordion .p-accordion-header .p-accordion-header-link) {
  background-color: #fff;
  color: #92400e;
  border-color: #fef3c7;
}

:deep(.p-accordion .p-accordion-header:not(.p-disabled).p-highlight .p-accordion-header-link) {
  background-color: #fef3c7;
  color: #92400e;
  border-color: #f59e0b;
}

:deep(.p-accordion .p-accordion-header:not(.p-disabled).p-highlight:hover .p-accordion-header-link) {
  background-color: #fef3c7;
  color: #92400e;
}

:deep(.p-accordion .p-accordion-content) {
  border-color: #fef3c7;
  padding: 1.25rem;
}

:deep(.p-dialog-header) {
  background-color: #d97706;
  color: white;
}

:deep(.p-dialog-header-close) {
  color: white;
}

/* 地图样式 */
.map-container {
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: 1rem;
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

/* 响应式调整 */
@media (max-width: 768px) {
  .map-container {
    height: 300px;
  }
}
</style>
