import React, { useState } from 'react';
import Page from 'components/Page/Page';
import WordForm from 'forms/WordForm/WordForm';
import { PublicWord } from 'types/api';
import WordCard from 'components/WordCardPublic/WordCardPublic';

import PublicService from 'api/PublicService';
import { AxiosError } from 'axios';
import Loader from 'components/Loader/Loader';
import PageTitlePublic from 'components/PageTitlePublic/PageTitlePublic';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

const WordPage = () => {
  const [word, setWord] = useState<PublicWord | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [notFound, setNotFound] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const findWord = async (query: string) => {
    setNotFound(false);
    setIsLoading(true);
    setError(false);
    setWord(null);

    try {
      const res = await PublicService.findWord(query);

      setWord(res.data);
    } catch (e) {
      if (e instanceof AxiosError && e.response && e.response.data && e.response.data.message === 'Word not found') {
        setNotFound(true);
      } else {
        setError(true);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Page>
      <PageTitlePublic>Find your word via API</PageTitlePublic>
      <WordForm findWord={findWord} />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {!isLoading && word && <WordCard data={word} />}
      {!isLoading && notFound && <ErrorMessage text="Word not found" />}
    </Page>
  );
};

export default WordPage;
