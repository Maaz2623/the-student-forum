import React from "react";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="min-h-screen flex items-center justify-center">{children}</main>;
}
