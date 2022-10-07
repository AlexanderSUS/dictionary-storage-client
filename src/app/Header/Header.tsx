import React from 'react';
import HeaderNavLink from 'components/HeaderNavLink/HeaderNavLink';
import {
  ABOUT_ROUTE, LOG_IN_ROUTE, SIGIN_UP_ROUTE, TEXT_ROUTE, WORD_ROUTE,
} from 'const/routes';
import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <nav>
      <ul className={styles.navList}>
        <li><HeaderNavLink to={WORD_ROUTE}>{WORD_ROUTE}</HeaderNavLink></li>
        <li><HeaderNavLink to={TEXT_ROUTE}>{TEXT_ROUTE}</HeaderNavLink></li>
        <li><HeaderNavLink to={ABOUT_ROUTE}>{ABOUT_ROUTE}</HeaderNavLink></li>
        <li><HeaderNavLink to={SIGIN_UP_ROUTE}>Sign in</HeaderNavLink></li>
        <li><HeaderNavLink to={LOG_IN_ROUTE}>Log in</HeaderNavLink></li>
      </ul>
    </nav>
  </header>
);

export default Header;
