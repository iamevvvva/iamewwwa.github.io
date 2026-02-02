import { IllustrationBlock } from '@/entities/IllustrationBlock/ui/IllustrationBlock';
import cls from './IllustrationBambi.module.scss';

import { forwardRef } from 'react';

export interface IBlockInfo {
  title: string;
  subtitle: string;
  description: string;
  descriptionSecondBlock: string;
}

const blockInfo: IBlockInfo = {
  title: 'BAMBI',
  subtitle: '2024',
  description: 'BambiDescription',
  descriptionSecondBlock: 'BambiDescriptionSecondBlock',
};

const images = [
  { src: '/assets/pictures/bambi/bambi-1.png', styles: 'book-1' },
  { src: '/assets/pictures/bambi/bambi-2.png', styles: 'book-2' },
  { src: '/assets/pictures/bambi/bambi-3.png', styles: 'book-3' },
  { src: '/assets/pictures/bambi/bambi-4.png', styles: 'book-4' },
  { src: '/assets/pictures/bambi/bambi-5.png', styles: 'book-5' },
  { src: '/assets/pictures/bambi/bambi-6.png', styles: 'book-6' },
];

export const IllustrationBambi = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div className={cls.wrapperBambi} ref={ref}>
      <h1 className={cls.IllustrationTitle}>Illustration</h1>
      <IllustrationBlock images={images} blockInfo={blockInfo} />
    </div>
  );
});
