import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
// import Footer from './Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Caleb Woldemedhine - Portfolio',
  description: 'Personal portfolio of Caleb Woldemedhine, a Computer Science student specializing in AI and ML Development',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full min-h-screen flex flex-col bg-white`}>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
