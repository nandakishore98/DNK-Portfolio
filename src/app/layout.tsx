import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nanda Kishore D | Product Manager",
  description:
    "Product Manager with 4 years in enterprise AI & digital product delivery. MBA from BITSoM (BITS Pilani). PMP Certified.",
  keywords: [
    "Product Manager",
    "AI",
    "BFSI",
    "Conversational AI",
    "SBI Life",
    "PMP",
    "BITSoM",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark antialiased">
      <body className="min-h-screen bg-slate-950 text-slate-100 font-sans">
        {children}
      </body>
    </html>
  );
}
