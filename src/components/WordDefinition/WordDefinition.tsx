import React from 'react';
import { Definition } from 'types/api';

import styles from './WordDefinition.module.scss';

type Props = {
  data: Definition;
  isOpen: boolean;
};

const WordDefinition: React.FC<Props> = ({ data, isOpen }) => {
  const { definition, example } = data;

  return (
    <div className={`${styles.definition} ${isOpen && styles.open}`}>
      <p>{definition}</p>
      {example && (
      <p>
        <span className={styles.italic}>
          Example:
        </span>
        {' '}
        {example}
      </p>
      )}
    </div>
  );
};

export default WordDefinition;
