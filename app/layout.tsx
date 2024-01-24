import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";

import "./globals.css";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Disney App",
  description: "Brought to you by Next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bricolage.className}>{children}</body>
    </html>
  );
}
