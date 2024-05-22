import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kitchen Display System",
  description: "A kitchen display system for restaurants",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
