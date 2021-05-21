import React, { Fragment } from 'react';
import './App.css';
import { Routes } from './routes/routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

export const  App : React.FC = () => {
  return (
    <Fragment>
      <ToastContainer/>
      <Routes/>
    </Fragment>
  );
}

