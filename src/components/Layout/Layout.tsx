import { Outlet } from 'react-router-dom';
import { HeaderMain } from '../../pages/Header/Header';
import { Footer } from '../../pages/Footer/Footer';

export const Layout = () => {
  return (
    <>
      <HeaderMain />
      <Outlet />
      <Footer />
    </>
  );
};
