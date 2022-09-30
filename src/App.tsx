import React from 'react';
import Header from './app/Header/Header';
import Footer from './app/Footer/Footer';
import AppRouter from './app/AppRouter/AppRouter';

function App() {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
