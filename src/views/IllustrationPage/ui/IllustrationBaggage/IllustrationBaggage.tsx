import { IllustrationBlock } from '@/entities/IllustrationBlock/ui/IllustrationBlock';
import cls from './IllustrationBaggage.module.scss';

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
  { src: '/assets/pictures/baggage/baggage-1.png', styles: 'reverse-book-1' },
  { src: '/assets/pictures/baggage/baggage-2.png', styles: 'reverse-book-2' },
  { src: '/assets/pictures/baggage/baggage-3.png', styles: 'reverse-book-3' },
  { src: '/assets/pictures/baggage/baggage-4.png', styles: 'reverse-book-4' },
  { src: '/assets/pictures/baggage/baggage-6.png', styles: 'reverse-book-5' },
];

export const IllustrationBaggage = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div className={cls.wrapperBaggage} ref={ref}>
      <IllustrationBlock images={images} blockInfo={blockInfo} reverse />
    </div>
  );
});
