import React, { useState } from 'react';
import Page from 'components/Page/Page';
import { ParseTextResponse } from 'types/api';
import PublicService from 'api/PublicService';
import { AxiosError } from 'axios';

import TextForm from 'forms/TextForm/TextForm';
import PublicCardList from 'components/PublicCardList/PublicCardList';
import ResultList from 'components/ResultList/ResultList';
import GoTopButton from 'components/GoTopButton/GoTopButton';
import Loader from 'components/Loader/Loader';
import PageTitlePublic from 'components/PageTitlePublic/PageTitlePublic';
// import styles from './TextPage.module.scss';

const TextPage = () => {
  const [data, setData] = useState<ParseTextResponse | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const parseText = async (query: string) => {
    setIsLoading(true);
    setError(false);
    setData(null);

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

  return (
    <Page>
      <PageTitlePublic>Get definitions of words from inserted text</PageTitlePublic>
      <TextForm parseText={parseText} />
      {isLoading && <Loader />}
      {error && <h3>Opps, some erronr occoured</h3>}
      {(data?.found || data?.notFound)
      && (
      <ResultList
        found={data?.found.map((wordData) => wordData.word)}
        notFound={data?.notFound}
      />
      )}
      {!isLoading && data?.found.length && <PublicCardList cards={data?.found} />}
      <GoTopButton />
    </Page>
  );
};
export default TextPage;
