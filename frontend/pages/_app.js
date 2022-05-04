import Layout from "./compoment/Layout/Layout";
import "../styles/globals.sass";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
