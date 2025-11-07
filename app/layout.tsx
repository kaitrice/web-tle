import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: "The Lucky Effect",
  description: "The official The Lucky Effect website with all the latest news, video, music, tours dates, and more.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>
        <div className="text-slate-800 bg-orange-50">
              <Header />
              {children}
              <Footer />
           </div>
        <Analytics />
      </body>
    </html>
  );
}
