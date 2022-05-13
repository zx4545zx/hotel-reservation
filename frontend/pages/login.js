import Layout from "./compoment/Layout/Layout";

const Login = () => {
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
                <div className="control">
                  <input
                    type="email"
                    placeholder="e.g. bobsmith@gmail.com"
                    className="input"
                    required
                    name="email"
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
                    required
                    name="password"
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
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
