import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Navbar />
        <main className="container py-6">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
