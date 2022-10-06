import React from 'react';

import styles from './ResultList.module.scss';

type Props = {
  found: string[];
  notFound: string[];
};

const ResultList: React.FC<Props> = ({ found, notFound }) => {
  if (!notFound && !found) {
    return null;
  }

  return (
    <div className={styles.result}>
      {found.length && (
      <p>
        <span className={styles.green}>Found words: </span>
        {found.map((word, index) => (
          <React.Fragment key={`#${word}`}>
            <a className={styles.link} href={`#${word}`}>
              {word}
            </a>
            {index !== found.length - 1 ? ', ' : '' }
          </React.Fragment>
        ))}
      </p>
      )}
      {notFound.length ? (
        <p className={styles.notFound}>
          <span className={styles.red}>Not found words: </span>
          {notFound.join(', ')}
        </p>
      ) : null}
    </div>
  );
};

export default ResultList;
