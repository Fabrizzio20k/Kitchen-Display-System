import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "@/redux/store/redux-provider";

export const metadata: Metadata = {
  title: "Kitchen Display System",
  description: "A kitchen display system for restaurants",
  icons: {
    icon: "/icons/icon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      <html lang="es">
        <body className="bg-slate-900">{children}</body>
      </html>
    </ReduxProvider>
  );
}
