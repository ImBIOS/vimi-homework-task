import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface QueryState {
  query: string;
  setQuery: (text: string) => void;
}

const useQueryStore = create<QueryState>()(
  devtools(
    persist(
      (set) => ({
        query: "",
        setQuery: (text) => set(() => ({ query: text })),
      }),
      {
        name: "query-storage",
      },
    ),
  ),
);

interface SortState {
  sortType: string;
  setSort: (text: string) => void;
}

const useSortStore = create<SortState>()(
  devtools(
    persist(
      (set) => ({
        sortType: "",
        setSort: (text) => set(() => ({ sortType: text })),
      }),
      {
        name: "sort-storage",
      },
    ),
  ),
);

interface ThemeState {
  theme: string;
  setTheme: (text: string) => void;
  clearTheme: () => void;
}

const useThemeStore = create<ThemeState>()(
  devtools(
    persist(
      (set) => ({
        theme: "",
        setTheme: (text) => set(() => ({ theme: text })),
        clearTheme: () => set(() => ({ theme: "" })),
      }),
      {
        name: "theme-storage",
      },
    ),
  ),
);

export { useQueryStore, useSortStore, useThemeStore };
