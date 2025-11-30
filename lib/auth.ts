"use client";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// Register user
export async function registerUser(data: {
  name: string;
  email: string;
  password: string;
}) {
  try {
    const res = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    return await res.json();
  } catch (error) {
    console.error("Register Error:", error);
    return { message: "Failed to register" };
  }
}

// Login user
export async function loginUser(data: {
  email: string;
  password: string;
}) {
  try {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    return await res.json();
  } catch (error) {
    console.error("Login Error:", error);
    return { message: "Failed to login" };
  }
}

// Get user profile using token
export async function getProfile(token: string) {
  try {
    const res = await fetch(`${API_URL}/auth/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return await res.json();
  } catch (error) {
    console.error("Profile Error:", error);
    return null;
  }
}

// Logout user
export function logoutUser() {
  // Just remove the token from localStorage
  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
  }
}
