import { FooterComp } from 'components/FooterComp/FooterComp';
import { HeaderComp } from 'components/HeaderComp/HeaderComp';
import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { SharedLayoutConteiner } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <SharedLayoutConteiner>
      <HeaderComp />
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
      <FooterComp />
    </SharedLayoutConteiner>
  );
};

export default SharedLayout;