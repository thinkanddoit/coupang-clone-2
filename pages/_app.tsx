import "../styles/globals.css";
import type { AppProps } from "next/app";
import ReactQueryProvider from "../src/components/global/ReactQueryProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryProvider dehydratedState={pageProps.dehydratedState}>
      <Component {...pageProps} />
    </ReactQueryProvider>
  );
}

export default MyApp;
