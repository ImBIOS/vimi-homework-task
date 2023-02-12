import { AdjustmentsHorizontalIcon } from "@heroicons/react/20/solid";

type TableBodyProps = {
  data: ITableBodyData[];
  page: {
    current: number;
    first: number;
    last: number;
  };
  rowPerPage?: number;
};

// Can be indexed with string
export type ITableBodyData = {
  id: string;
  name: string;
  status: string;
  type: string;
  createdOn: string;
  archived: boolean;
  [key: string]: string | boolean;
};

const TableBody = ({
  data,
  page,
  rowPerPage = 5,
}: TableBodyProps): JSX.Element => {
  const currentData = data.slice(
    (page.current - 1) * rowPerPage,
    page.current * rowPerPage,
  );

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
