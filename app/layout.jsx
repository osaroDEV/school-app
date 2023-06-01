import './globals.css';
import { Inter } from 'next/font/google';
import Header from './components/Header';
import NavSearch from './components/NavSearch';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Lorem Ipsum Schools',
  description: 'Built by osaroDEV',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        <NavSearch />
        <main>{children}</main>
      </body>
    </html>
  );
}
