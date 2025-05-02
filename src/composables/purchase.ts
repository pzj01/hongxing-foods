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
    name: '山东众克食品有限公司',
    contact: 'Contact 1',
    phone: '123-456-7890',
    address: 'Address 1',
  },
  {
    id: 2,
    name: '山东太合食品有限公司',
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
]

export const suppliersMap = suppliers.reduce<Record<Supplier['id'], Supplier>>((acc, supplier) => {
  acc[supplier.id] = supplier
  return acc
}, {})

export const DEFAULT_PURCHASE: Purchase[] = [
  {
    id: 1,
    supplier_id: 1,
    product_id: 1,
    date: new Date(),
    quantity: 10,
    unit_price: 5,
    remarks: '太贵了',
  },
  {
    id: 2,
    supplier_id: 2,
    product_id: 2,
    date: new Date(),
    quantity: 5,
    unit_price: 10,
    remarks: '非常好',
  },
  {
    id: 3,
    supplier_id: 1,
    product_id: 3,
    date: new Date(),
    quantity: 15,
    unit_price: 7,
    remarks: '到了一半',
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
