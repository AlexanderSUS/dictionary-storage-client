import React from 'react';

import styles from './WordForm.module.scss';

const WordForm = () => (
  <form className={styles.form}>
    <input className={styles.input} type="text" />
    <input className={styles.submit} type="submit" value="find" />
  </form>
);

export default WordForm;
