import { GraphicsBlock } from '@/entities/GraphicsBlock/ui/GraphicsBlock';
import NewYork1 from '@/shared/assets/pictures/graphics/graphics-new-york-1.png';
import NewYork2 from '@/shared/assets/pictures/graphics/graphics-new-york-2.png';
import NewYork3 from '@/shared/assets/pictures/graphics/graphics-new-york-3.png';

const data = {
  name: 'NEW YORK',
  year: 2022,
  desc: 'In 2022, while completing an assignment for the Stroganov University, I created a series of easel graphic works. The task required me to copy one painting by a selected artist and then complement it with three of my own works in a similar style. In my series, I chose an urban theme, inspired by architectural landscapes. In each piece, I focused on conveying the geometry of the cityscape, playing with building lines, shadows, and light. I emphasized sharp vertical and diagonal forms, creating a sense of scale and grandeur in the metropolis.',
  images: [{ img: NewYork1 }, { img: NewYork2 }, { img: NewYork3 }],
};

import cls from './GraphicsNewYork.module.scss';

export const GraphicsNewYork = () => {
  return (
    <div className={cls.mainWrapper}>
      <h1 className={cls.graphicsTitle}>Graphics</h1>
      <GraphicsBlock item={data} />
    </div>
  );
};
