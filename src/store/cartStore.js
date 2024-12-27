// src/stores/cartStore.js
import { create } from 'zustand';

const useCartStore = create((set) => ({
  cart: [],
  coupon: null,
  totalPrice: 0,
  
  addToCart: (product) => set((state) => ({
    cart: [...state.cart, product],
    totalPrice: state.totalPrice + product.price,
  })),

  applyCoupon: (code) => {
    const discount = code === 'Christmas' ? 1000 : 0;
    set((state) => ({
      coupon: code,
      totalPrice: Math.max(0, state.totalPrice - discount),
    }));
  },

  clearCart: () => set({ cart: [], totalPrice: 0, coupon: null }),
}));

export default useCartStore;
