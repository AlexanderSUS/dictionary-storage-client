import React, { useState } from 'react';
import Page from 'components/Page/Page';
import { ParseTextResponse } from 'types/api';
import PublicService from 'api/PublicService';

import TextForm from 'forms/TextForm/TextForm';
import PublicCardList from 'components/PublicCardList/PublicCardList';
import ResultList from 'components/ResultList/ResultList';
import GoTopButton from 'components/GoTopButton/GoTopButton';
import Loader from 'components/Loader/Loader';
import PageTitlePublic from 'components/PageTitlePublic/PageTitlePublic';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

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
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Page>
      <PageTitlePublic>Get definitions of words from inserted text</PageTitlePublic>
      <TextForm parseText={parseText} />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
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
