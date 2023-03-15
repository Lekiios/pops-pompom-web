import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/client";
export default async function getUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const data = await prisma.pompom_users.findUnique({
        where: {
          email: JSON.parse(req.body).email,
        },
      });
      res.status(200).json(data);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
