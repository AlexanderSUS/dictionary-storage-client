/* eslint-disable react/no-array-index-key */
import React from 'react';
import { PublicWord } from 'types/api';
import WordCardPublic from 'components/WordCardPublic/WordCardPublic';

type Props = {
  cards: PublicWord[];
};

const PublicCardList: React.FC<Props> = ({ cards }) => (
  <div>
    { cards.map((card, index) => (
      <WordCardPublic data={card} key={`${card.word}${index}`} />
    )) }
  </div>
);

export default PublicCardList;
