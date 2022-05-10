import LoginForm from "../compoment/Admin/LoginForm";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

import Router from "next/router";
import axios from "axios";

import useUser from "../../data/use-user";
import { login } from "../../libs/auth";

const Admin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm();
  const { user, mutate, loggedOut } = useUser();

  useEffect(() => {
    if (user && !loggedOut) {
      Router.replace("/admin");
    }
  }, [user, loggedOut]);

  const onSubmit = (data) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_DORADORA_API_URL}/staffs/login`, data)
      .then((res) => {
        // setAdmin(res.data);
        mutate();
        login(res.data);
        Router.replace("/admin");
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
