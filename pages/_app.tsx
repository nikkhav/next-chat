import type { AppProps } from "next/app";
import "/styles/main.scss";
import "/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../store/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />{" "}
    </Provider>
  );
}

export default MyApp;
