import { Menu, Transition } from "@headlessui/react";
import { CalendarDaysIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import { twMerge } from "tailwind-merge";
import { useSortStore } from "../../lib/store";

type Props = {
  children: React.ReactNode;
  className?: string;
  handleValueChange: (value: string) => void;
};

const menu = [
  {
    name: "Created Time - Ascending",
    icon: CalendarDaysIcon,
    value: "createdOn-asc",
  },
  {
    name: "Created Time - Descending",
    icon: CalendarDaysIcon,
    value: "createdOn-desc",
  },
];

const Dropdown = ({
  children,
  className,
  handleValueChange,
}: Props): JSX.Element => {
  const sort = useSortStore((state) => state.sortType);

  return (
    <Menu
      as="div"
      className={twMerge(
        "relative hidden text-left lg:inline-block",
        className,
      )}
    >
      <div>
        <Menu.Button className="inline-flex w-64 justify-center rounded-md border-2 border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 opacity-80 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:border-gray-800 dark:bg-opacity-20 dark:text-gray-400">
          {sort === ""
            ? children
            : menu.find((item) => item.value === sort)?.name}
          <ChevronDownIcon
            className="ml-2 -mr-1 h-5 w-5 text-gray-200 hover:text-gray-100 dark:text-gray-800"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-64 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            {menu.map((item, idx) => (
              <Menu.Item key={`dropdown-${idx}`}>
                {() => {
                  const active = sort === item.value;
                  return (
                    <button
                      className={`${
                        active
                          ? "bg-red-500 text-white"
                          : "text-gray-900 hover:bg-red-200"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      onClick={() => handleValueChange(item.value)}
                    >
                      {active ? (
                        <item.icon
                          className="mr-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      ) : (
                        <item.icon
                          className="mr-2 h-5 w-5 opacity-50"
                          aria-hidden="true"
                        />
                      )}
                      {item.name}
                    </button>
                  );
                }}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
