// mock the user api
export default async () => {
  // sleep 500
  await new Promise((res) => setTimeout(res, 500));

  if (document.cookie.includes("swr-test-token=swr")) {
    // authorized
    const email = sessionStorage.getItem("email");
    const password = sessionStorage.getItem("password");

    const data = {
      email,
      password,
    };
    return data;
  }

  // not authorized
  const error = new Error("Not authorized!");
  error.status = 403;
  throw error;
};
