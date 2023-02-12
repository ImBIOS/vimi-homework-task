import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useQueryStore } from "../../lib/store";

type Props = {
  page: {
    current: number;
    first: number;
    last: number;
  };
  handlePageChange: (pageNumber: number) => void;
};

const Pagination = ({ page, handlePageChange }: Props) => {
  const query = useQueryStore((state) => state.query);
  /** Nav length */
  const navLength = Math.min(9, page.last);
  // Pagination data
  const [nav, setNav] = useState({
    arr: Array.from({ length: navLength }, (_, i) => page.first + i),
    first: page.first,
    mid: Math.round(navLength / 2),
    last: navLength,
  });

  /** Handle page change */
  const handleGoToSpecificPage = (pageNumber: number) => {
    handlePageChange(pageNumber);

    const diff = Math.abs(pageNumber - nav.mid);

    // If page.current is more than nav.mid and lastNav is less than lastPage, slide nav array to the right
    // equal to the difference between page.current and nav.mid. This will keep the current page in the
    // middle of the nav array. But if the lastNav is equal to lastPage, then we don't need to slide
    // the nav array to the right anymore. lastNav will be equal to lastPage if the current page is
    // the last page and the nav array is already at the rightmost position.
    if (pageNumber > nav.mid && nav.last < page.last) {
      const limitedDiff = Math.min(diff, page.last - nav.last);
      setNav({
        arr: nav.arr.map((val) => val + limitedDiff),
        first: nav.first + limitedDiff,
        mid: nav.mid + limitedDiff,
        last: nav.last + limitedDiff,
      });
    }

    // If page.current is less than nav.mid and firstNav is more than firstPage, slide nav array to the left
    // equal to the difference between page.current and nav.mid. This will keep the current page in the
    // middle of the nav array. But if the firstNav is equal to firstPage, then we don't need to slide
    // the nav array to the left anymore. firstNav will be equal to firstPage if the current page is
    // the first page and the nav array is already at the leftmost position.
    if (pageNumber < nav.mid && nav.first > page.first) {
      const limitedDiff = Math.min(diff, nav.first - page.first);
      setNav({
        arr: nav.arr.map((val) => val - limitedDiff),
        first: nav.first - limitedDiff,
        mid: nav.mid - limitedDiff,
        last: nav.last - limitedDiff,
      });
    }
  };

  // Listen to query change and reset nav array
  useEffect(() => {
    setNav({
      arr: Array.from(
        { length: Math.min(9, page.last) },
        (_, i) => page.first + i,
      ),
      first: page.first,
      mid: Math.round(Math.min(9, page.last) / 2),
      last: Math.min(9, page.last),
    });
  }, [query]);

  return (
    <div className="flex justify-center">
      <div className="flex">
        <button
          className="rounded-l bg-gray-300 px-4 py-2 hover:bg-gray-400 disabled:cursor-not-allowed disabled:hover:bg-gray-300"
          onClick={() => handleGoToSpecificPage(page.current - 1)}
          disabled={page.current === page.first}
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>

        {nav.arr.map((pageNumber) => {
          return (
            <button
              key={pageNumber}
              className={twMerge(
                "bg-gray-300 px-4 py-2 hover:bg-gray-400",
                pageNumber === page.current && "bg-gray-400",
              )}
              onClick={() => handleGoToSpecificPage(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}

        <button
          className="rounded-r bg-gray-300 px-4 py-2 hover:bg-gray-400 disabled:cursor-not-allowed disabled:hover:bg-gray-300"
          onClick={() => handleGoToSpecificPage(page.current + 1)}
          disabled={page.current === page.last}
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
