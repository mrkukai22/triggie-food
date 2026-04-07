import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="bg-base text-text font-sans">
        {children}
      </body>
    </html>
  );
}