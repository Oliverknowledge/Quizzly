import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
})
export const metadata: Metadata = {
  title: "Quizzly",
  description: "Personalised AI for your examination needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className = "flex items-center">
      <head>
        <link rel = "icon" href = "/favicon.ico"/>
      </head>
      <body
        className={poppins.className}

      >
        {children}
      </body>
    </html>
  );
}
