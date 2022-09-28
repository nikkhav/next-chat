import type { AppProps } from "next/app";
import "/styles/main.scss";
import "/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
