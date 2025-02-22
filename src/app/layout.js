import { Poppins } from 'next/font/google';
import './globals.css';
import Nav from '@/Components/Shared/Nav';
import Footer from '@/Components/Shared/Footer';
import UnderNav from '@/Components/Shared/UnderNav';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
});

export const metadata = {
  title: 'Travel-nest',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="antialiased bg-[#F9F9F9]">
        <Nav />
        <UnderNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
