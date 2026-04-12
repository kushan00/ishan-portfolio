import type { Metadata } from "next";
import { Alex_Brush, Manrope, Sora } from "next/font/google";
import "./globals.css";

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const signatureFont = Alex_Brush({
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
      <body className="min-h-full flex flex-col bg-[#eceeed] text-[#0d3b46] font-[var(--font-body)]">{children}</body>
    </html>
  );
}
