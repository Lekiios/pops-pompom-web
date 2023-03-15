import { NextApiRequest, NextApiResponse } from "next";
interface Data {
  username: string;
}
export default function login(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ username: "Lorenzo" });
}
