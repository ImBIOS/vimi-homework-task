import React from "react";

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <main className="bg-gradient-to-tr from-indigo-200 via-red-200 to-yellow-100 min-h-screen">
      {children}
    </main>
  );
};

export default Container;
