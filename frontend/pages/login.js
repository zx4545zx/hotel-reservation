import Layout from "./compoment/Layout/Layout";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";

import useUser from "../libs/useUser";
import fetchJson, { FetchError } from "../libs/fetchJson";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    clearErrors,
  } = useForm();

  const { mutateUser } = useUser({
    redirectTo: "/",
    redirectIfFound: true,
  });

  const onSubmit = async (data, e) => {
    e.nativeEvent.preventDefault();

    const userAuthenUrl = `/api/login_customer`;

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

      console.log(fetchResult);
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
    <Layout>
      <div className="container mt-6">
        <div className="columns is-centered">
          <div className="column is-5-tablet is-4-desktop is-3-widescreen">
            <form className="box" onSubmit={handleSubmit(onSubmit)}>
              <div className="field">
                <label htmlFor="" className="label">
                  Email
                </label>
                <div className="control">
                  <input
                    type="email"
                    placeholder="e.g. bobsmith@gmail.com"
                    className="input"
                    required
                    name="email"
                    {...register("email")}
                  />
                </div>
              </div>
              <div className="field">
                <label htmlFor="" className="label">
                  Password
                </label>
                <div className="control">
                  <input
                    type="password"
                    placeholder="*******"
                    className="input"
                    name="password"
                    {...register("password")}
                  />
                </div>
              </div>
              <div className="field">
                <label htmlFor="" className="checkbox">
                  <input type="checkbox" className="mr-2" />
                  Remember me
                </label>
              </div>

              <div className="field">
                <button
                  className="button is-success"
                  value="Login"
                  type="submit"
                  onClick={() => clearErrors()}
                >
                  Login
                </button>
              </div>

              <div className="is-flex is-justify-content-center">
                <Link href="/register" passHref>
                  <div className="button is-text is-fullwidth">
                    Create your Account
                    <FontAwesomeIcon icon={faArrowRight} className="mx-1" />
                  </div>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
