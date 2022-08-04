import AsyncStorage from "@react-native-async-storage/async-storage"
import create from "zustand"
import { persist } from "zustand/middleware"

interface UseStore {
  addUser: (data: any, token: string) => void
  removeUser: () => void
  removeCat: () => void
  addCat: (cat:string) => void
  token: string
  user: any
  cat: string
}

const useStore = create(
  persist<UseStore>(
    (set) => ({
      user: "",
      cat:"",
      token: "",
      addUser: (data, token) => set(() => ({ user: data, token })) as void,
      addCat: (cat:string) => set(()=> ({cat:cat})) as void,
      removeUser: () => set({ user: "", token: "" }),
      removeCat: () => set({ cat: ""}),
    }),
    {
      name: "app_state", // unique name
      getStorage: () => AsyncStorage, 
    },
  ),
)

export default useStore
