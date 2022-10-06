import React from 'react';

import styles from './ArrowIcon.module.scss';

type Props = {
  onClick: VoidFunction;
  isOpen: boolean;
};

const ArrowUpIcon: React.FC<Props> = ({ onClick, isOpen }) => (
  <button className={styles.button} type="button" onClick={onClick}>
    <i
      className={`${styles.icon} ${isOpen ? styles.up : styles.down}`}
    />
  </button>
);
export default ArrowUpIcon;
