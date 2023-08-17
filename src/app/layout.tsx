"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anton Markov | Portfolio",
  description: "Anton Markov, Frontend Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentRoute = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="text-lg text-white w-1/4 absolute top-5 left-0 right-0 ml-auto mr-auto">
          <ul className="flex justify-between text-center">
            <li
              className={
                currentRoute === "/"
                  ? "bg-gray-800 w-2/4 hover:bg-gray-700"
                  : "w-2/4 hover:bg-gray-700"
              }
            >
              <Link href={"/"} className="w-full block">
                /home
              </Link>
            </li>
            <li
              className={
                currentRoute === "/projects"
                  ? "bg-gray-800 w-2/4 hover:bg-gray-700"
                  : "w-2/4 hover:bg-gray-700"
              }
            >
              <Link href={"/projects"} className="w-full block">
                /projects
              </Link>
            </li>
          </ul>
        </div>
        {children}
      </body>
    </html>
  );
}
