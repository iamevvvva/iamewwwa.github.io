import { GraphicsBlock } from '@/entities/GraphicsBlock/ui/GraphicsBlock';

const data = {
  name: 'NEW YORK',
  year: 2022,
  desc: 'GraphicsNewYork',
  images: [
    { img: '/assets/pictures/graphics/graphics-new-york-1.png' },
    { img: '/assets/pictures/graphics/graphics-new-york-2.png' },
    { img: '/assets/pictures/graphics/graphics-new-york-3.png' },
  ],
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
