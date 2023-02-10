import TableBody, { type ITableBodyData } from "./table-body";
import TableHead from "./table-head";
import { twMerge } from "tailwind-merge";

type Props = {
  data: ITableBodyData[];
  className?: string;
  rowPerPage?: number;
};

const Table = ({ data, className, rowPerPage = 5 }: Props): JSX.Element => (
  <section className={twMerge("w-full", className)}>
    <TableHead />
    <TableBody data={data} rowPerPage={rowPerPage} />
  </section>
);

export default Table;
