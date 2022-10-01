import React from 'react';
import Footer from 'app/Footer/Footer';
import Header from 'app/Header/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

export default Layout;
