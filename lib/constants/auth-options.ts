import { AuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

import prisma from '@/lib/connect';
import { PrismaAdapter } from '@auth/prisma-adapter';

export const AUTH_OPTIONS: AuthOptions = {
  debug: true,
  adapter:PrismaAdapter(prisma),
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
