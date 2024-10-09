import '@/app/ui/globals.css';

import React from 'react';

import { inter } from '@/app/ui/fonts';
import Footer from '@/app/ui/footer';
import Header from '@/app/ui/header';
import VideoBackground from '@/app/ui/video-background';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <VideoBackground />
      <body
        className={`${inter.className} antialiased min-h-screen flex flex-col bg-fixed bg-no-repeat bg-cover`}
      >
        <div className="bg-background flex-1 flex flex-col m-auto left-0 right-0 md:w-4/5 2xl:w-8/12">
          <div className="px-10 flex-1">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
