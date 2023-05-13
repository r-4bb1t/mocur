import AuthContextProvider from "@/contexts/authContexts";
import TreeContextProvider from "@/contexts/treeContexts";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <AuthContextProvider>
        <TreeContextProvider>
          <Component {...pageProps} />
        </TreeContextProvider>
      </AuthContextProvider>
    </SessionProvider>
  );
}
