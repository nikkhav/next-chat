import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../mongodb/database";
import User from "../../mongodb/models/userModel";

export default async function registerHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      await connectDB();
      const { username, password, firstName, lastName } = req.body;
      const candidate = await User.findOne({ username });

      if (candidate) {
        return res.status(400).json({
          status: "error",
          message: "This username already exists",
        });
      }

      const newUser = User.create({
        username,
        password,
        firstName,
        lastName,
      });

      res.status(200).json({
        status: "success",
        message: "Registration successful",
        data: {
          user: newUser,
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
