import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavigationLayout from "@/component/layout/NavigationLayout";
import ReduxProvider from "@/component/provider/ReduxProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  auth,
  children,
}: Readonly<{
  auth: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistMono.variable}`}>
        <ReduxProvider>
          <NavigationLayout />
          <div className={"main_content"}>{children}</div>
          <div>{auth}</div>
        </ReduxProvider>
      </body>
    </html>
  );
}
