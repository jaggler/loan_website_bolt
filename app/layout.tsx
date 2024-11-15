import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Macho Co-operative',
  description: 'Empowering Your Financial Future',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} gradient-bg min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}