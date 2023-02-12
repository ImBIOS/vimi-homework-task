import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import { useQueryStore } from "../../lib/store";

type Props = {
  handleQueryChange: (query: string) => void;
  className?: string;
};

const Search = ({ handleQueryChange, className }: Props) => {
  const query = useQueryStore((state) => state.query);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={twMerge("relative hidden w-72 sm:block", className)}>
      <div className="relative w-full cursor-default overflow-hidden rounded-lg border-2 border-gray-200 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-red-300 dark:border-gray-800 dark:bg-opacity-20 sm:text-sm">
        <input
          type="text"
          className="w-full border-none bg-white py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 outline-transparent focus:ring-0 dark:bg-gray-700 dark:text-gray-100"
          onChange={(event) => handleQueryChange(event.target.value)}
          placeholder="Search by project name"
          ref={inputRef}
          value={query}
        />
        <button
          className="absolute inset-y-0 right-0 flex items-center pr-2"
          onClick={() => inputRef.current?.focus()}
        >
          <MagnifyingGlassIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  );
};

export default Search;
