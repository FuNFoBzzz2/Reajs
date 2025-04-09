import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import "./globals.css";
import Header from './components/header';
import Footer from './components/footer';

// Настройка шрифта Montserrat
const montserrat = Montserrat({
  weight: ['400', '500', '700'], // Укажите нужные начертания
  subsets: ['latin', 'cyrillic'], // Поддерживаемые языки
  display: 'swap', // Оптимизация загрузки
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
      <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
