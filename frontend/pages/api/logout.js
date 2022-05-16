import { withIronSessionApiRoute } from "iron-session/next";

import { sessionOptions } from "../../libs/session";

export default withIronSessionApiRoute(async (req, res) => {
  const { id } = await req.body;
  const body = {
    status: "offline",
  };

  try {
    const userAuthenUrl = `${process.env.NEXT_PUBLIC_DORADORA_API_URL}/staffs/${id}`;
    const resp = await fetch(userAuthenUrl, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await resp.json();

    if (data?.error) {
      res.json({ error: data.error, message: data.error });
      return;
    }

    if (data) {
      const user = {
        isLoggedIn: false,
        email: "",
        fname: "",
        lname: "",
        status: "offline",
        id: "",
      };
      req.session.destroy();
      // res.json(user);
      res.json(data);
    } else {
      res.json({ error: "oh no something bad just happen" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Service is not available", message: error.message });
  }
}, sessionOptions);
