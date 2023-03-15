import { UserProps } from "../models/UserModel";

export const getUserData = async (email: string) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/getUser`, {
    method: "POST",
    body: JSON.stringify({ email: email }),
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to get User Infos!");
  }
  return data;
};

export const createUser = async (user: UserProps) => {
  const res = await fetch("/api/createUser", {
    method: "POST",
    body: JSON.stringify(user),
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to create user: " + JSON.stringify(user));
  }
  return data;
};
