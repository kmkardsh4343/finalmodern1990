import { logoutUser } from "./auth";

export function isAuthenticated(): boolean {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    return !!token;
  }
  return false;
}

export async function logout() {
  await logoutUser();
  if (typeof window !== "undefined") {
    window.location.href = "/login";
  }
}
