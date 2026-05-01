import type { Metadata } from "next";
import { Inter, Pacifico, Sora , Satisfy } from "next/font/google";
import "./globals.css";

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const titleFont = Satisfy({
  variable: "--font-title",
  weight: "400",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Ishan Kavinda | Software Engineer",
  description: "Portfolio website for software engineer Ishan Kavinda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${titleFont.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-[#0d3b46] antialiased">
        {children}
      </body>
    </html>
  );
}
