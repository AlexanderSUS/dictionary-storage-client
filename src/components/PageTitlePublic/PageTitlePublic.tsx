import React from 'react';

import styles from './PageTitlePublic.module.scss';

type Props = React.PropsWithChildren<{}>;

const PageTitlePublic: React.FC<Props> = ({ children }) => (
  <p className={styles.p}>{children}</p>
);

export default PageTitlePublic;
