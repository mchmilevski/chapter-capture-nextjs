'use client';
import '@/app/ui/globals.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

import { inter } from '@/app/ui/fonts';
import Footer from '@/app/ui/footer';
import Header from '@/app/ui/header';
import VideoBackground from '@/app/ui/video-background';

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased min-h-screen flex flex-col bg-fixed bg-no-repeat bg-cover`}
      >
        <VideoBackground />
        <QueryClientProvider client={queryClient}>
          <div className="bg-background px-10 flex-1 flex flex-col m-auto left-0 right-0 md:w-4/5 2xl:w-8/12">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
