import type { Metadata } from "next";
import "./globals.css";
import { courierPrime } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "Piper Bates Online CV",
  description: "Piper Bates Online CV - front end web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={courierPrime.className}>{children}</body>
    </html>
  );
}
