import { AuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

export const AUTH_OPTIONS: AuthOptions = {
  debug: true,
  providers: [
    GithubProvider({
      clientId: String(process.env.GITHUB_ID) || "",
      clientSecret: String(process.env.GITHUB_SECRET) || "",
    }),
    GoogleProvider({
      clientId: String(process.env.GOOGLE_ID),
      clientSecret: String(process.env.GOOGLE_SECRET),
    }),
  ],
};
