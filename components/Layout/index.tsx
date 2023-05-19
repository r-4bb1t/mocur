import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white bg-background min-h-screen h-full flex flex-col">
      <Header />
      <div className="h-full">{children}</div>
      <Footer />
    </div>
  );
}
