import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "../src/components/Header/Header";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
