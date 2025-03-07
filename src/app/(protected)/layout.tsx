import React, {ReactNode} from "react";
import {TheSidebar} from "./components";
import {Geist, Geist_Mono} from "next/font/google";
import type {Metadata} from "next";
import "../globals.css";
import {APP_DESCRIPTION, APP_NAME, APP_SLOGAN} from "@/lib/constants";
import DashBoardHeader from "./components/DashBoardHeader";
import {Toaster} from "@/components/ui/toaster";
import AuthProvider from "@/context/Authprovider";


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

const Layout = ({children}: {children: ReactNode}) => {
  return (
    <html lang="en">
    
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthProvider>
          <main className="flex justify-between"></main>
          <div className="relative bg-[#f7f6f9] h-full min-h-screen font-[sans-serif]">
            <div className="flex items-start">
              <nav id="sidebar" className="hidden lg:block lg:min-w-[250px] w-max max-lg:min-w-8">
                <TheSidebar />
              </nav>

              <section className="main-content w-full ">
                <DashBoardHeader />
                <div className="">{children}</div>
              </section>
            </div>
          </div>
          <Toaster />
        </AuthProvider>
     
      </body>
    </html>
  );
};

export default Layout;
