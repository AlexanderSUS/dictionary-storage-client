import React, { SyntheticEvent } from 'react';

import styles from './TextForm.module.scss';

type Props = {
  parseText: (query: string) => void;
};

const TextForm: React.FC<Props> = ({ parseText }) => {
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      text: {
        value: string,
      }
    };

    const word = target.text.value;
    if (word) {
      parseText(word);
    }
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <textarea className={styles.textarea} name="text" rows={5} cols={33} />
      <input className={styles.submit} type="submit" value="parse" />
    </form>
  );
};

export default TextForm;
