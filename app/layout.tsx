import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import RegisterModal from "@/app/components/modals/RegisterModal";

const font = Nunito({ 
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "Airbnb",
  description: "msking my first clone on next js ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
