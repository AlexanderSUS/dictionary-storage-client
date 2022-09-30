import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ABOUT_ROUTE, TEXT_ROUTE } from 'const/routes';
import { WordPage, TextPage, About } from 'pages';

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<WordPage />} />
    <Route path={TEXT_ROUTE} element={<TextPage />} />
    <Route path={ABOUT_ROUTE} element={<About />} />

  </Routes>
);

export default AppRouter;
