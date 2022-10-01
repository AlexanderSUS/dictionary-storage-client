import Page from 'components/Page/Page';
import WordForm from 'forms/WordForm/WordForm';
import React from 'react';

import styles from './WordPage.module.scss';

const WordPage = () => (
  <Page>
    <p className={styles.p}>Find your word via API</p>
    <WordForm />
  </Page>
);

export default WordPage;
