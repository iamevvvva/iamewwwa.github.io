import { GraphicsBlock } from '@/entities/GraphicsBlock/ui/GraphicsBlock';
import NewYork1 from '@/shared/assets/pictures/graphics/graphics-new-york-1.png';
import NewYork2 from '@/shared/assets/pictures/graphics/graphics-new-york-2.png';
import NewYork3 from '@/shared/assets/pictures/graphics/graphics-new-york-3.png';

const data = {
  name: 'NEW YORK',
  year: 2022,
  desc: 'GraphicsNewYork',
  images: [{ img: NewYork1 }, { img: NewYork2 }, { img: NewYork3 }],
};

import cls from './GraphicsNewYork.module.scss';

export const GraphicsNewYork = () => {
  return (
    <section className={cls.mainWrapper}>
      <h1 className={cls.graphicsTitle}>Graphics</h1>
      <GraphicsBlock item={data} />
    </section>
  );
};
