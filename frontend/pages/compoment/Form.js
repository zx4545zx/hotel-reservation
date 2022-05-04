import Link from "next/link";

const Form = () => {
  return (
    <form className="form-horizontal section is-medium container is-max-desktop">
      <fieldset>
        <div className="field">
          <label className="label" for="username">
            Username
          </label>
          <div className="control">
            <input
              id="username"
              name="username"
              type="text"
              placeholder="username"
              className="input"
            />
          </div>
        </div>

        <div className="field">
          <label className="label" for="email">
            Email
          </label>
          <div className="control">
            <input
              id="email"
              name="email"
              type="text"
              placeholder="e.g. alex@example.com"
              className="input"
            />
          </div>
        </div>

        <div className="field">
          <label className="label" for="password">
            Password
          </label>
          <div className="control">
            <input
              id="password"
              name="password"
              type="password"
              placeholder="********"
              className="input"
            />
          </div>
        </div>

        <div className="field">
          <label className="label" for="confrim-password">
            Confrim Password
          </label>
          <div className="control">
            <input
              id="confrim-password"
              name="confrim-password"
              type="password"
              placeholder="********"
              className="input"
            />
          </div>
        </div>

        <div className="field mt-6">
          <label className="label" for="cancel"></label>
          <div className="control is-flex is-justify-content-center">
            <button id="cancel" name="cancel" className="button is-danger mx-3">
              <Link href="/">Cancel</Link>
            </button>
            <button id="submit" name="submit" className="button is-primary mx-3">
              Sign Up
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default Form