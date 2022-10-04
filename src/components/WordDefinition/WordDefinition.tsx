import React from 'react';
import { Definition } from 'types/api';

import styles from './WordDefinition.module.scss';

type Props = {
  data: Definition;
};

const WordDefinition: React.FC<Props> = ({ data }) => {
  const { definition, example } = data;

  return (
    <div className={styles.definition}>
      <p>
        <span className={styles.italic}>
          Definition:
        </span>
        {' '}
        {definition}
      </p>
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
