"use client";

import { SetStateAction, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "components/ui/card";
import { Input } from "components/ui/input";
import { Label } from "components/ui/label";
import { Button } from "components/ui/button";
import Link from "next/link";
import { registerUser } from "../lib/auth";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const result = await registerUser({name, email, password});

    if (result?.message) {
      setMessage("Registered successfully!");
    } else {
      setMessage(result?.error || "Registration failed.");
    }

    setLoading(false);
  }

  return (
    <div className="w-full max-w-md">
      <Card className="shadow-xl border border-gray-200">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Create Your Account
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <Label>Name</Label>
              <Input
                placeholder="Enter full name"
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
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
              <p className="text-center text-sm text-green-600">{message}</p>
            )}

            <Button disabled={loading} className="w-full">
              {loading ? "Registering..." : "Register"}
            </Button>

            <p className="text-center text-sm text-gray-500 mt-2">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-600 hover:underline">
                Login
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
