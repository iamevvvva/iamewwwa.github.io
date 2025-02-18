import { IllustrationBlock } from '@/entities/IllustrationBlock/ui/IllustrationBlock';
import cls from './IllustrationBaggage.module.scss';

import Baggage1 from '@/shared/assets/pictures/baggage/baggage-1.png';
import Baggage2 from '@/shared/assets/pictures/baggage/baggage-2.png';
import Baggage3 from '@/shared/assets/pictures/baggage/baggage-3.png';
import Baggage4 from '@/shared/assets/pictures/baggage/baggage-4.png';
import Baggage5 from '@/shared/assets/pictures/baggage/baggage-6.png';
import { forwardRef } from 'react';

export interface IBlockInfo {
  title: string;
  subtitle: string;
  description: string;
  descriptionSecondBlock: string;
}

const blockInfo: IBlockInfo = {
  title: 'BAGGAGE',
  subtitle: '2023',
  description: 'BaggageDescription',
  descriptionSecondBlock: 'BaggageDescriptionSecondBlock',
};

const images = [
  {
    src: Baggage1,
    styles: 'reverse-book-1',
  },
  {
    src: Baggage2,
    styles: 'reverse-book-2',
  },
  {
    src: Baggage3,
    styles: 'reverse-book-3',
  },
  {
    src: Baggage4,
    styles: 'reverse-book-4',
  },
  {
    src: Baggage5,
    styles: 'reverse-book-5',
  },
];

export const IllustrationBaggage = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div className={cls.wrapperBaggage} ref={ref}>
      <IllustrationBlock images={images} blockInfo={blockInfo} reverse />
    </div>
  );
});
