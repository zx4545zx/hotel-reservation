import Layout from "./compoment/Layout/Layout";
import "../styles/globals.sass";
import '@fortawesome/fontawesome-svg-core/styles.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
