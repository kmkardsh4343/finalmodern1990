"use client";

import { useEffect, useState } from "react";
import { getUser } from "../../../app/lib/auth";

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    setUser(getUser());
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      {user ? (
        <p className="mt-4 text-lg">Welcome, {user.name}</p>
      ) : (
        <p className="mt-4 text-lg text-red-500">Not logged in</p>
      )}
    </div>
  );
}
