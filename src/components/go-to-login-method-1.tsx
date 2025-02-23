"use client";

import { goToLogin } from "@/action";

export const GoToLoginMethod1 = () => {
  return (
    <form action={goToLogin}>
      <button type="submit">Go login page (Method 1)</button>
    </form>
  )
}