<script setup lang="ts">
import type { Product } from '~/composables/product'
import { FilterMatchMode } from '@primevue/core/api'
import { format } from 'date-fns'
import { useConfirm } from 'primevue/useconfirm'
import { useToast } from 'primevue/usetoast'
import { useProductStore } from '~/composables/product'
import { Category, CategoryList, PackagingType, PackagingTypeList, Role, Unit, UnitList, WeightUnit, WeightUnitList } from '~/types'

const { products, addProduct, updateProduct, deleteProduct } = useProductStore()
const { user } = useUserStore()
const toast = useToast()
const confirm = useConfirm()

const filters = ref({
  name: { value: null, matchMode: FilterMatchMode.CONTAINS },
})

const defaultForm: Product = {
  id: 0,
  name: '',
  date: new Date(),
  description: '',
  category: Category.DumplingsAndBuns,
  price: 0,
  unit: Unit.PACKAGE,
  weight: 0,
  weightUnit: WeightUnit.G,
  stockQuantity: 0,
  storageMethod: '',
  brand: '',
  origin: '',
  packagingType: PackagingType.Compressed,
  sku: '',
  shelfLife: '',
}

const header = ref('')
const form = reactive<Product>({
  ...defaultForm,
})
const [isVisible, toggle] = useToggle()
const selectedProduct = ref<Product[]>([])

function clickAdd() {
  resetForm()
  toggle(true)
  header.value = '添加产品'
}

function clickEdit() {
  if (selectedProduct.value.length === 0) {
    toast.add({
      severity: 'warn',
      summary: '警告',
      detail: '请选择要修改的产品',
      life: 3000,
    })
    return
  }

  if (selectedProduct.value.length > 1) {
    toast.add({
      severity: 'warn',
      summary: '警告',
      detail: '一次只能选择一个产品进行修改',
      life: 3000,
    })
    return
  }

  const selected = selectedProduct.value[0]

  Object.assign(form, selected)
  header.value = '修改产品'
  toggle(true)
}

function resetForm() {
  Object.assign(form, defaultForm)
}

function handleSubmit() {
  if (Object.values({ ...form, id: 1 }).some(v => !v)) {
    toast.add({
      severity: 'warn',
      summary: '警告',
      detail: '请填写完整信息',
      life: 3000,
    })
    return
  }

  if (form.id) {
    updateProduct(form)
  }
  else {
    addProduct(form)
  }
  toggle(false)
  resetForm()
}

function clickDelete() {
  const ids = selectedProduct.value.map(v => v.id)

  if (ids.length === 0) {
    toast.add({
      severity: 'warn',
      summary: '警告',
      detail: '请选择要删除的产品',
      life: 3000,
    })
    return
  }

  confirm.require({
    header: '确认删除',
    message: `确认删除${ids.length > 1 ? '这些产品' : '这个产品'}吗?`,
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
      deleteProduct(ids)
      selectedProduct.value = []
    },
  })
}
</script>

<template>
  <div>
    <DataTable v-model:selection="selectedProduct" v-model:filters="filters" style="width: calc(100vw - 232px)" scroll-height="600px" data-key="id" filter-display="menu" :value="products" scrollable striped-rows paginator :rows="5" :rows-per-page-options="[5, 10, 20, 50]">
      <template #header>
        <div v-if="user?.role !== Role.VIEWER" class="flex gap-x-2">
          <Button label="添加产品" @click="clickAdd">
            <template #icon>
              <i i-carbon-add />
            </template>
          </Button>
          <Button severity="danger" label="删除产品" @click="clickDelete">
            <template #icon>
              <i i-carbon-trash-can />
            </template>
          </Button>
          <Button severity="secondary" label="修改产品" @click="clickEdit">
            <template #icon>
              <i i-carbon-edit />
            </template>
          </Button>
        </div>
      </template>
      <template #empty>
        <p text="center gray-500">
          暂无产品
        </p>
      </template>
      <template #loading>
        <p text-center>
          产品数据加载中，请稍等
        </p>
      </template>
      <Column selection-mode="multiple" header-style="width: 3rem" />
      <Column field="sku" header="编号" style="min-width: 8em;" />
      <Column field="name" header="名称" style="min-width: 10em;">
        <template #body="{ data }">
          {{ data.name }}
        </template>
        <template #filter="{ filterModel, filterCallback }">
          <InputText v-model="filterModel.value" type="text" placeholder="按名称搜索" @input="filterCallback()" />
        </template>
      </Column>
      <Column field="date" data-type="date" header="日期" style="min-width: 10em;">
        <template #body="{ data, field }">
          {{ format(data[field], 'yyyy-MM-dd') }}
        </template>
      </Column>
      <Column field="description" header="描述" style="min-width: 10em;">
        <template #body="{ data, field }">
          <p w-56 class="overflow-hidden text-ellipsis text-nowrap">
            {{ data[field] }}
          </p>
        </template>
      </Column>
      <Column field="category" header="分类" style="min-width: 10em;" />
      <Column field="price" header="价格" style="min-width: 10em;">
        <Column field="weight" header="规格" style="min-width: 8em;" />
        <template #body="{ data, field }">
          {{ data[field] }}{{ data.weightUnit }}/{{ data.unit }}
        </template>
      </Column>
      <Column field="brand" header="品牌" style="min-width: 8em;" />
      <Column field="shelfLife" header="保质期" style="min-width: 6em;" />
      <Column field="origin" header="产地" style="min-width: 8em;" />
      <Column field="packagingType" header="包装类型" style="min-width: 8em;" />
      <Column field="stockQuantity" header="库存" style="min-width: 4em;" />
      <Column field="storageMethod" header="存储方式" style="min-width: 6em;">
        <template #body="{ data, field }">
          <p class="text-nowrap">
            {{ data[field] }}
          </p>
        </template>
      </Column>
    </DataTable>
  </div>
  <Dialog v-model:visible="isVisible" modal :header :style="{ width: '25rem' }">
    <form mt-8 space-y-10>
      <FloatLabel>
        <InputText id="sku" v-model="form.sku" fluid />
        <label for="sku">编号</label>
      </FloatLabel>
      <FloatLabel>
        <InputText id="name" v-model="form.name" fluid />
        <label for="name">名称</label>
      </FloatLabel>
      <div>
        <label for="date" style="color: var(--p-form-field-color)" class="mb-2 block font-bold">日期</label>
        <DatePicker v-model="form.date" fluid placeholder="日期" date-format="yy/mm/dd" />
      </div>
      <FloatLabel>
        <Textarea id="description" v-model="form.description" rows="5" cols="30" style="resize: none" />
        <label for="description">描述</label>
      </FloatLabel>
      <FloatLabel>
        <Select v-model="form.category" :options="CategoryList" placeholder="请选择类别" class="w-full md:w-56" />
        <label for="category">分类</label>
      </FloatLabel>
      <div flex gap-x-2>
        <FloatLabel>
          <InputNumber v-model="form.price" input-id="price" fluid />
          <label for="price">价格</label>
        </FloatLabel>
        <FloatLabel>
          <Select v-model="form.unit" :options="UnitList" placeholder="请选择单位" class="w-full md:w-56" />
          <label for="unit">单位</label>
        </FloatLabel>
      </div>
      <div flex gap-x-2>
        <FloatLabel>
          <InputNumber id="weight" v-model="form.weight" fluid />
          <label for="weight">重量</label>
        </FloatLabel>
        <FloatLabel>
          <Select v-model="form.weightUnit" :options="WeightUnitList" placeholder="请选择单位" class="w-full md:w-56" />
          <label for="weightUnit">单位</label>
        </FloatLabel>
      </div>
      <div>
        <label for="date" style="color: var(--p-form-field-color)" class="mb-2 block font-bold">生产日期</label>
        <DatePicker v-model="form.date" fluid placeholder="生产日期" date-format="yy/mm/dd" />
      </div>
      <FloatLabel>
        <InputText id="shelfLife" v-model="form.shelfLife" fluid />
        <label for="shelf_life">保质期</label>
      </FloatLabel>

      <FloatLabel>
        <InputText id="brand" v-model="form.brand" fluid />
        <label for="brand">品牌</label>
      </FloatLabel>
      <FloatLabel>
        <InputText id="origin" v-model="form.origin" fluid />
        <label for="origin">产地</label>
      </FloatLabel>
      <FloatLabel>
        <Select v-model="form.packagingType" :options="PackagingTypeList" placeholder="请选择包装类型" class="w-full md:w-56" />
        <label for="packagingType">包装类型</label>
      </FloatLabel>
      <div>
        <label for="stockQuantity" style="color: var(--p-form-field-color)" class="mb-2 block font-bold">库存</label>
        <InputNumber v-model="form.stockQuantity" show-buttons button-layout="horizontal" style="width: 3rem" :min="0">
          <template #incrementicon>
            <i i-carbon-add />
          </template>
          <template #decrementicon>
            <i i-carbon-subtract />
          </template>
        </InputNumber>
      </div>
      <FloatLabel>
        <Textarea id="storageMethod" v-model="form.storageMethod" rows="5" cols="30" style="resize: none" />
        <label for="storageMethod">存储方式</label>
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
