import { IllustrationBlock } from '@/entities/IllustrationBlock/ui/IllustrationBlock';
import cls from './IllustrationBlackChicken.module.scss';

import BlackChicken1 from '@/shared/assets/pictures/blackChicken/blackChicken-1.png';
import BlackChicken2 from '@/shared/assets/pictures/blackChicken/blackChicken-2.png';
import BlackChicken3 from '@/shared/assets/pictures/blackChicken/blackChicken-3.png';
import BlackChicken4 from '@/shared/assets/pictures/blackChicken/blackChicken-4.png';
import BlackChicken5 from '@/shared/assets/pictures/blackChicken/blackChicken-5.png';

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
    'I created illustrations for the book "Bambi" by Felix Salten, using acrylic and tempera techniques. My goal was to convey the magical atmosphere of the forest and its inhabitants, immersing readers in a fairy-tale world.',
  descriptionSecondBlock:
    'I created illustrations for the book "Bambi" by Felix Salten, using acrylic and tempera techniques. My goal was to convey the magical atmosphere of the forest and its inhabitants, immersing readers in a fairy-tale world.',
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

export const IllustrationBlackChicken = () => {
  return (
    <div className={cls.wrapperBlackChicken}>
      <IllustrationBlock images={images} blockInfo={blockInfo} />
    </div>
  );
};
