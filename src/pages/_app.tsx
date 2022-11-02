import "../styles/globals.css";
import type { AppProps } from "next/app";
import { LoadingProvider, JobsDataProvider } from "../providers";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LoadingProvider>
      <JobsDataProvider>
        <Component {...pageProps} />
      </JobsDataProvider>
    </LoadingProvider>
  );
}

export default MyApp;
