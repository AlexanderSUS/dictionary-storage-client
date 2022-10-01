import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ABOUT_ROUTE, TEXT_ROUTE, WORD_ROUTE } from 'const/routes';
import {
  WordPage, TextPage, About, NoMatch,
} from 'pages';
import Layout from 'app/Layout/Layout';

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<WordPage />} />
      <Route path={WORD_ROUTE} element={<WordPage />} />
      <Route path={TEXT_ROUTE} element={<TextPage />} />
      <Route path={ABOUT_ROUTE} element={<About />} />
      <Route path="*" element={<NoMatch />} />
    </Route>
  </Routes>
);

export default AppRouter;
