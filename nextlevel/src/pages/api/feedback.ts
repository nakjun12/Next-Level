import { NextApiRequest, NextApiResponse } from "next";

export default function feedback(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: "This works!" });
}
