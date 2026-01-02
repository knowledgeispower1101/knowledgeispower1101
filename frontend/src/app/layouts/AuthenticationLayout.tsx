import { lazy } from 'react';
import { Outlet } from 'react-router-dom';
const Header = lazy(() => import('@/features/home/components/Header'));
const Footer = lazy(() => import('@/features/home/components/Footer'));

export const AuthenticationLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
