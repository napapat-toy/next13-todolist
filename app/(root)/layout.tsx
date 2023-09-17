import TopBar from "@/components/shared/TopBar";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todolist App",
  description: "Todolist with Typescript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopBar />
        <main className="flex flex-col items-center">
          <div className="max-w-xl">{children}</div>
        </main>
      </body>
    </html>
  );
}
