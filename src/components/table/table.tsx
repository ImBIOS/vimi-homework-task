import { twMerge } from "tailwind-merge";
import TableBody, { ITableBodyData } from "./table-body";
import TableHead from "./table-head";

type Props = {
  data: ITableBodyData[];
  className?: string;
  rowPerPage?: number;
};

const Table = ({ data, className, rowPerPage = 5 }: Props) => {
  return (
    <section className={twMerge("w-full", className)}>
      <TableHead />
      <TableBody data={data} rowPerPage={rowPerPage} />
    </section>
  );
};

export default Table;
