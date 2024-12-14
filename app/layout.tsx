// app/layout.tsx

import { SessionProvider } from "next-auth/react"; // Import SessionProvider
import { Poppins } from 'next/font/google'; // Import Google font
import "./globals.css"; // Global styles

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={poppins.className}>
        {/* Wrap your app in SessionProvider to make session accessible globally */}
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
