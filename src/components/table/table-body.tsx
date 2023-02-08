import { AdjustmentsHorizontalIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

interface TableBodyProps {
  data: ITableBodyData[];
  rowPerPage?: number;
}

export interface ITableBodyData {
  id: string;
  name: string;
  status: string;
  type: string;
  createdOn: string;
  archived: boolean;
}

const TableBody = ({ data, rowPerPage = 5 }: TableBodyProps) => {
  const [page, setPage] = useState({
    current: 1,
    first: 1,
    last: data.length / rowPerPage,
  });
  const currentData = data
    .filter((val) => !val.archived)
    .slice(rowPerPage * (page.current - 1), rowPerPage);

  return (
    <section>
      {currentData.map((project) => {
        const date = new Date(project.createdOn);
        // Format date, i.e. April 25, 2021
        const formattedDate = date.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        });

        return (
          <div
            key={project.id}
            className="mb-4 grid grid-cols-6 gap-4 rounded-lg bg-white py-3 pr-6 pl-8 text-left font-semibold"
          >
            <div className="col-span-1 truncate lg:col-span-2">
              {project.name}
            </div>
            <div className="truncate capitalize">{project.type}</div>
            <div className="col-span-2">{project.status}</div>
            <div className="col-span-2 lg:col-span-1">{formattedDate}</div>
            <div className="col-start-8 w-16 lg:col-start-7">
              <AdjustmentsHorizontalIcon
                className="mx-auto h-5 w-5 cursor-pointer text-black hover:text-gray-500"
                aria-hidden="true"
              />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default TableBody;
