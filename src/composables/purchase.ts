import type { Item } from './useManagement'
import type { Product } from '~/types'
import { defineStore } from 'pinia'

export interface Purchase extends Item {
  supplier_id: Supplier['id']
  product_id: Product['id']
  date: Date
  quantity: number
  unit_price: number
  remarks: string
}

export interface Supplier extends Item {
  name: string
  contact: string
  phone: string
  address: string
}

export const suppliers: Supplier[] = [
  {
    id: 1,
    name: '苏州安井食品有限公司',
    contact: 'Contact 1',
    phone: '123-456-7890',
    address: 'Address 1',
  },
  {
    id: 2,
    name: '浙江宏福食品有限公司',
    contact: 'Contact 2',
    phone: '987-654-3210',
    address: 'Address 2',
  },
  {
    id: 3,
    name: '无锡华顺民生食品有限公司',
    contact: 'Contact 3',
    phone: '123-456-7893',
    address: 'Address 3',
  },
  {
    id: 4,
    name: '诸城市宏福泽食品有限公司',
    contact: 'Contact 4',
    phone: '123-456-7894',
    address: 'Address 4',
  },
  {
    id: 5,
    name: '福建上清食品有限公司',
    contact: 'Contact 5',
    phone: '123-456-7895',
    address: 'Address 5',
  },
  {
    id: 6,
    name: '浙江绍兴食品有限公司',
    contact: 'Contact 6',
    phone: '123-456-7896',
    address: 'Address 6',
  },
  {
    id: 7,
    name: '湖北武汉食品有限公司',
    contact: 'Contact 7',
    phone: '123-456-7897',
    address: 'Address 7',
  },
  {
    id: 8,
    name: '武汉源香食品有限公司',
    contact: 'Contact 8',
    phone: '123-456-7898',
    address: 'Address 8',
  },
  {
    id: 9,
    name: '诸城丰庆食品有限公司',
    contact: 'Contact 9',
    phone: '123-456-7899',
    address: 'Address 9',
  },
]

export const suppliersMap = suppliers.reduce<Record<Supplier['id'], Supplier>>((acc, supplier) => {
  acc[supplier.id] = supplier
  return acc
}, {})

export const DEFAULT_PURCHASE: Purchase[] = [
  {
    id: 1,
    supplier_id: 1,
    product_id: 32,
    date: new Date(),
    quantity: 10,
    unit_price: 5,
    remarks: '太贵了',
  },
  {
    id: 2,
    supplier_id: 2,
    product_id: 33,
    date: new Date(),
    quantity: 5,
    unit_price: 10,
    remarks: '非常好',
  },
  {
    id: 3,
    supplier_id: 1,
    product_id: 34,
    date: new Date(),
    quantity: 15,
    unit_price: 7,
    remarks: '到了一半',
  },
  {
    id: 4,
    supplier_id: 2,
    product_id: 7,
    date: new Date('2024-06-30T12:00:00Z'),
    quantity: 30,
    unit_price: 4.0,
    remarks: '运输问题导致轻微延误',
  },
  {
    id: 5,
    supplier_id: 7,
    product_id: 19,
    date: new Date('2025-03-05T16:20:00Z'),
    quantity: 10,
    unit_price: 25.0,
    remarks: '要求紧急送货',
  },
  {
    id: 6,
    supplier_id: 4,
    product_id: 4,
    date: new Date('2024-07-20T08:50:00Z'),
    quantity: 80,
    unit_price: 3.0,
    remarks: '包装完好，验收通过',
  },
  {
    id: 7,
    supplier_id: 9,
    product_id: 15,
    date: new Date('2024-12-05T11:25:00Z'),
    quantity: 11,
    unit_price: 12.5,
    remarks: '部分产品需替换',
  },
  {
    id: 8,
    supplier_id: 1,
    product_id: 18,
    date: new Date('2025-01-15T13:40:00Z'),
    quantity: 60,
    unit_price: 2.8,
    remarks: '按时交付，待库存分配',
  },
  {
    id: 9,
    supplier_id: 6,
    product_id: 9,
    date: new Date('2024-09-10T15:10:00Z'),
    quantity: 15,
    unit_price: 20.0,
    remarks: '高端产品，需冷链运输',
  },
  {
    id: 10,
    supplier_id: 3,
    product_id: 13,
    date: new Date('2025-04-01T09:00:00Z'),
    quantity: 40,
    unit_price: 5.5,
    remarks: '交货提前，质量优良',
  },
  {
    id: 11,
    supplier_id: 2,
    product_id: 2,
    date: new Date('2024-05-12T09:30:00Z'),
    quantity: 70,
    unit_price: 2.0,
    remarks: '交货完整，库存已更新',
  },
  {
    id: 12,
    supplier_id: 7,
    product_id: 16,
    date: new Date('2024-10-18T14:20:00Z'),
    quantity: 30,
    unit_price: 10.0,
    remarks: '部分包装破损，待处理',
  },
  {
    id: 13,
    supplier_id: 5,
    product_id: 20,
    date: new Date('2025-03-20T11:00:00Z'),
    quantity: 90,
    unit_price: 1.5,
    remarks: '大宗货物，验收中',
  },
  {
    id: 14,
    supplier_id: 8,
    product_id: 5,
    date: new Date('2024-08-25T16:45:00Z'),
    quantity: 20,
    unit_price: 18.0,
    remarks: '需冷藏，运输正常',
  },
]

export const usePurchaseStore = defineStore('purchase', () => {
  const { productsMap } = useProductStore()
  const { items, addItem, updateItem, deleteItem } = useManagement<Purchase>({
    items: DEFAULT_PURCHASE,
    detailKey: 'id',
    value: item => productsMap[item.product_id].name,
  })

  return {
    purchases: items,
    addPurchase: addItem,
    updatePurchase: updateItem,
    deletePurchase: deleteItem,
  }
})
