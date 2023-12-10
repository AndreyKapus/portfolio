import { create } from "zustand";
import axios from "axios";

axios.defaults.baseURL = "https://portfolio-api-a758.onrender.com/";

export const token = {
  setToken(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unsetToken() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const useAuth = create((set) => ({
  user: null,
  loading: false,
  error: null,

  logInUser: async (event) => {
    set({ loading: true });

    try {
      const res = await axios.post("api/auth/login", event);
      console.log(res);
      if (!res.ok) {
        throw new Error("Someting went wrong (");
      }

      set({ user: res.data, error: null });
      token.setToken(res.data.token);
    } catch (error) {
      set({ error: error.massege });
    } finally {
      set({ loading: false });
      console.log(axios.defaults);
    }
  },
}));

export const useProjects = create((set, get) => ({
  project: null,
  loading: false,
  error: null,

  addProject: async (event) => {
    set({ loading: true });

    try {
      const res = await axios.post("api/projects", event);

      if (!res.ok) {
        throw new Error("Someting went wrong (");
      }

      set({ project: res, error: null });
    } catch (error) {
      set({ error: error.massege });
    } finally {
      set({ loading: false });
    }
  },
}));
