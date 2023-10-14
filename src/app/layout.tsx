import { Navigation } from './components/header/Navigation';
import Head from 'next/head';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>Splitwisely</title>
      </Head>
      <Navigation />
      {children}
    </>
  );
}
