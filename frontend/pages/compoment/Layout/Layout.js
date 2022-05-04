import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
        <main className="container pt-6">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
