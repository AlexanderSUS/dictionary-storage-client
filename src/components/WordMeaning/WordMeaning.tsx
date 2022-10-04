import WordDefinition from 'components/WordDefinition/WordDefinition';
import ArrowIcon from 'icons/ArrowIcon/ArrowIcon';
import React, { useState } from 'react';
import { Meaning } from 'types/api';

import styles from './WordMeaning.module.scss';

type Props = {
  meaning: Meaning;
};

const WordMeaning: React.FC<Props> = ({ meaning }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const defLength = meaning.definitions.length;

  const togleDefinitions = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.listItem} key={meaning.partOfSpeech}>
      <h5 className={styles.partOfSpeech}>
        {`${meaning.partOfSpeech}: `}
      </h5>
      <p className={styles.count}>
        {`${defLength} definition${defLength > 1 ? 's' : ''}`}
      </p>
      {meaning.definitions.map((definition) => (
        <WordDefinition
          key={definition.definition}
          data={definition}
          isOpen={isOpen}
        />
      ))}
      {defLength > 1 && <ArrowIcon onClick={togleDefinitions} isOpen={isOpen} />}
    </div>

  );
};

export default WordMeaning;
