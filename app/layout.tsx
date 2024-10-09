import '@/app/ui/globals.css';
import { inter } from '@/app/ui/fonts';
import VideoBackground from "@/app/ui/video-background";
import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <VideoBackground />
    <body className={`${inter.className} antialiased`}>
      <div className='bg-background m-auto left-0 right-0 min-h-screen md:w-4/5 2xl:w-8/12'>
        <div className='px-10'>
          <Header />
          {children}
          <Footer />
        </div>
      </div>
    </body>
    </html>
  );
}
