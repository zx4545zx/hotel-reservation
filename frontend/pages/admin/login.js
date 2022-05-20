import LoginForm from "../compoment/Admin/LoginForm";
import { useForm } from "react-hook-form";
import useUser from "../../libs/useUser";
import Router from "next/router";
import axios from "axios";
import fetchJson, { FetchError } from "../../libs/fetchJson";

const Admin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm();

  const { mutateUser } = useUser({
    redirectTo: "/admin",
    redirectIfFound: true,
  });

  // const onSubmit = (data) => {

  //   axios
  //     .post(`/api/login`, data)
  //     .then((res) => {
  //       Router.push("/admin");
  //     })
  //     .catch((e) => {
  //       setError("sumit", { message: "login error" });
  //       console.log("error " + e);
  //     });
  // };

  const onSubmit = async (data, e) => {
    e.nativeEvent.preventDefault();

    const userAuthenUrl = `/api/login`;

    try {
      const fetchResult = await fetchJson(userAuthenUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      if (fetchResult.error != undefined) {
        setError("submit", { message: fetchResult.error });
      }

      mutateUser(fetchResult);
    } catch (error) {
      if (error instanceof FetchError) {
        setError("submit", { message: "something went wrong." });
      } else {
        console.error("An unexpected error happened: ", error);
      }
    }
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
