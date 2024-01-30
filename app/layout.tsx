import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { ThemeProvider } from "@/components/Theme/ThemeProvider";
import "./globals.css";
import Header from "@/components/Header";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage_grotesque",
  display: "swap",
});

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
      <body className={`dark:bg-[#1A1C29] bg-white, ${bricolage.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <Header /> */}

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
