import './globals.css';
import { Noto_Sans_Display } from 'next/font/google';
import Header from './components/Header';
import NavSearch from './components/NavSearch';
import Footer from './components/Footer';
import Socials from './components/Socials';

const noto_display = Noto_Sans_Display({ 
  weight: ['400', '700'],
  subsets: ['latin'] 
});

export const metadata = {
  title: 'Lorem Ipsum Schools',
  description: 'Built by osaroDEV',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={noto_display.className}>
        <section className='flex flex-col md:flex-col-reverse'>
          <Header />
          <NavSearch />
        </section>
        <main>{children}</main>
        <Footer />
        <Socials />
      </body>
    </html>
  );
}
