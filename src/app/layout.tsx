import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tempo agora",
  description: "Desenvolvido por Dilley Andrade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <header>
          <Header />
        </header>
        <main>
          {children}
        </main>
        
      </body>
    </html>
  );
}
