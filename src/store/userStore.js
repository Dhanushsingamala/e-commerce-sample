// src/stores/userStore.js
import { create } from 'zustand';

const useUserStore = create((set) => ({
  user: null,
  otpSent: false,
  isAuthenticated: false,

  sendOtp: (phoneNumber) => {
    // Mock sending OTP
    console.log(`Sending OTP to ${phoneNumber}`);
    set({ otpSent: true });
  },

  verifyOtp: (otp, phoneNumber) => {
    // Mock OTP verification
    if (otp === '1234') {
      set({ isAuthenticated: true, user: { phoneNumber } });
    } else {
      console.error('Invalid OTP');
    }
  },

  logout: () => set({ user: null, isAuthenticated: false, otpSent: false }),
}));

export default useUserStore;
