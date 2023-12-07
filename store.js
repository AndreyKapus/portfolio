import { create } from "zustand";
import axios from "axios";

const useAuth = create((set) => ({
  user: null,
  loading: false,
  error: null,

  logIn: async () => {
    set({ loading: true });

    try {
      const res = axios.post(
        "https://portfolio-api-a758.onrender.com/api/auth/login"
      );
    } catch (error) {
      return error.massege;
    }
  },
}));
