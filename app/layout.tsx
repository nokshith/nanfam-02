import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import BackToTop from '@/components/back-to-top';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Namfam - IT Recruitment for Telecom Companies',
  description: 'Connecting exceptional IT talent with leading telecom companies across the United States',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={`${inter.className} bg-white text-gray-900 dark:bg-black dark:text-white transition-colors duration-300`}>
        {/* 👇 ThemeProvider should wrap ONLY client content */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
