import {DefaultJWT} from "next-auth/jwt";
import {DefaultSession} from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      role: string;
      id: string;
      role?: string;
    } & DefaultSession["user"];
  }
  interface User {
    role: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    type?: string;
  }
}
