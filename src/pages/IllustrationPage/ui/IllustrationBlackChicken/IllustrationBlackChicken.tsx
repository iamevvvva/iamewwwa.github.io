import { IllustrationBlock } from '@/entities/IllustrationBlock/ui/IllustrationBlock';
import cls from './IllustrationBlackChicken.module.scss';

import BlackChicken1 from '@/shared/assets/pictures/blackChicken/blackChicken-1.png';
import BlackChicken2 from '@/shared/assets/pictures/blackChicken/blackChicken-2.png';
import BlackChicken3 from '@/shared/assets/pictures/blackChicken/blackChicken-3.png';
import BlackChicken4 from '@/shared/assets/pictures/blackChicken/blackChicken-4.png';
import BlackChicken5 from '@/shared/assets/pictures/blackChicken/blackChicken-5.png';
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
  description:
    'For my illustration of the black hen, I wanted to capture its mysterious and captivating essence. I chose to work with black ink to emphasize the darkness of its feathers and the enigmatic aura surrounding it. Using delicate strokes, I carefully depicted the intricate details of its plumage, layering the ink to create depth and texture.',
  descriptionSecondBlock:
    'As I worked on the illustration, I found myself captivated by the juxtaposition of the black ink and the bold red accents, each element complementing the other to create a visually arresting depiction of the black hen.',
};

const images = [
  {
    src: BlackChicken1,
    styles: 'book-1',
  },
  {
    src: BlackChicken2,
    styles: 'book-2',
    addition: 'book-2-down',
  },
  {
    src: BlackChicken3,
    styles: 'book-3',
  },
  {
    src: BlackChicken4,
    styles: 'book-4',
  },
  {
    src: BlackChicken5,
    styles: 'book-5',
  },
];

export const IllustrationBlackChicken = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div className={cls.wrapperBlackChicken} ref={ref}>
      <IllustrationBlock images={images} blockInfo={blockInfo} />
    </div>
  );
});
