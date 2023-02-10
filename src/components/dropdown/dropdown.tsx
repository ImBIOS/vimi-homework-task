import { Menu, Transition } from "@headlessui/react";
import {
  Bars3BottomRightIcon,
  CalendarDaysIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";
import { Fragment } from "react";

type Props = {
  children: React.ReactNode;
};

const Dropdown = ({ children }: Props): JSX.Element => (
  <Menu as="div" className="relative inline-block text-left">
    <div>
      <Menu.Button className="inline-flex w-full justify-center rounded-md border-2 border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 opacity-80 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
        {children}
        <ChevronDownIcon
          className="ml-2 -mr-1 h-5 w-5 text-gray-200 hover:text-gray-100"
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
      <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="px-1 py-1 ">
          <Menu.Item>
            {({ active }) => (
              <button
                className={`${
                  active ? "bg-red-500 text-white" : "text-gray-900"
                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
              >
                {active ? (
                  <Bars3BottomRightIcon
                    className="mr-2 h-5 w-5"
                    aria-hidden="true"
                  />
                ) : (
                  <Bars3BottomRightIcon
                    className="mr-2 h-5 w-5 opacity-50"
                    aria-hidden="true"
                  />
                )}
                Name
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                className={`${
                  active ? "bg-red-500 text-white" : "text-gray-900"
                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
              >
                {active ? (
                  <CalendarDaysIcon
                    className="mr-2 h-5 w-5"
                    aria-hidden="true"
                  />
                ) : (
                  <CalendarDaysIcon
                    className="mr-2 h-5 w-5 opacity-50"
                    aria-hidden="true"
                  />
                )}
                Date
              </button>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Transition>
  </Menu>
);

export default Dropdown;
