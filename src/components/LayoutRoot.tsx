import { ReactNode } from "react";
import Header from "./Header";

interface ILayoutRootProps {
  children: ReactNode;
}

function LayoutRoot({ children }: ILayoutRootProps) {
  return (
    <section className="flex h-screen flex-col gap-3">
      <Header />
      {children}
    </section>
  );
}

export default LayoutRoot;