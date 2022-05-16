import { SWRConfig } from "swr";

import fetchJson from "../libs/fetchJson";

import "../styles/globals.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{ fetcher: fetchJson, onError: (err) => console.log(err) }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
