import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useEffect } from "react";
import { useThemeStore } from "../../lib/store";
import { DarkIcon, LightIcon, SystemIcon } from "./icons";

const themes = [
  {
    name: "light",
    icon: LightIcon,
  },
  {
    name: "dark",
    icon: DarkIcon,
  },
  {
    name: "system",
    icon: SystemIcon,
  },
];

type Props = {
  className?: string;
};

const ThemeSelector = ({ className }: Props) => {
  const selectedTheme = useThemeStore((state) => state.theme);
  const setSelectedTheme = useThemeStore((state) => state.setTheme);
  const clearTheme = useThemeStore((state) => state.clearTheme);

  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  useEffect(() => {
    if (
      selectedTheme === "dark" ||
      (!selectedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [selectedTheme]);

  const handleOnChangeTheme = (theme: string) => {
    if (theme === "system") {
      clearTheme();
    } else {
      setSelectedTheme(theme);
    }
  };

  return (
    <Listbox value={selectedTheme} onChange={handleOnChangeTheme}>
      <div className="relative">
        <Listbox.Label className="sr-only">Theme</Listbox.Label>
        <Listbox.Button className={className}>
          <span className="dark:hidden">
            <LightIcon />
          </span>
          <span className="hidden dark:inline">
            <DarkIcon />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-100"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Listbox.Options className="dark:highlight-white/5 absolute top-full right-0 z-50 mt-2 w-36 overflow-hidden rounded-lg bg-white py-1 text-sm font-semibold text-slate-700 shadow-lg ring-1 ring-slate-900/10 dark:bg-slate-800 dark:text-slate-300 dark:ring-0">
            {themes.map((theme, idx) => (
              <Listbox.Option
                key={`theme-${theme}-${idx}`}
                value={theme.name}
                as={Fragment}
              >
                {({ active, selected }) => (
                  <li
                    className={`flex cursor-pointer items-center py-1 px-2 capitalize ${
                      active
                        ? "bg-slate-100 dark:bg-slate-700"
                        : "bg-white dark:bg-slate-800"
                    } ${
                      selected
                        ? "bg-slate-200 dark:bg-slate-600"
                        : "bg-white dark:bg-slate-800"
                    }`}
                  >
                    <theme.icon aria-hidden="true" />
                    {theme.name}
                  </li>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default ThemeSelector;
