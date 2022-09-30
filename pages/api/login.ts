import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../mongodb/database";
import User from "../../mongodb/models/userModel";

export default async function loginHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      await connectDB();
      const { username, password } = req.body;
      const user = await User.findOne({
        username: username,
        password: password,
      });
      const passwordMatch = user.password === password;

      if (!user) {
        return res.status(400).json({
          status: "error",
          message: `User ${username} does not exist`,
        });
      }

      if (!passwordMatch) {
        return res.status(400).json({
          status: "error",
          message: "Incorrect password",
        });
      }

      res.status(200).json({
        status: "success",
        message: "Login successful",
        data: {
          user: user,
        },
      });
    } catch (err) {
      res.status(500).json({
        status: "error",
        message: "Internal server error",
      });
    }
  }
}
