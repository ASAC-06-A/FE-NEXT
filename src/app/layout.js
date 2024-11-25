import './globals.css';
import ThemeProvider from '@/context/ThemeProvider';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import { META } from '@/constants/metadata';

export const metadata = {
  metadataBase: new URL(META.url),
  alternates: {
    canonical: META.url,
  },
  title: META.title,
  description: META.description,
  keywords: [...META.keyword],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: META.title,
    description: META.description,
    siteName: META.title,
    locale: 'ko_KR',
    type: 'website',
    url: META.url,
    images: {
      url: META.ogImage,
    },
  },
  twitter: {
    title: META.title,
    description: META.description,
    images: {
      url: META.ogImage,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='ko'>
      <body>
        <ThemeProvider>
          <Header />
          <div className='min-h-screen'>{children}</div>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
