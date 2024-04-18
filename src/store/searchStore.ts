import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface SearchStore {
  keyword: string
  searchResult: any[]
}

export const searchStore = create((set) => ({
  keyword: 0,
  searchResult: [],
  setKeyword: (keyword: string) => set((state: any) => ({ keyword })),
  setSearchResult: (searchResult: any[]) =>
    set((state: any) => ({ searchResult })),
}))
