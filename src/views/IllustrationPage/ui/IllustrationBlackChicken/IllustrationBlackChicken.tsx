import { IllustrationBlock } from '@/entities/IllustrationBlock/ui/IllustrationBlock';
import cls from './IllustrationBlackChicken.module.scss';

import { forwardRef } from 'react';

export interface IBlockInfo {
  title: string;
  subtitle: string;
  description: string;
  descriptionSecondBlock: string;
}

const blockInfo: IBlockInfo = {
  title: 'BLACK CHICKEN',
  subtitle: '2023',
  description: 'BlackChikenDescription',
  descriptionSecondBlock: 'BlackChikenDescriptionSecondBlock',
};

const images = [
  { src: '/assets/pictures/blackChicken/blackChicken-1.png', styles: 'book-1', addition: 'book-1-down' },
  { src: '/assets/pictures/blackChicken/blackChicken-22.png', styles: 'book-2', addition: 'book-2-down' },
  { src: '/assets/pictures/blackChicken/blackChicken-21.png', styles: 'book-3', addition: 'book-3-down' },
  { src: '/assets/pictures/blackChicken/blackChicken-41.png', styles: 'book-4', addition: 'book-4-down' },
  { src: '/assets/pictures/blackChicken/blackChicken-51.png', styles: 'book-5', addition: 'book-5-down' },
];

export const IllustrationBlackChicken = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div className={cls.wrapperBlackChicken} ref={ref}>
      <IllustrationBlock images={images} blockInfo={blockInfo} />
    </div>
  );
});
