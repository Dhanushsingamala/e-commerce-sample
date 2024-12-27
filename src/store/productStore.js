// src/stores/productStore.js
import { create } from 'zustand';

const useProductStore = create((set) => ({
  products: [], // List of all products
  selectedProduct: null, // Details of the product being viewed
  setProducts: (products) => set({ products }),
  setSelectedProduct: (product) => set({ selectedProduct: product }),
}));

export default useProductStore;
