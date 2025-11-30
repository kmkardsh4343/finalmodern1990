"use client";

import { logout } from "../lib/auth-utils";
import { Button } from "./ui/button";

export default function Header() {
  const handleLogout = () => {
    logout();
  };

  return (
    <header className="bg-white/10 backdrop-blur-xl border-b border-white/20 p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">My App</h1>
        <Button
          onClick={handleLogout}
          variant="destructive"
        >
          Logout
        </Button>
      </div>
    </header>
  );
}
