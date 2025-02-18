import { IllustrationBlock } from '@/entities/IllustrationBlock/ui/IllustrationBlock';
import cls from './IllustrationBlackChicken.module.scss';

import BlackChicken1 from '@/shared/assets/pictures/blackChicken/blackChicken-1.png';
import BlackChicken2 from '@/shared/assets/pictures/blackChicken/blackChicken-2.png';
import BlackChicken3 from '@/shared/assets/pictures/blackChicken/blackChicken-21.png';
import BlackChicken4 from '@/shared/assets/pictures/blackChicken/blackChicken-41.png';
import BlackChicken5 from '@/shared/assets/pictures/blackChicken/blackChicken-51.png';
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
  {
    src: BlackChicken1,
    styles: 'book-1',
    addition: 'book-1-down',
  },
  {
    src: BlackChicken2,
    styles: 'book-2',
    addition: 'book-2-down',
  },
  {
    src: BlackChicken3,
    styles: 'book-3',
    addition: 'book-3-down',
  },
  {
    src: BlackChicken4,
    styles: 'book-4',
    addition: 'book-4-down',
  },
  {
    src: BlackChicken5,
    styles: 'book-5',
    addition: 'book-5-down',
  },
];

export const IllustrationBlackChicken = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div className={cls.wrapperBlackChicken} ref={ref}>
      <IllustrationBlock images={images} blockInfo={blockInfo} />
    </div>
  );
});
