import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import NavBar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Social app",
  description:
    "Full-Stack Social Media App Tutorial with React 19 & Next.js 15 & MySql | React Next.js Full Course.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="w-full bg-white max-sm:px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
            <NavBar />
          </div>

          <div className="w-full bg-white max-sm:px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
