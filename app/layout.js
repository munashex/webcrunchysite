import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from './components/Footer'




export const metadata = {
  title: "Webcrunchy",
  description: "Web Design and Development Agency",
  keywords: ['Website design', 'Ecommerce Website Design', 'Web Development', 'Mobile App Development', 'Shopify Web Design'],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      </head>
      <body className="font-sans w-full">
        <div className="w-fit overflow-x-hidden">
        <Navbar/>
        {children}
        <Footer/>
        </div>
        </body>
    </html>
  );
}