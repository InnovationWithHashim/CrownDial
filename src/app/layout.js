import { Montserrat, Source_Sans_3 } from 'next/font/google';
import "./globals.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const montserrat = Montserrat({
  weight: ['400', '500', '700'], // Specify weights as needed
  subsets: ['latin'],
  display: 'swap',
});

const sourceSans3 = Source_Sans_3({
  weight: ['400', '500', '700'], // Specify weights as needed
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "Crown Dial - Timeless Watches for Every Occasion",
  description: "Discover Crown Dial's exquisite collection of watches, where craftsmanship meets passion. Shop now for quality timepieces designed to stand the test of time.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.className} ${sourceSans3.className}`}>
      <body >
        <Navbar />

        {children}
        <Footer/>
        
        </body>
    </html>
  );
}
