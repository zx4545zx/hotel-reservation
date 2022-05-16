import { withIronSessionApiRoute } from "iron-session/next";

import { sessionOptions } from "../../libs/session";

export default withIronSessionApiRoute(async (req, res) => {
  const { email, password } = await req.body;
  const body = {
    email: "admin",
    password: "1234",
  };

  try {
    const userAuthenUrl = `${process.env.NEXT_PUBLIC_DORADORA_API_URL}/staffs/login`;
    const resp = await fetch(userAuthenUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      mode: "cors",
    });
    const data = await resp.json();

    if (data?.error) {
      res.json({ error: data.error, message: data.error });
      return;
    }

    if (data) {
      const user = {
        isLoggedIn: true,
        email: data?.email,
        fname: data?.first_name,
        lname: data?.last_name,
        status: data?.status,
        // accessRole: data?.user.access_role,
        id: data?.id,
      };
      req.session.user = user;
      await req.session.save();
      res.json(user);
      // res.json(data);
    } else {
      res.json({ error: "oh no something bad just happen" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Service is not available", message: error.message });
  }
}, sessionOptions);
