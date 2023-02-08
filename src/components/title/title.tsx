import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Title = ({ children, className }: Props): JSX.Element => {
  return <p className={twMerge("text-xl font-bold", className)}>{children}</p>;
};

export default Title;
