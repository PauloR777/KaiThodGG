import { create } from "zustand"
import { persist } from "zustand/middleware"

type UserState = {
  name: string | null
  setName: (n: string | null) => void
  logout: () => void
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      name: null,
      setName: (n: string | null) => set({ name: n }),
      logout: () => set({ name: null }),
    }),
    { name: "user-storage" }
  )
)

export default useUserStore
