import { useForm } from "react-hook-form";

import fetchJson, { FetchError } from "../libs/fetchJson";
import useUser from "../libs/useUser";

import Layout from "./compoment/Layout/Layout";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm();

  const { mutateUser } = useUser({
    redirectTo: "/reservations",
    redirectIfFound: true,
  });

  const onSubmit = async (data, e) => {
    e.nativeEvent.preventDefault();
    const body = {
      email: data.email,
      password: data.password,
    };
    const userAuthenUrl = `/api/login`;

    try {
      const fetchResult = await fetchJson(userAuthenUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(body),
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
    <Layout>
      <div className="container mt-6">
        <div className="columns is-centered">
          <div className="column is-5-tablet is-4-desktop is-3-widescreen">
            <form action="" className="box">
              <div className="field">
                <label htmlFor="" className="label">
                  Email
                </label>
                <div className="control has-icons-left">
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
                <div className="control has-icons-left">
                  <input
                    type="password"
                    placeholder="*******"
                    className="input"
                    required
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
                {errors.submit && <p>{errors.submit.message}</p>}
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
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
