import React from 'react';

import styles from './ArrowIcon.module.scss';

type Props = {
  onClick: VoidFunction;
  isOpen: boolean;
};

const ArrowUpIcon: React.FC<Props> = ({ onClick, isOpen }) => {
  const styleTransform = { transform: 'rotate(180deg)' };

  return (
    <svg
      style={isOpen ? styleTransform : undefined}
      onClick={onClick}
      className={styles.icon}
      viewBox="0 0 24 24"
    >
      <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" />
    </svg>
  );
};
export default ArrowUpIcon;
