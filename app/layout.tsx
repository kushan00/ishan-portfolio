import type { Metadata } from "next";
import { Manrope, Pacifico, Sora } from "next/font/google";
import "./globals.css";

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const signatureFont = Pacifico({
  variable: "--font-signature",
  weight: "400",
  subsets: ["latin"],
});

const nameFont = Sora({
  variable: "--font-name",
  weight: ["400", "500"],
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
    <html lang="en" className={`${bodyFont.variable} ${signatureFont.variable} ${nameFont.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#0d3b46]">
        {children}
      </body>
    </html>
  );
}
