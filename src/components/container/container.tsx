import React from "react";

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props): JSX.Element => (
  <main className="min-h-screen bg-gradient-to-tr from-indigo-200 via-red-200 to-yellow-100 p-4 text-black dark:bg-gradient-to-tr dark:from-gray-700 dark:via-gray-900 dark:to-black dark:text-gray-200">
    <section className="container m-auto">{children}</section>
  </main>
);

export default Container;
