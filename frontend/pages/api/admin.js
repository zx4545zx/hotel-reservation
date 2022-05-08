export default function handler(req, res) {
  let user = {
    username: "admin",
    password: "1234",
    status: "offline",
    role: 'admin'
  };

  try {
    if (req.method === "GET") {
      res.status(200).json(user);
    }
    // log in, log out
    if (req.method === "POST" && req.body) {
      //check username , password
      if (
        req.body.username === user.username &&
        req.body.password === user.password
      ) {
        // check status
        if (req.body.status === "online") {
          user.status = "offline";
        } else {
          user.status = "online";
        }

        res.status(200).json(user);
      } else {
        res.status(401).json({ message: "username or password is wrong" });
      }
    }
  } catch (error) {
    // error
    res.status(500).json({ message: error });
  }
}
