"use server";

import { signIn, signOut, auth, update } from "@/lib/auth";

export const signInWithCredentials = async (formData: FormData) => {};

export const signInWithGoogle = async () => {
  await signIn("google", {
    /* 옵션 */
  });
  // ...
};

export const signInWithGitHub = async () => {
  await signIn("github", {
    /* 옵션 */
  });
  // ...
};

export const signOutWithForm = async (formData: FormData) => {
  await signOut();
};

export const getSession = async () => {
  return await auth();
};
