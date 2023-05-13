import DrawerContextProvider from "@/contexts/drawerContexts";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DrawerContextProvider>
      <Component {...pageProps} />
    </DrawerContextProvider>
  );
}
