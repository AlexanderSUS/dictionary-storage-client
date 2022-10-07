import React from 'react';

import styles from './ButtonSubmit.module.scss';

type Props = {
  value: string;
  style?: string;
};

const ButtonSubmit: React.FC<Props> = ({ value, style }) => (
  <input className={`${styles.submit} ${style || ''}`} type="submit" value={value} />
);

ButtonSubmit.defaultProps = {
  style: '',
};

export default ButtonSubmit;
