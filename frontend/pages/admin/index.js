import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import LoginForm from "../compoment/Admin/LoginForm";

const axios = require("axios");

const Admin = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm();

  const login = (d) => {
    axios
      .post("http://localhost:3000/api/admin", {
        username: d.username,
        password: d.password,
      })
      .then((res) => {
        router.replace("/admin/reservation");
      })
      .catch((e) => {
        setError("notRegistered", e.response.data);
      });
  };

  return (
    <section className="hero is-primary is-fullheight box">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-5-tablet is-4-desktop is-3-widescreen">
              <LoginForm
                register={register}
                handleSubmit={handleSubmit}
                errors={errors}
                clearErrors={clearErrors}
                login={login}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;
