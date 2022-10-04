import React, { useEffect, useState } from 'react';
import Page from 'components/Page/Page';
import { ParseTextResponse } from 'types/api';
import PublicService from 'api/PublicService';
import { AxiosError } from 'axios';

import TextForm from 'forms/TextForm/TextForm';
import PublicCardList from 'components/PublicCardList/PublicCardList';
import styles from './TextPage.module.scss';

const TextPage = () => {
  const [data, setData] = useState<ParseTextResponse>();
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const parseText = async (query: string) => {
    setIsLoading(true);
    setError(false);

    try {
      const res = await PublicService.parseText(query);

      setData(res.data);
    } catch (e) {
      if (e instanceof AxiosError && e.response && e.response.data.message === 'Word not found') {
        setError(true);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {}, [error]);

  return (
    <Page>
      <p className={styles.p}>Get definitions of words from inserted text</p>
      <TextForm parseText={parseText} />
      {isLoading && <h3 className={styles.error}>Loading...</h3>}
      {error && <h3>Opps, some erronr occoured</h3>}
      {!isLoading && data?.notFound.length && (
      <p className={styles.notFound}>
        Not found words:
        {' '}
        {data.notFound.join(', ')}
      </p>
      )}
      {!isLoading && data?.found.length && <PublicCardList cards={data?.found} />}
    </Page>
  );
};
export default TextPage;
