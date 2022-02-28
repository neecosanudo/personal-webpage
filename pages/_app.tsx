import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavPage from "@components/NavPage";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavPage />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
