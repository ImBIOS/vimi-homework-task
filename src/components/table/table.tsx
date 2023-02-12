import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useQueryStore } from "../../lib/store";
import Pagination from "./pagination";
import TableBody, { type ITableBodyData } from "./table-body";
import TableHead from "./table-head";

type Props = {
  data: ITableBodyData[];
  className?: string;
  rowPerPage?: number;
};

const Table = ({ data, className, rowPerPage = 5 }: Props): JSX.Element => {
  const [page, setPage] = useState({
    current: 1,
    first: 1,
    last: Math.ceil(data.length / rowPerPage),
  });

  /** Handle page change */
  const handlePageChange = (pageNumber: number) => {
    setPage({
      ...page,
      current: pageNumber,
    });
  };

  // Listen to query changes and reset page
  useEffect(() => {
    setPage({
      current: 1,
      first: 1,
      last: Math.ceil(data.length / rowPerPage),
    });
  }, [data]);

  return (
    <section className={twMerge("w-full", className)}>
      <TableHead />
      {data.length > 0 ? (
        <>
          <TableBody data={data} page={page} rowPerPage={rowPerPage} />
          <Pagination page={page} handlePageChange={handlePageChange} />
        </>
      ) : (
        <p className="my-4 text-center text-gray-500">No data found</p>
      )}
    </section>
  );
};

export default Table;
