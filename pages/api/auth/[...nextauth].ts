import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "../../../models/UserModel";
import { getUserData } from "../../../lib/dbUtils";
import { Simulate } from "react-dom/test-utils";
import error = Simulate.error;
import bcrypt from "bcrypt";
export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },

  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const user: User = await getUserData(email);

        if (!user) {
          throw new Error("Invalid Email or Password!");
        }
        const isPasswordOk = await bcrypt.compare(password, user.password);

        if (!isPasswordOk) {
          throw new Error("Invalid Email or Password!");
        }

        return {
          id: user.id.toString(),
          name: user.firstName,
          email: user.email,
        };
      },
    }),
  ],
};

export default NextAuth(authOptions);
