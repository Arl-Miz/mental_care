import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import StressTest from "./test/page";
import Navbar from "./navbar/page";
// import StressTest from "./pages/stressTest";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
      <div className="pt-12">{children}</div>
      </body>
    </html>
  );
}
