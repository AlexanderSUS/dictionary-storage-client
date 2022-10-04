import WordMeaning from 'components/WordMeaning/WordMeaning';
import React from 'react';
import { Meaning } from 'types/api';

type Props = {
  meanings: Meaning[];
};

const MeaningsList: React.FC<Props> = ({ meanings }) => (
  <div>
    {meanings.map((m) => (<WordMeaning meaning={m} key={m.partOfSpeech} />)) }
  </div>
);

export default MeaningsList;
