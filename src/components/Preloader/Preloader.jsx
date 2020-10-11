import React from 'react';
import preloaderGif from '../../assets/preloader.gif';
import './Preloader.scss';

const Preloader = ({ pageloading }) => {
  return (
    <img
      src={preloaderGif}
      alt='loading...'
      className={pageloading ? 'preloader--big' : 'preloader--small'}
    />
  );
};

export default Preloader;
