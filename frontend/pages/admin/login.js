import LoginForm from "../compoment/Admin/LoginForm";
import { useForm } from "react-hook-form";

import Router from "next/router";
import axios from "axios";

const Admin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post(`/api/login`, data)
      .then((res) => {
        Router.push("/admin");
      })
      .catch((e) => {
        setError("sumit", { message: "login error" });
        console.log("error " + e);
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
                onSubmit={onSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;
