import { FooterComp } from 'components/FooterComp/FooterComp';
import { HeaderComp } from 'components/HeaderComp/HeaderComp';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { SharedLayoutConteiner } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <SharedLayoutConteiner>
      <HeaderComp />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <FooterComp />
    </SharedLayoutConteiner>
  );
};
