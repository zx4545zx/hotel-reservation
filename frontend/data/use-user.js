import useSWR from "swr";
import { useEffect } from "react";
import Router from "next/router";

import userFetcher from "../libs/api-user";

export default function useUser() {
  const { data, mutate, error } = useSWR("api_user", userFetcher);

  const loading = !data && !error;
  const loggedOut = error && error.status === 403;

  useEffect(() => {
    if (loggedOut) {
      Router.replace("/admin/login");
    }
  }, [loggedOut]);
  if (loggedOut) return "redirecting...";

  return {
    loading,
    user: data,
    mutate,
  };
}
