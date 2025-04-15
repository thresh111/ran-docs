import { RootProvider } from 'fumadocs-ui/provider';
import type { Metadata, Viewport } from 'next';

import './globals.css';

import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Ran Docs',
  description: 'Ran Docs',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" />
      </head>
      <body className="flex flex-col min-h-dvh">
        <RootProvider theme={{ defaultTheme: 'dark' }}>
          <Providers>{children}</Providers>
        </RootProvider>
      </body>
    </html>
  );
}
