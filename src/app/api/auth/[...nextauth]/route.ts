import NextAuth from "next-auth";
import type { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        console.log(credentials);
        const user = { id: "1", name: "Admin", email: "matijafric@gmail.com" };
        return user;
      },
    }),
  ],
  session: { strategy: "jwt" },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
