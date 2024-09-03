import { IllustrationBlock } from '@/entities/IllustrationBlock/ui/IllustrationBlock';
import cls from './IllustrationBaggage.module.scss';

import Baggage1 from '@/shared/assets/pictures/baggage/baggage-1.png';
import Baggage2 from '@/shared/assets/pictures/baggage/baggage-2.png';
import Baggage3 from '@/shared/assets/pictures/baggage/baggage-3.png';
import Baggage4 from '@/shared/assets/pictures/baggage/baggage-4.png';
import Baggage5 from '@/shared/assets/pictures/baggage/baggage-5.png';

export interface IBlockInfo {
  title: string;
  subtitle: string;
  description: string;
  descriptionSecondBlock: string;
}

const blockInfo: IBlockInfo = {
  title: 'BAGGAGE',
  subtitle: '2023',
  description:
    "When I decided to illustrate Marshak's \"Baggage,\" I knew I wanted to convey its through the play of colors. I chose yellow and orange - bright and cheerful shades that embodied the warmth and energy of the story's words. Starting my work, I began creating a base of yellow tempera. This color filled the pages of my illustrations with light and warmth, as if each one came alive under the morning sun's rays. Yellow became the background on which I began to embody the images of characters and events.",

  descriptionSecondBlock:
    'To add depth and dynamics, I added orange shadows, applied with a pencil. These shadows gave my illustrations volume and liveliness. They seemed to underline every line and shape, making the pictures even more expressive.',
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

export const IllustrationBaggage = () => {
  return (
    <div className={cls.wrapperBaggage}>
      <IllustrationBlock images={images} blockInfo={blockInfo} reverse />
    </div>
  );
};
