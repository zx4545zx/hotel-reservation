import Navbar from "./Navbar";
import Footer from "./Footer";
import useUser from "../../../libs/useUser";

const Layout = ({ children }) => {
  const { user } = useUser();

  if (!user) {
    return (
      <progress className="progress is-small is-primary" max="100"></progress>
    );
  }

  return (
    <>
      <div>
        <Navbar user={user} />
        <main className="container py-6">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
