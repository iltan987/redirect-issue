"use server";

import { signIn } from "./auth";

export async function goToLogin() {
  await signIn();
}
