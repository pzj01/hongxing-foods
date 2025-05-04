<script setup lang="ts">
import type { Purchase } from '~/composables/purchase'
import { format } from 'date-fns'
import { useConfirm } from 'primevue/useconfirm'
import { useToast } from 'primevue/usetoast'
import { suppliers, suppliersMap, usePurchaseStore } from '~/composables/purchase'
import { Role } from '~/types'

const { purchases, addPurchase, updatePurchase, deletePurchase } = usePurchaseStore()
const { productsMap, products } = useProductStore()
const { user } = useUserStore()
const toast = useToast()
const confirm = useConfirm()

const defaultForm: Purchase = {
  id: 0,
  supplier_id: 0,
  product_id: 0,
  date: new Date(),
  quantity: 0,
  unit_price: 0,
  remarks: '',
}

const header = ref('')
const form = reactive<Purchase>({
  ...defaultForm,
})
const [isVisible, toggle] = useToggle()
const selectedPurchase = ref<Purchase[]>([])

function clickAdd() {
  resetForm()
  toggle(true)
  header.value = '添加采购'
}

function clickEdit() {
  if (selectedPurchase.value.length === 0) {
    toast.add({
      severity: 'warn',
      summary: '警告',
      detail: '请选择要修改的采购',
      life: 3000,
    })
    return
  }

  if (selectedPurchase.value.length > 1) {
    toast.add({
      severity: 'warn',
      summary: '警告',
      detail: '一次只能选择一个采购进行修改',
      life: 3000,
    })
    return
  }

  const selected = selectedPurchase.value[0]

  Object.assign(form, selected)
  header.value = '修改采购'
  toggle(true)
}

function resetForm() {
  Object.assign(form, defaultForm)
}

function handleSubmit() {
  // 排除id和备注
  if (Object.values({ ...form, id: 1, remarks: '666' }).some(v => !v)) {
    toast.add({
      severity: 'warn',
      summary: '警告',
      detail: '请填写完整信息',
      life: 3000,
    })
    return
  }
  // console.log(form)

  if (form.id) {
    updatePurchase(form)
  }
  else {
    addPurchase(form)
  }
  toggle(false)
  resetForm()
}

function clickDelete() {
  const ids = selectedPurchase.value.map(v => v.id)

  if (ids.length === 0) {
    toast.add({
      severity: 'warn',
      summary: '警告',
      detail: '请选择要删除的采购',
      life: 3000,
    })
    return
  }

  confirm.require({
    header: '确认删除',
    message: `确认删除${ids.length > 1 ? '这些采购' : '这个采购'}吗?`,
    icon: 'i-carbon-warning',
    rejectProps: {
      label: '取消',
      severity: 'secondary',
      outlined: true,
    },
    acceptProps: {
      label: '删除',
      severity: 'danger',
    },
    accept: () => {
      deletePurchase(ids)
      selectedPurchase.value = []
    },
  })
}
</script>

<template>
  <div>
    <DataTable v-model:selection="selectedPurchase" style="width: calc(100vw - 232px)" scroll-height="600px" data-key="id" :value="purchases" scrollable striped-rows paginator :rows="5" :rows-per-page-options="[5, 10, 20, 50]">
      <template #header>
        <div v-if="user?.role !== Role.VIEWER" class="flex gap-x-2">
          <Button label="添加采购" @click="clickAdd">
            <template #icon>
              <i i-carbon-add />
            </template>
          </Button>
          <Button severity="danger" label="删除采购" @click="clickDelete">
            <template #icon>
              <i i-carbon-trash-can />
            </template>
          </Button>
          <Button severity="secondary" label="修改采购" @click="clickEdit">
            <template #icon>
              <i i-carbon-edit />
            </template>
          </Button>
        </div>
      </template>
      <template #empty>
        <p text="center gray-500">
          暂无采购
        </p>
      </template>
      <template #loading>
        <p text-center>
          采购数据加载中，请稍等
        </p>
      </template>
      <Column selection-mode="multiple" header-style="width: 3rem" />
      <Column field="id" header="采购编号" style="min-width: 8em;" />
      <Column field="supplier_id" header="供应商" style="min-width: 10em;">
        <template #body="{ data, field }">
          {{ suppliersMap[data[field]].name }}
        </template>
      </Column>
      <Column field="product_id" header="产品" style="min-width: 10em;">
        <template #body="{ data, field }">
          {{ productsMap[data[field]].name }}
        </template>
      </Column>
      <Column field="date" data-type="date" header="日期" style="min-width: 10em;">
        <template #body="{ data, field }">
          {{ format(data[field], 'yyyy-MM-dd') }}
        </template>
      </Column>
      <Column field="quantity" header="库存" style="min-width: 4em;" />
      <Column field="unit_price" header="单价" style="min-width: 6em;" />
      <Column header="总价" style="min-width: 6em;">
        <template #body="{ data }">
          {{ data.quantity * data.unit_price }}
        </template>
      </Column>
      <Column field="remarks" header="备注" style="min-width: 10em;" />
    </DataTable>
  </div>
  <Dialog v-model:visible="isVisible" modal :header :style="{ width: '25rem' }">
    <form mt-8 space-y-10>
      <FloatLabel>
        <Select v-model="form.supplier_id" input-id="supplier_id" :options="suppliers" option-label="name" option-value="id" fluid />
        <label for="supplier_id">供应商</label>
      </FloatLabel>
      <FloatLabel>
        <Select v-model="form.product_id" input-id="product_id" :options="products" option-label="name" option-value="id" fluid />
        <label for="product_id">产品</label>
      </FloatLabel>
      <div>
        <label for="date" style="color: var(--p-form-field-color)" class="mb-2 block font-bold">日期</label>
        <DatePicker v-model="form.date" fluid placeholder="日期" date-format="yy/mm/dd" />
      </div>
      <div>
        <label for="quantity" style="color: var(--p-form-field-color)" class="mb-2 block font-bold">数量</label>
        <InputNumber v-model="form.quantity" show-buttons button-layout="horizontal" style="width: 3rem" :min="0">
          <template #incrementicon>
            <i i-carbon-add />
          </template>
          <template #decrementicon>
            <i i-carbon-subtract />
          </template>
        </InputNumber>
      </div>
      <div>
        <label for="unit_price" style="color: var(--p-form-field-color)" class="mb-2 block font-bold">单价</label>
        <InputNumber v-model="form.unit_price" show-buttons button-layout="horizontal" style="width: 3rem" :min="0">
          <template #incrementicon>
            <i i-carbon-add />
          </template>
          <template #decrementicon>
            <i i-carbon-subtract />
          </template>
        </InputNumber>
      </div>
      <FloatLabel>
        <Textarea id="remarks" v-model="form.remarks" fluid />
        <label for="remarks">备注</label>
      </FloatLabel>
      <Button fluid @click="handleSubmit">
        提交
      </Button>
      <Button fluid variant="outlined" severity="secondary" @click="toggle(false)">
        取消
      </Button>
    </form>
  </Dialog>
</template>
