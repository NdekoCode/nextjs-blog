import { AuthOptions, getServerSession } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

import prisma from '@/lib/connect';
import { PrismaAdapter } from '@auth/prisma-adapter';

export const AUTH_OPTIONS: AuthOptions = {
  debug: true,
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: String(process.env.GITHUB_CLIENT_ID) || "",
      clientSecret: String(process.env.GITHUB_SECRET) || "",
      profile(profile) {
        return {
          id: profile.id.toString(),
          email: profile?.email || "",
          image: profile.avatar_url,
        };
      },
    }),
    GoogleProvider({
      clientId: String(process.env.GOOGLE_CLIENT_ID),
      clientSecret: String(process.env.GOOGLE_SECRET),
      authorization: {
        params: {
          scope: "openid email profile",
        },
      },
      profile(profile) {
        console.log("🔄 Profil Google:", JSON.stringify(profile, null, 2));
        return {
          id: profile.sub,
          name: profile.name,
          firstName: profile.given_name || "",
          lastName: profile.family_name || "",
          email: profile.email || "",
          image: profile.picture,
          emailVerified: Boolean(profile.email_verified) ? new Date() : null,
        };
      },
    }),
  ],
};

export const getAuthSession = async () => await getServerSession(AUTH_OPTIONS);

export const auth = async () => {
  const session = await getAuthSession();
  const isAuthenticated = session?.user;
  const isConnected = isAuthenticated && session?.user && session.user.email;
  return {
    isAuthenticated,
    isConnected,
    session,
  };
};
