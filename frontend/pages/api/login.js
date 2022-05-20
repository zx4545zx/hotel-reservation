import { withIronSessionApiRoute } from "iron-session/next";

import { sessionOptions } from "../../libs/session";

export default withIronSessionApiRoute(async (req, res) => {
  const { email, password } = await req.body;
  const body = {
    email: email,
    password: password,
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
        id: data?.staff.id,
        email: data?.staff.email,
        fname: data?.staff.first_name,
        lname: data?.staff.last_name,
        status: data?.staff.status,
        department: data?.department.name,
        position: data?.position.name,
        role: data?.role,
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
