const LoginForm = ({ register, handleSubmit, errors, clearErrors, onSubmit }) => {
  return (
    <form action="" className="box" onSubmit={handleSubmit(onSubmit)}>
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
            {...register("password")}
          />
        </div>
      </div>

      {errors.submit && (
        <div className="notification is-danger p-2">
          {errors.submit.message}
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
