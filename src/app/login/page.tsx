"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import { loginUser } from "../lib/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const result = await loginUser({email, password});

    if (result?.token) {
      setMessage("Login successful!");
      localStorage.setItem("token", result.token);
      window.location.href = "/dashboard";
    } else {
      setMessage(result?.error || "Login failed.");
    }

    setLoading(false);
  }

  return (
    <div className="w-full max-w-md">
      <Card className="shadow-xl border border-gray-200">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Login to Your Account
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                required
              />
            </div>

            {message && (
              <p className="text-center text-red-600 text-sm">{message}</p>
            )}

            <Button disabled={loading} className="w-full">
              {loading ? "Logging in..." : "Login"}
            </Button>

            <p className="text-center text-sm text-gray-500 mt-2">
              Don’t have an account?{" "}
              <Link href="/register" className="text-blue-600 hover:underline">
                Register
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
