import { create } from "zustand";
import axios from "axios";

export const useAuth = create((set) => ({
  user: null,
  loading: false,
  error: null,

  logInUser: async (event) => {
    set({ loading: true });

    try {
      const response = await axios.post(
        "https://portfolio-api-a758.onrender.com/api/auth/login",
        event
      );

      if (!res.ok) {
        throw new Error("Fail");
      }
      set({ user: res, error: null });
    } catch (error) {
      set({ error: error.massege });
    } finally {
      set({ loading: false });
    }
  },
}));
