import { AdjustmentsHorizontalIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

type TableBodyProps = {
  data: ITableBodyData[];
  rowPerPage?: number;
};

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
            className="grid grid-cols-6 gap-4 bg-white text-left font-semibold pr-6 py-3 pl-8 mb-4 rounded-lg"
          >
            <div className="col-span-1 lg:col-span-2 truncate">
              {project.name}
            </div>
            <div className="capitalize truncate">{project.type}</div>
            <div className="col-span-2">{project.status}</div>
            <div className="col-span-2 lg:col-span-1">{formattedDate}</div>
            <div className="col-start-8 lg:col-start-7 w-16">
              <AdjustmentsHorizontalIcon
                className="h-5 w-5 mx-auto text-black hover:text-gray-500 cursor-pointer"
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
