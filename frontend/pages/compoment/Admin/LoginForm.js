const LoginForm = ({ register, handleSubmit, errors, clearErrors, login }) => {
  return (
    <form action="" className="box" onSubmit={handleSubmit(login)}>
      <div className="field">
        <label htmlFor="" className="label">
          Username
        </label>
        <div className="control">
          <input
            type="text"
            placeholder="username"
            className="input"
            required
            {...register("username")}
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
            {...register("password")}
          />
        </div>
      </div>

      {errors.notRegistered && (
        <div className="notification is-danger p-2">
          {errors.notRegistered.message}
        </div>
      )}

      <div className="field is-flex is-justify-content-center mt-5">
        <button
          className="button is-success"
          type="submit"
          onClick={() => clearErrors()}
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
