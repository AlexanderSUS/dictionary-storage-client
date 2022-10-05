import React, { useCallback, useEffect, useState } from 'react';

import styles from './GoTopButton.module.scss';

const GoTopButton = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const goToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const memoizedOnScroll = useCallback(() => {
    window.onscroll = () => {
      scrollFunction();
    };
  }, []);

  useEffect(() => {
    memoizedOnScroll();

    return memoizedOnScroll;
  }, [memoizedOnScroll]);

  return (
    <button
      className={`${styles.topButton} ${isVisible ? styles.visible : ''}`}
      type="button"
      onClick={goToTop}
    >
      top
    </button>
  );
};

export default GoTopButton;
