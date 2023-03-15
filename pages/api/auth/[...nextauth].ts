import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "../../../models/UserModel";
import { getUserData } from "../../../lib/dbUtils";
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
        if (user.password !== password) {
          return null;
        }

        return {
          id: user.id.toString(),
          name: user.firstName,
          email: user.email,
        };
      },
    }),
  ],
  pages: {
    signIn: `${process.env.BASE_URL}/auth/signin`,
  },
};

export default NextAuth(authOptions);
