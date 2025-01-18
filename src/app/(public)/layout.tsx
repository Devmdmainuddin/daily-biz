import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "../globals.css";
import {APP_DESCRIPTION, APP_NAME, APP_SLOGAN} from "@/lib/constants";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header/index";
import {Toaster} from "@/components/ui/toaster";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: `${APP_NAME}. ${APP_SLOGAN}`,
  },
  description: APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      {process.env.NODE_ENV=="development" && (
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6182407366748084"
     crossOrigin="anonymous"></Script>
    )}
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
