import { lazy } from 'react';
import { Outlet } from 'react-router-dom';
const Navbar = lazy(() => import('@/features/home/components/Navbar'));
const Footer = lazy(() => import('@/features/home/components/Footer'));
const Header = lazy(() => import('@/features/home/components/Header'));

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
