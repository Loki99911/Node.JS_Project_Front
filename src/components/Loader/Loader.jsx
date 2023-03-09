import React from 'react';
import { Circles } from 'react-loader-spinner';
import styles from './Loader.module.css';

export const Loader = () => (
  <div className={styles.loader}>
    <Circles
      height="40"
      width="40"
      color="#13571a"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass="Loader"
    />
  </div>
);
