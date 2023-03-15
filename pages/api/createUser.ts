import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/client";
import { UserProps } from "../../models/UserModel";
import bcrypt from "bcrypt";

export default async function getUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const user: UserProps = JSON.parse(req.body);
    //TODO:
    // Check email already used
    if (req.method === "POST") {
      try {
        const password = await bcrypt.hash(user.password, 10);
        const data = await prisma.pompom_users.create({
          data: {
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            password,
          },
        });
        res.status(200).json(data);
      } catch (error) {
        return res.status(500).json({ message: "Error creating a new User" });
      }
    }
  } catch (error) {
    return res.status(500).json(error);
  }
}
