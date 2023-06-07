import './globals.css';
import { Open_Sans } from 'next/font/google';
import Header from './components/Header';
import NavSearch from './components/NavSearch';
import Footer from './components/Footer';

const open = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Lorem Ipsum Schools',
  description: 'Built by osaroDEV',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={open.className}>
        <section className='flex flex-col md:flex-col-reverse'>
          <Header />
          <NavSearch />
        </section>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}