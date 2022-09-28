import type { NextApiRequest, NextApiResponse } from "next";

interface Messages {
  messages: string[];
  error?: any;
}

// Fake data
const messages: Messages = {
  messages: ["Hello", "World"],
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Messages>
) {
  try {
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({ messages: [], error: err });
  }
}
