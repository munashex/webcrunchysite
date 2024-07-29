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
      <body className="font-sans w-full">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
