"use client";

import { signIn } from "next-auth/react";

export const GoToLoginMethod2 = () => {
  return (
    <button type="button" onClick={() => signIn()}>
      Go login page (Method 2)
    </button>
  );
};
