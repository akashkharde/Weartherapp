import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import { ReactNode } from 'react';

interface Props {
  title?: string;
  slug?: string; // Add slug property to the Props interface
  children: ReactNode;
}

function Layout({ title = '', slug = '', children }: Props) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;

