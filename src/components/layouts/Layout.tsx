import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import { ReactNode } from 'react';

interface Props {
  title: string;
  slug?: string;
  children: ReactNode;
}

function Layout({children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
