import React from "react";

interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-indigo-200 via-red-200 to-yellow-100 p-4">
      {children}
    </main>
  );
};

export default Container;
