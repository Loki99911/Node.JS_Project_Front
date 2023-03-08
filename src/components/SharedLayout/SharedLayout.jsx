import { FooterComp } from 'components/FooterComp/FooterComp';
import { HeaderComp } from 'components/HeaderComp/HeaderComp';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <HeaderComp />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <FooterComp />
    </>
  );
};
