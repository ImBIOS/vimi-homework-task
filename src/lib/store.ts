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

export { useQueryStore, useSortStore };
