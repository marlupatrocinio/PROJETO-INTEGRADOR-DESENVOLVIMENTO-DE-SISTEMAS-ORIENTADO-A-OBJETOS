import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Senac Application",
  description: "Created with Next JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen w-full flex flex-col justify-center items-center bg-custom_blue`} >{children}</body>
    </html>
  );
}
