import { API_BASE_URL, API_ENDPOINTS } from "./config";

export async function registerUser(data: { name: string; email: string; password: string }) {
  try {
    const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.REGISTER}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      return { message: "Registration successful" };
    } else {
      return { error: result.message || "Registration failed" };
    }
  } catch (error) {
    return { error: "Network error" };
  }
}

export async function loginUser(data: { email: string; password: string }) {
  try {
    const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.LOGIN}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      return { token: result.token };
    } else {
      return { error: result.message || "Login failed" };
    }
  } catch (error) {
    return { error: "Network error" };
  }
}

export async function logoutUser() {
  try {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
    const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.LOGOUT}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });

    if (response.ok) {
      if (typeof window !== "undefined") {
        localStorage.removeItem("token");
      }
      return { message: "Logout successful" };
    } else {
      return { error: "Logout failed" };
    }
  } catch (error) {
    return { error: "Network error" };
  }
}

export async function getUser() {
  try {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
    const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.PROFILE}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });

    const result = await response.json();

    if (response.ok) {
      return { user: result };
    } else {
      return { error: result.message || "Failed to get user" };
    }
  } catch (error) {
    return { error: "Network error" };
  }
}
