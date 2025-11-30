import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Auth App",
  description: "Authentication example",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
