/* eslint-disable jsx-a11y/media-has-caption */
import WordDefinition from 'components/WordDefinition/WordDefinition';
import React from 'react';
import { PublicWord } from 'types/api';

import styles from './WordCard.module.scss';

type Props = {
  data: PublicWord;
};

const WordCard: React.FC<Props> = ({ data }) => {
  const {
    word, phonetic, audio, partOfSpeech, meaning,
  } = data;

  return (
    <div className={styles.card}>
      <h3 className={styles.word}>{word}</h3>
      <p className={styles.phonetic}>{phonetic}</p>
      <audio>
        <track label={word} src={audio} />
      </audio>
      <p>
        <span className={styles.italic}>
          Part of speech:
        </span>
        {' '}
        {partOfSpeech.join(', ')}
      </p>
      {
        meaning.map((m) => (
          <div key={m.partOfSpeech}>
            <h5 className={styles.italic}>
              {m.partOfSpeech}
            </h5>
            {m.definitions.map((def) => (
              <WordDefinition key={def.definition} data={def} />
            ))}
          </div>
        ))
      }
    </div>
  );
};

export default WordCard;
