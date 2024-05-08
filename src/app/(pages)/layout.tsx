import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../interface/Navbar";
import Footer from "../interface/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Fusion Software Institute Pune | Top Software Training Institute Pune",
  description:
    "Pune's Top Institute for Quality IT Training Courses.100% Placement Record. Industry Focused Trainers. Software Testing.Java Development·Python-Data Science etc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
