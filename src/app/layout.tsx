import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import "@/style/_tailwind.css";
import "@/style/globals.css";
import "@/style/_font.css";
import "@/style/_colors.css";
import "@/style/_html.css";

export const metadata: Metadata = {
  title: "Kidoyz",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative w-full">
        <Navbar />
        <div className="container">{children}</div>
      </body>
      <Footer />
    </html>
  );
}
