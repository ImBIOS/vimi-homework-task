import React from "react";

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props): JSX.Element => (
  <main className="min-h-screen bg-gradient-to-tr from-indigo-200 via-red-200 to-yellow-100 p-4">
    {children}
  </main>
);

export default Container;
