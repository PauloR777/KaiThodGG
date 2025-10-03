import { create } from "zustand"

interface HistoryItem {
  id: string
  action: string
  timestamp: number
}

interface HistoryState {
  history: HistoryItem[]
  addHistory: (action: string) => void
  clearHistory: () => void
}

export const useHistoryStore = create<HistoryState>((set) => ({
  history: [],
  addHistory: (action) =>
    set((state) => ({
      history: [
        ...state.history,
        { id: crypto.randomUUID(), action, timestamp: Date.now() },
      ],
    })),
  clearHistory: () => set({ history: [] }),
}))
