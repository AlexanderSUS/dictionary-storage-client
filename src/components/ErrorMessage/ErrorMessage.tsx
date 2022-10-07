import React from 'react';

import styles from './ErrorMessage.module.scss';

type Props = {
  text?: string;
};

const ErrorMessage: React.FC<Props> = ({ text }) => (
  <h3 className={styles.error}>{text}</h3>
);

ErrorMessage.defaultProps = {
  text: 'Opps, some error occoured...',
};

export default ErrorMessage;
