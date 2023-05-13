import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white bg-background min-h-screen">
      <Header />
      <div className="">{children}</div>
      <Footer />
    </div>
  );
}
