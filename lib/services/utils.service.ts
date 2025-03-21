'use server';
import { cookies } from 'next/headers';

export const getToken = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  if (!token) {
    throw new Error("No token found");
  }
  return token.value;
};
