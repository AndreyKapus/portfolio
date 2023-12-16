import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
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

export const useAuth = create(
  persist(
    (set) => ({
      user: null,
      loading: false,
      error: null,

      logInUser: async (event) => {
        set({ loading: true });

        try {
          const { data } = await axios.post("api/auth/login", event);

          // if (!data.ok) {
          //   throw new Error("Someting went wrong (");
          // }
          set({ user: data, error: null });
          token.setToken(data.token);
        } catch (error) {
          set({ error: error.massege });
        } finally {
          set({ loading: false });
        }
      },
    }),
    {
      name: "events-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const useProjects = create((set, get) => ({
  project: null,
  loading: false,
  error: null,
  photo: null,

  addProject: async (event) => {
    set({ loading: true });

    try {
      const { data } = await axios.post("api/projects", event);

      if (!data.ok) {
        throw new Error("Someting went wrong (");
      }
      set({ project: data, error: null });
    } catch (error) {
      set({ error: error.massege });
    } finally {
      set({ loading: false });
    }
  },

  updatePhoto: async (formData, { projectId }) => {
    set({ loading: true });
    console.log("form data", formData);
    try {
      const res = await axios.patch(
        `api/projects/avatars/${projectId}`,
        formData
      );

      const data = await res.json();
      set({ photo: data });
    } catch (error) {
      return error.massege;
    } finally {
      set({
        loading: false,
      });
    }
  },
}));
