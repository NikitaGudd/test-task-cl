import { SITE_NAME } from '@/constants/seo.constants';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import cn from 'classnames';

const font = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: 'Auth Form with late validation',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(font.className)}>{children}</body>
    </html>
  );
}
