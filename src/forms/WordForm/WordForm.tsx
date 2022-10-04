import React, { SyntheticEvent } from 'react';

import styles from './WordForm.module.scss';

type Props = {
  findWord: (query: string) => void;
};

const WordForm: React.FC<Props> = ({ findWord }) => {
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      word: {
        value: string,
      }
    };

    const word = target.word.value;
    if (word) {
      findWord(word);
    }
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <input className={styles.input} type="text" name="word" />
      <input className={styles.submit} type="submit" value="find" />
    </form>
  );
};

export default WordForm;
