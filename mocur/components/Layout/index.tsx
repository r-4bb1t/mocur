import { ReactNode } from "react";
import Header from "./Header";
import React from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white bg-background min-h-screen">
      <Header />
      <main className="pt-32">{children}</main>
    </div>
  );
}
