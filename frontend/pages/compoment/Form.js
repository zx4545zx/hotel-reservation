import Link from "next/link";

const Form = () => {
  return (
    <form className="form-horizontal section container is-max-desktop p-6">
      <fieldset>
        <div className="field">
          <label className="label" htmlFor="fristname">
            Frist Name
          </label>
          <div className="control">
            <input
              id="fristname"
              name="fristname"
              type="text"
              placeholder="fristname"
              className="input"
            />
          </div>
        </div>
        <div className="field">
          <label className="label" htmlFor="lastname">
            Last Name
          </label>
          <div className="control">
            <input
              id="lastname"
              name="lastname"
              type="text"
              placeholder="lastname"
              className="input"
            />
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="phone">
            Phone Number
          </label>
          <div className="control">
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="0000000000"
              maxLength="10"
              className="input"
            />
          </div>
        </div>
        <div className="field">
          <label className="label" htmlFor="email">
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
          <label className="label" htmlFor="password">
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

        {/* <div className="field">
          <label className="label" htmlFor="confrim-password">
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
        </div> */}

        <div className="field mt-6">
          <label className="label" htmlFor="cancel"></label>
          <div className="control is-flex is-justify-content-center">
            <button id="cancel" name="cancel" className="button is-danger mx-3">
              <Link href="/">Cancel</Link>
            </button>
            <button
              id="submit"
              name="submit"
              className="button is-primary mx-3"
            >
              Sign Up
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default Form;
