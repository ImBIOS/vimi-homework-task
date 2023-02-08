import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Title = ({ children, className }: Props) => {
  return <p className={twMerge("text-xl font-bold", className)}>{children}</p>;
};

export default Title;
