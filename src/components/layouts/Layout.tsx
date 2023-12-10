import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import { ReactNode } from 'react';

interface Props {
  title?: string; // Making title optional
  children: ReactNode;
}

function Layout({ title, children }: Props) {
  return (
    <>
      <Header />
      <main>
        {title && <h1>{title}</h1>}
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
