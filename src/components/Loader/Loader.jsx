import React from 'react';
import { Circles } from 'react-loader-spinner';
import { BoxForLoader } from './Loader_style';

export const Loader = () => (
  <BoxForLoader>
    <Circles
      height="40"
      width="40"
      color="#8BAA36"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass="Loader"
    />
  </BoxForLoader>
);
