/* eslint-disable jsx-a11y/media-has-caption */
import MeaningsList from 'components/MeaningsList/MeaningsList';
import React from 'react';
import { PublicWord } from 'types/api';

import styles from './WordCardPublic.module.scss';

type Props = {
  data: PublicWord;
};

const WordCard: React.FC<Props> = ({ data }) => {
  const {
    word, phonetic, audio, meaning,
  } = data;

  return (
    <div className={styles.card} id={data.word}>
      <h3 className={styles.word}>{word}</h3>
      <p className={styles.phonetic}>{phonetic}</p>
      <audio>
        <track label={word} src={audio} />
      </audio>
      <MeaningsList meanings={meaning} />
    </div>
  );
};

export default WordCard;
