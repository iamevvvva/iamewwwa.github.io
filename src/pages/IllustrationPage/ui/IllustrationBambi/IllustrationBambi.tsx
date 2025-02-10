import { IllustrationBlock } from '@/entities/IllustrationBlock/ui/IllustrationBlock';
import cls from './IllustrationBambi.module.scss';

import Bambi1 from '@/shared/assets/pictures/bambi/bambi-1.png';
import Bambi2 from '@/shared/assets/pictures/bambi/bambi-2.png';
import Bambi3 from '@/shared/assets/pictures/bambi/bambi-3.png';
import Bambi4 from '@/shared/assets/pictures/bambi/bambi-4.png';
import Bambi5 from '@/shared/assets/pictures/bambi/bambi-5.png';
import Bambi6 from '@/shared/assets/pictures/bambi/bambi-6.png';
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
  description:
    'I created illustrations for the book "Bambi" by Felix Salten, using acrylic and tempera techniques. My goal was to convey the magical atmosphere of the forest and its inhabitants, immersing readers in a fairy-tale world.',
  descriptionSecondBlock:
    'Working with acrylic allowed me to achieve bright, saturated colors and clear contours. Thanks to the quick drying of acrylic, I could apply multiple layers, creating depth and richness of color in each illustration.',
};

const images = [
  {
    src: Bambi1,
    styles: 'book-1',
  },
  {
    src: Bambi2,
    styles: 'book-2',
  },
  {
    src: Bambi3,
    styles: 'book-3',
  },
  {
    src: Bambi4,
    styles: 'book-4',
  },
  {
    src: Bambi5,
    styles: 'book-5',
  },
  {
    src: Bambi6,
    styles: 'book-6',
  },
];

export const IllustrationBambi = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div className={cls.wrapperBambi} ref={ref}>
      <h1 className={cls.IllustrationTitle}>Illustration</h1>
      <IllustrationBlock images={images} blockInfo={blockInfo} />
    </div>
  );
});
