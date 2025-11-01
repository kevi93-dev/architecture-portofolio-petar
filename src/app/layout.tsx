import "./globals.css";
import type { Metadata } from "next";
import Nav from "@/../components/Nav";
import Footer from "@/../components/Footer";

export const metadata: Metadata = {
  title: "petar stanojevic",
  description: "architecture portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <Nav />
        <main className="px-6 pb-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
