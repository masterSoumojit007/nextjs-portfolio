import type { Metadata } from "next";
import { Inter,Montserrat } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Soumojit's Portfolio",
  description: "Modern & Minimal Portfolio",
  icons: {
    icon: '/public/favicon.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}